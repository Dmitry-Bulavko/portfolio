import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeroComponent,
        SkillsComponent,
        AboutMeComponent,
        ExperienceComponent,
        ProjectsComponent,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
