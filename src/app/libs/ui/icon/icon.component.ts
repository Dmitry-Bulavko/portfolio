import { Component, Input, ViewEncapsulation } from "@angular/core";
import { AsyncPipe, NgIf } from "@angular/common";
import { DomPurifyPipe } from "../../core/pipes/dom-purify.pipe";
import { IconService } from "./icon.service";
import { BehaviorSubject, catchError, distinctUntilChanged, filter, Observable, of, switchMap } from "rxjs";
import { Icons } from "./icons.enum";
import { fromPromise } from "rxjs/internal/observable/innerFrom";

@Component({
    selector: "app-icon",
    standalone: true,
    imports: [
        NgIf,
        DomPurifyPipe,
        AsyncPipe,
    ],
    template: `
        <ng-container *ngIf="($icon | async) as content">
            <div [innerHTML]='content | domPurify'></div>
        </ng-container>
    `,
    styleUrl: "./icon.component.scss",
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class IconComponent {
    $iconId: BehaviorSubject<Icons | string> = new BehaviorSubject<Icons | string>('');
    _icon!: string;
    @Input() public set icon(value: Icons | string) {
        this._icon = value;
        this.$iconId.next(value);
    };
    public get icon(): string {
        return this._icon
    }
    constructor(private readonly iconService: IconService) {
    }
    $icon: Observable<string> = this.$iconId.pipe(
        filter(Boolean),
        distinctUntilChanged(),
        switchMap((id) => fromPromise(this.iconService.getIcon(id))
            .pipe(catchError(() => of('')))),
    )
}
