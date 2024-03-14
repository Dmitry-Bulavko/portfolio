import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    public projects: {
        icon: string,
        title: string,
        url: string,
    }[] = [
        {
            icon: '',
            title: 'Minesweeper',
            url: '/saper'
        },
        {
            icon: '',
            title: 'Minesweeper',
            url: '/saper'
        },
        {
            icon: '',
            title: 'Minesweeper',
            url: '/saper'
        },
    ]
}
