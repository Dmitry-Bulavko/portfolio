import { Component } from "@angular/core";

export enum Icons {
    GMAIL = "gmail",
    LINKEDIN = "linkedIn",
    TELEGRAM = "telegram",
    GITHUB = "github"
}

@Component({
    selector: "app-icons-sprite",
    standalone: true,
    imports: [],
    templateUrl: "./icons-sprite.component.html",
    styleUrl: "./icons-sprite.component.scss",
})
export class IconsSpriteComponent {
    protected readonly Icons = Icons;
}
