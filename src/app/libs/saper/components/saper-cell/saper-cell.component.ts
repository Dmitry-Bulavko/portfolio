import {Component, Input} from '@angular/core';
import {SaperCell} from "../../models/saper-cell.model";
import { NgIf, NgSwitch, NgSwitchCase } from "@angular/common";
import { CellLabelEnum } from "../../models/cell-label.enum";

@Component({
  selector: 'app-saper-cell',
  standalone: true,
    imports: [
        NgIf,
        NgSwitch,
        NgSwitchCase,
    ],
  templateUrl: './saper-cell.component.html',
  styleUrl: './saper-cell.component.scss'
})
export class SaperCellComponent {
    @Input({required: true})
    public data!: SaperCell;
    protected readonly CellLabelEnum = CellLabelEnum;
}
