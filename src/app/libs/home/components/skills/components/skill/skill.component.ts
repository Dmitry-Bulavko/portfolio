import { Component, Input } from "@angular/core";
import { NgForOf } from "@angular/common";

@Component({
    selector: "app-skill",
    standalone: true,
    imports: [
        NgForOf,
    ],
    templateUrl: "./skill.component.html",
    styleUrl: "./skill.component.scss",
})
export class SkillComponent {
    @Input({required: true}) public skill!: { name: string, level: number };
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
}
