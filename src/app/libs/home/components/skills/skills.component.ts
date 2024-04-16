import { Component } from "@angular/core";
import { HexComponent } from "./components/hex/hex.component";
import { CoreSkillsComponent } from "./components/core-skills/core-skills.component";
import { NgForOf } from "@angular/common";
import { SkillComponent } from "./components/skill/skill.component";
import { Icons } from "../../../ui/icon/icons.enum";

@Component({
    selector: "app-skills",
    standalone: true,
    imports: [
        HexComponent,
        CoreSkillsComponent,
        NgForOf,
        SkillComponent,
    ],
    templateUrl: "./skills.component.html",
    styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
    public skills: {
        topic: string,
        skills: {
            name: string,
            level: number,
            icon?: Icons,
        }[]
    }[] = [
        {
            topic: "Front-End",
            skills: [
                {name: "Angular 2+", level: 2, icon: Icons.ANGULAR},
                {name: "JavaScript", level: 2, icon: Icons.JAVASCRIPT},
                {name: "TypeScript", level: 2, icon: Icons.TYPESCRIPT},
                {name: "NgRX (Redux)", level: 2},
                {name: "HTML", level: 2},
                {name: "CSS", level: 2},
                {name: "SCSS", level: 2},
                {name: "React", level: 0},
                {name: "Vue", level: 0},
            ],
        },
        {
            topic: "Back-End",
            skills: [
                {name: "node.js", level: 1},
                {name: "NestJS", level: 1},
                {name: "Express", level: 1},
                {name: "NextJS", level: 0},
                {name: "PostgreSQL", level: 1},
                {name: "DynamoDB", level: 1},
                {name: "MongoDB", level: 0},
                {name: "Sequelize ORM", level: 0},
                {name: "Prisma ORM", level: 0},
            ],
        }
    ];

}
