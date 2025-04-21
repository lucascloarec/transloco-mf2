import {
    MF2_TRANSLOCO_CONFIG,
    MF2TranslocoConfig,
} from './mf-transloco.config';
import { makeEnvironmentProviders } from '@angular/core';
import { provideTranslocoTranspiler } from '@jsverse/transloco';
import { MF2TranslocoTranspiler } from './mf2-transloco-transpiler';
import { DraftFunctions } from 'messageformat/functions';

export function provideMF2Transloco(config?: MF2TranslocoConfig) {
    return makeEnvironmentProviders([
        {
            provide: MF2_TRANSLOCO_CONFIG,
            useValue: {
                ...config,
                functions: config?.includeDraftFunctions
                    ? {
                          ...DraftFunctions,
                          ...config?.functions,
                      }
                    : config?.functions,
            },
        },
        provideTranslocoTranspiler(MF2TranslocoTranspiler),
    ]);
}
