import { ChangeDetectionStrategy, Component, ElementRef, inject, NgZone, OnInit } from "@angular/core";
import { filter, fromEvent, throttleTime } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";

@Component({
    selector: "app-torch",
    standalone: true,
    imports: [],
    templateUrl: "./torch.component.html",
    styleUrl: "./torch.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TorchComponent implements OnInit {
    private eRef: ElementRef = inject(ElementRef);
    private router: Router = inject(Router);
    private zone: NgZone = inject(NgZone);

    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            fromEvent(window, "mousemove")
                .pipe(throttleTime(50))
                .subscribe((event: any) => {
                let x = event.pageX;
                let y = event.pageY;
                const maxHeight = window.scrollY + window.innerHeight;
                Object.assign(this.eRef.nativeElement.style, {
                    display: "block",
                    left: `${x - 50}px`,
                    top: `${(y + 100 > maxHeight ? maxHeight - 100 : y - 50)}px`,
                    maskPosition: `${-x}px ${y + 100 > maxHeight ? -maxHeight + 25 : -y - 25}px`,
                });
            });
            this.router.events
                .pipe(filter((event: NavigationEnd | any) => event instanceof NavigationEnd))
                .subscribe(() => {
                    this.eRef.nativeElement.style.display = "none";
                });
        });

    }
}
