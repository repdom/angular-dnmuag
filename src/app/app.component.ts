import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: `my-app`,
    templateUrl: `./app.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    activeItemIndex = 0;

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    onClick(item: string): void {
        this.alertService.open(item).subscribe();
    }
}
