import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        children: [
            {
                path: "",
                redirectTo: "controls",
                pathMatch: 'full'
            },
            {
                path: "controls",
                loadComponent: () => import("./pages/dashboard-controls/dashboard-controls.component").then(c => c.DashboardControlsComponent),
            },
        ],
    },

    {
        path: "**",
        redirectTo: "/",
    },
];
