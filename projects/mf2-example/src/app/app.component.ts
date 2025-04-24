import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [TranslocoPipe, FormsModule],
    templateUrl: './app.component.html',
})
export class AppComponent {
    translocoService = inject(TranslocoService);
    today = new Date();
    count = 0;

    changeLocale() {
        if (this.translocoService.getActiveLang() === 'fr') {
            this.translocoService.setActiveLang('en');
        } else {
            this.translocoService.setActiveLang('fr');
        }
    }
}
