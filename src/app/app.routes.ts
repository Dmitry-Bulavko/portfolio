import { Routes } from "@angular/router";
import { HomeComponent } from "./libs/home/home.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "saper",
        loadComponent: () => import("./libs/saper/saper.component").then(c => c.SaperComponent),
    },
    {
        path: "dashboard",
        loadChildren: () => import("./libs/dashboard/dashboard.module").then(m => m.DashboardModule),
        data: {
            hideHeader: true,
        }
    },
    {
        path: "**",
        redirectTo: "/",
    },
];
