import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { RouterLink } from "@angular/router";
import { NavigationComponent } from "../navigation/navigation.component";
import { IconComponent } from "../icon/icon.component";
import { Icons } from "../icon/icons.enum";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        LogoComponent,
        RouterLink,
        NavigationComponent,
        IconComponent,
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    protected readonly Icons = Icons;
}
