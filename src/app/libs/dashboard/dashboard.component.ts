import { Component } from "@angular/core";
import {
    RouterLink,
    RouterOutlet,
} from "@angular/router";
import { DashboardNavigationComponent } from "./components/dashboard-navigation/dashboard-navigation.component";

@Component({
    selector: "app-dashboard",
    standalone: true,
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.scss",
    imports: [
        RouterOutlet,
        RouterLink,
        DashboardNavigationComponent,
    ],
})
export class DashboardComponent {

}
