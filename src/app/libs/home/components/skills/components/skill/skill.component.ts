import { Component, Input } from "@angular/core";
import { NgForOf, NgIf } from "@angular/common";
import { IconComponent } from "../../../../../ui/icon/icon.component";
import { Icons } from "../../../../../ui/icon/icons.enum";

@Component({
    selector: "app-skill",
    standalone: true,
    imports: [
        NgForOf,
        IconComponent,
        NgIf,
    ],
    templateUrl: "./skill.component.html",
    styleUrl: "./skill.component.scss",
})
export class SkillComponent {
    @Input({required: true}) public skill!: { name: string, level: number, icon?: Icons };
    public levels: {
        name: string,
        index: number,
        description: string,
    }[] = [
        {
            name: 'Novice',
            index: 0,
            description: ''
        },
        {
            name: 'Intermediate',
            index: 1,
            description: ''
        },
        {
            name: 'Advanced',
            index: 2,
            description: ''
        },
        {
            name: 'Expert',
            index: 3,
            description: ''
        },
    ]
    protected readonly Icons = Icons;
}
