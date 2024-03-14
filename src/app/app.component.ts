import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { SaperComponent } from "./libs/saper/saper.component";
import { HeaderComponent } from "./libs/ui/header/header.component";
import { TorchComponent } from "./libs/ui/torch/torch.component";
import { IconsSpriteComponent } from "./libs/ui/icons-sprite/icons-sprite.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [CommonModule, RouterOutlet, SaperComponent, HeaderComponent, TorchComponent, IconsSpriteComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "portfolio";
}
