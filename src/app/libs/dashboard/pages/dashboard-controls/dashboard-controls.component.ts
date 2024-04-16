import { Component } from "@angular/core";
import { DashboardNavigationComponent } from "../../components/dashboard-navigation/dashboard-navigation.component";
import { RouterOutlet } from "@angular/router";
import { ButtonComponent } from "../../../ui/controls/button/button.component";
import { Icons } from "../../../ui/icon/icons.enum";
import { IconComponent } from "../../../ui/icon/icon.component";

@Component({
    selector: "app-dashboard-controls",
    standalone: true,
    templateUrl: "./dashboard-controls.component.html",
    styleUrl: "./dashboard-controls.component.scss",
    imports: [
        ButtonComponent,
        IconComponent,
    ],
})
export class DashboardControlsComponent {

    protected readonly Icons = Icons;
}
