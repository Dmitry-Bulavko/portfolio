import { Component, Input } from "@angular/core";
import { Icons } from "../icons-sprite/icons-sprite.component";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-icon',
  standalone: true,
    imports: [
        NgIf,
    ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
    @Input() public icon!: Icons;
}
