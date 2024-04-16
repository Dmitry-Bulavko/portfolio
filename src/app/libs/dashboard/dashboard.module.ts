import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { routes } from "./dashboard.routes";

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        DashboardComponent,
    ]
})
export class DashboardModule {}
