import { MessageFormatOptions } from 'messageformat';
import { InjectionToken } from '@angular/core';

export const MF2_TRANSLOCO_CONFIG = new InjectionToken<MF2TranslocoConfig>(
    'MF2_TRANSLOCO_CONFIG'
);

export interface MF2TranslocoConfig extends MessageFormatOptions<'string'> {
    includeDraftFunctions: boolean;
}
