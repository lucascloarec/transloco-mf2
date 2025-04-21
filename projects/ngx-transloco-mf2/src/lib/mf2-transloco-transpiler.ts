import {
    DefaultTranspiler,
    getValue,
    isObject,
    setValue,
    TranspileParams,
} from '@jsverse/transloco';
import { inject, Injectable } from '@angular/core';
import { MF2_TRANSLOCO_CONFIG } from './mf-transloco.config';
import { MessageFormat } from 'messageformat';

@Injectable()
export class MF2TranslocoTranspiler extends DefaultTranspiler {
    mf2TranslocoConfig = inject(MF2_TRANSLOCO_CONFIG, { optional: true });
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
                const mf = new MessageFormat(
                    this.locale,
                    transpiled,
                    this.mf2TranslocoConfig || {}
                );
                value = setValue(value, p, mf.format(param));
            });
            return value;
        }
        if (!Array.isArray(value)) {
            const transpiled = super.transpile(transpileParams);
            const mf = new MessageFormat(
                this.locale,
                transpiled,
                this.mf2TranslocoConfig || {}
            );
            return mf.format(params);
        }
        return value;
    }
}
