import { Component } from '@angular/core';
import { HexComponent } from "../hex/hex.component";

@Component({
  selector: 'app-core-skills',
  standalone: true,
    imports: [
        HexComponent,
    ],
  templateUrl: './core-skills.component.html',
  styleUrl: './core-skills.component.scss'
})
export class CoreSkillsComponent {
    public description: string | undefined;
    public skills: {title: string, icon: string}[] = [
        {
            title: 'JavaScript',
            icon: '',
        },
        {
            title: 'Angular',
            icon: '',
        },
        {
            title: 'CSS',
            icon: '',
        },
        {
            title: 'RxJS',
            icon: '',
        },
        {
            title: 'HTML',
            icon: '',
        },
        {
            title: 'TypeScript',
            icon: '',
        },
    ]
}
