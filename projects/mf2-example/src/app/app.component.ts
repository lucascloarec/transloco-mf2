import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
    selector: 'app-root',
    imports: [TranslocoPipe],
    templateUrl: './app.component.html',
})
export class AppComponent {
    translocoService = inject(TranslocoService);
    today = new Date();

    changeLocale() {
        if (this.translocoService.getActiveLang() === 'fr') {
            this.translocoService.setActiveLang('en');
        } else {
            this.translocoService.setActiveLang('fr');
        }
    }
}
