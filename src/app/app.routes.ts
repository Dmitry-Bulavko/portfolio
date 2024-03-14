import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
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
        path: "**",
        redirectTo: "/",
    },
];
