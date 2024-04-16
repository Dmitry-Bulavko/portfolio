import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard-navigation',
  standalone: true,
    imports: [
        RouterLink,
    ],
  templateUrl: './dashboard-navigation.component.html',
  styleUrl: './dashboard-navigation.component.scss'
})
export class DashboardNavigationComponent {

}
