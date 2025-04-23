import { inject, Injectable, InjectionToken } from '@angular/core';
import { DefaultTranspiler, getValue, isObject, setValue, TranspileParams } from '@jsverse/transloco';
import { MessageFormat, MessageFormatOptions } from 'messageformat';

export interface TranslocoMF2Config extends MessageFormatOptions<string> {
    includeDraftFunctions: boolean;
}

export const TRANSLOCO_MF2_CONFIG = new InjectionToken<TranslocoMF2Config>('TRANSLOCO_MF2_CONFIG');

@Injectable()
export class TranslocoMF2Transpiler extends DefaultTranspiler {
    mf2Config = inject(TRANSLOCO_MF2_CONFIG, { optional: true });
    private locale?: string;

    constructor() {
        super();
    }

    onLangChanged(lang: string) {
        this.locale = lang;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    override transpile(transpileParams: TranspileParams): any {
        let value = transpileParams.value;
        if (!value) {
            return value;
        }
        const { params, translation, key } = transpileParams;
        if (isObject(value) && params) {
            Object.keys(params).forEach((p) => {
                const param = getValue(params, p);
                const transpiled = super.transpile({
                    value: getValue(value as Record<string, unknown>, p),
                    params: param,
                    translation,
                    key,
                });
                const mf = new MessageFormat(this.locale, transpiled, this.mf2Config || {});
                value = setValue(value, p, mf.format(param));
            });
            return value;
        }
        if (!Array.isArray(value)) {
            const transpiled = super.transpile(transpileParams);
            const mf = new MessageFormat(this.locale, transpiled, this.mf2Config || {});
            return mf.format(params);
        }
        return value;
    }
}
