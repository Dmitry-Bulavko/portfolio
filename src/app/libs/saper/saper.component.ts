import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from "@angular/core";
import { AsyncPipe, JsonPipe, NgForOf, NgIf } from "@angular/common";
import { SaperCoreService } from "./services/saper-core.service";
import { SaperCell } from "./models/saper-cell.model";
import { SaperCheckStatusEnum } from "./models/saper-check-status.enum";
import { SaperCellComponent } from "./components/saper-cell/saper-cell.component";
import { CellLabelEnum } from "./models/cell-label.enum";
import { BehaviorSubject, debounceTime, map, Subject } from "rxjs";

@Component({
    selector: "app-saper",
    standalone: true,
    imports: [
        NgForOf,
        JsonPipe,
        NgIf,
        SaperCellComponent,
        AsyncPipe,
    ],
    templateUrl: "./saper.component.html",
    styleUrl: "./saper.component.scss",
    changeDetection: ChangeDetectionStrategy.Default,
})
export class SaperComponent implements OnInit {
    public columnsCount: number = 10;
    public rowsCount: number = 10;
    public bombsCount: number = 10;
    public bombsLeft: number = this.bombsCount;
    public field: SaperCell[][] = [];
    public status: SaperCheckStatusEnum = SaperCheckStatusEnum.PENDING;
    public time: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public interval: any;
    private clickSubject: Subject<any> = new Subject<any>();

    constructor(
        private readonly saperCoreService: SaperCoreService,
        private readonly zone: NgZone,
        private readonly cdr: ChangeDetectorRef,
    ) {
    }

    ngOnInit() {
        this.initField();
        this.clickSubject
            .pipe(
                debounceTime(50),
                map(({event, row, column}) => ({
                    type: event.type,
                    row,
                    column,
                })),
            ).subscribe(({type, row, column}) => {
                switch (type) {
                    case 'click':
                        this.openCell( row, column);
                        break;
                    case 'dblclick':
                        this.checkAround(row, column)
                        break;
                }
        });
    }

    openCell(row: number, column: number) {

        if (this.status === SaperCheckStatusEnum.PENDING) {
            this.startTimer();
        }
        this.saperCoreService.updateCell(this.field, row, column, {
            isOpened: true,
        });

        this.saperCoreService.openEmptyCells(this.field, row, column);

        this.bombsLeft = this.bombsCount - this.saperCoreService.getBombFlagsCount(this.field);
        this.checkEnd();
    }

    checkEnd() {
        this.status = this.saperCoreService.checkEnd(this.field, this.bombsCount);
        switch (this.status) {
            case SaperCheckStatusEnum.WIN:
                this.stopTimer();
                this.saperCoreService.markAllAsOpened(this.field);
                alert("YOU WIN!");
                this.initField();
                break;
            case SaperCheckStatusEnum.LOOSE:
                this.stopTimer();
                this.saperCoreService.markAllAsOpened(this.field);
                alert("YOU LOOSE");
                this.initField();
                break;
        }
    }

    toggleLabel(row: number, column: number) {
        const cell: SaperCell | undefined = this.saperCoreService.getCell(this.field, row, column);
        let label;
        switch (cell?.label) {
            case CellLabelEnum.QUESTION:
                label = CellLabelEnum.BOMB;
                break;
            case CellLabelEnum.BOMB:
                label = CellLabelEnum.EMPTY;
                break;
            case CellLabelEnum.EMPTY:
                label = CellLabelEnum.QUESTION;
                break;
            default:
                label = CellLabelEnum.EMPTY;
        }
        this.saperCoreService.updateCell(this.field, row, column, {label});
        this.bombsLeft = this.bombsCount - this.saperCoreService.getBombFlagsCount(this.field);
    }

    openEmptyCells(row: number, column: number) {
        this.saperCoreService.openEmptyCells(this.field, row, column);
    }

    initField() {
        this.stopTimer();
        this.time.next(0);
        this.status = SaperCheckStatusEnum.PENDING;
        this.field = this.saperCoreService.createEmptyField(this.rowsCount, this.columnsCount);
        this.saperCoreService.fillBombs(this.field, this.bombsCount);
        this.saperCoreService.countBombsAround(this.field);
    }

    startTimer() {
        this.zone.runOutsideAngular(() => {
            this.interval = setInterval(() => {
                this.time.next(this.time.value + 1);
                this.cdr.detectChanges();
            }, 1000);
        });
    }

    stopTimer() {
        clearInterval(this.interval);
    }

    checkAround(row: number, column: number) {
        this.saperCoreService.checkAround(this.field, row, column);
        this.checkEnd();
    }

    handleClickOnCell(event: MouseEvent, row: number, column: number) {
        this.clickSubject.next({event, row, column});
    }
}
