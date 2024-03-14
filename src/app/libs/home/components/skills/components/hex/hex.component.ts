import { Component, Input } from "@angular/core";

@Component({
    selector: "app-hex",
    standalone: true,
    imports: [],
    templateUrl: "./hex.component.html",
    styleUrl: "./hex.component.scss",
})
export class HexComponent {
    @Input() title: string = '';
}
