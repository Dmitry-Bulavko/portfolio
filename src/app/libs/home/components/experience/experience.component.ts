import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { DomPurifyPipe } from "../../../core/pipes/dom-purify.pipe";

@Component({
  selector: 'app-experience',
  standalone: true,
    imports: [
        NgForOf,
        DomPurifyPipe,
    ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    public experience: {
        company: string;
        role: string;
        description: string;
        from: string;
        to: string;
        skills: string[];
    }[] = [
        {
            company: 'EPAM Systems',
            role: 'Front-End Developer',
            from: 'Sep, 2021',
            to: 'Present',
            description: `EPAM`,
            skills: ['Angular', 'TypeScript', 'NestJS', 'DynamoDB']
        },
        {
            company: 'EPAM Systems',
            role: 'Front-End Developer',
            from: 'Sep, 2021',
            to: 'Present',
            description: `
                <p>Project:</p>
                <p>Project for space management, which allows to optimize expenses for offices rental payment based on analytics of workplace utilization</p>
                <p>Responsibilities:</p>
                <ul>
                    <li>Refactor application in case using Date objects. Instead of Date object functions and 3rd party libs functions luxon extended objects was created. This case resolve problem of date shifting in different time zones.</li>
                    <li>Update angular version from 10 to 13. Build time was drastically reduced. Also project rebuilding improving of app architecture amd technologies.</li>
                    <li>Continuously proposing improving of app architecture and technologies</li>
                    <li>Creating and improving existing reports in application</li>
                </ul>
            `,
            skills: ['Angular', 'TypeScript', 'NgRX', 'ServiceWorkers', 'Jasmine']
        },
        {
            company: 'Sotbit',
            role: 'Manager',
            from: 'Apr, 2019',
            to: 'Sep, 2021',
            description: `
                <p>During the first six months of my role as a project manager, my responsibilities included gathering information to prioritize product backlogs. This information was collected from customers feedback, analysis of products comments and reviews on the trading platform, as well as competitor analysis.</p>
                <p>After six months, the scope of tasks informally expanded to include:</p>
                <ul>
                <li>System analysis of the 1C-Bitrix platform</li>
                <li>Business analysis for clients of the implementation department</li>
                <li>Project management in the absence of the manager</li>
                <li>Organizing cultural and mass events</li>
                <li>Streamlining the development department's processes and attempting to implement agile methodologies</li>
                <li>Providing information support to the technical support department for developed products</li>
                <li>Organizing training courses for developed products</li>
                <li>Writing articles on released solution updates</li>
                <li>Direct work with clients on modifying released solutions</li>
                <li>Collaboratively organizing and conducting retrospectives</li>
                </ul>
            `,
            skills: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'PHP', 'Bitrix', 'Agile', 'Kanban']
        },
        {
            company: 'Sotbit',
            role: 'Tech writer',
            from: 'Oct, 2018',
            to: 'Apr, 2019',
            description: `
                <p>Major task is creating public products documentation</p>
                <p>To achieve this goal:</p>
                <ul>
                    <li>Discover company products including products source code</li>
                    <li>Creating documentation structure</li>
                    <li>Writing documentation in easy to understand way</li>
                </ul>
            `,skills: ['HTML', 'CSS']
        }
    ]
}
