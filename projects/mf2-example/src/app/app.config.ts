import {
    ApplicationConfig,
    inject,
    Injectable,
    isDevMode,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideMF2Transloco } from 'ngx-transloco-mf2';
import {
    provideTransloco,
    Translation,
    TranslocoLoader,
} from '@jsverse/transloco';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        return this.http.get<Translation>(`/i18n/${lang}.json`);
    }
}
export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideTransloco({
            config: {
                availableLangs: ['en', 'fr'],
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoader,
        }),
        provideMF2Transloco({ includeDraftFunctions: true }),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
    ],
};
