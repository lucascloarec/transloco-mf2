import { makeEnvironmentProviders } from '@angular/core';
import { provideTranslocoTranspiler } from '@jsverse/transloco';
import { DraftFunctions } from 'messageformat/functions';
import { TranslocoMF2Config, TRANSLOCO_MF2_CONFIG, TranslocoMF2Transpiler } from './transloco-mf2.transpiler';

export function provideTranslocoMF2Transpiler(config?: TranslocoMF2Config) {
    return makeEnvironmentProviders([
        {
            provide: TRANSLOCO_MF2_CONFIG,
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
        provideTranslocoTranspiler(TranslocoMF2Transpiler),
    ]);
}
