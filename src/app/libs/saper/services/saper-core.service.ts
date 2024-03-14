import { Injectable } from "@angular/core";
import { SaperCell } from "../models/saper-cell.model";
import { SaperCheckStatusEnum } from "../models/saper-check-status.enum";
import { CellLabelEnum } from "../models/cell-label.enum";

@Injectable({
    providedIn: "any",
})
export class SaperCoreService {
    createEmptyField(
        rowsCount: number,
        columnsCount: number,
    ): SaperCell[][] {
        const field: SaperCell[][] = [];
        for (let row: number = 0; row < rowsCount; row++) {
            const rowData: SaperCell[] = [];
            for (let column: number = 0; column < columnsCount; column++) {
                rowData.push({
                    isBomb: false,
                    bombsAround: 0,
                    isOpened: false,
                    label: CellLabelEnum.EMPTY,
                });
            }
            field.push(rowData);
        }
        return field;
    }

    fillBombs(field: SaperCell[][], bombsCount: number) {
        const rowsCount = field.length;
        const columnsCount = field[0].length;
        if (!rowsCount || !columnsCount) {
            throw new Error('Error while fill bombs process. Incorrect rows or columns count')
        }
        let bombsLeft = bombsCount
        while (bombsLeft > 0) {
            const randomRow = ~~(Math.random() * rowsCount)
            const randomColumn = ~~(Math.random() * columnsCount)
            const cell = field[randomRow][randomColumn];
            if (!cell.isBomb) {
                cell.isBomb = true;
                bombsLeft--;
            }
        }
    }

    countBombsAround(field: SaperCell[][]) {
        const rowsCount = field.length;
        const columnsCount = field[0].length;

        for (let row = 0; row < rowsCount; row++) {
            for (let column = 0; column < columnsCount; column++) {
                const cell = this.getCell(field, row, column);
                if (cell?.isBomb) {
                    this.incrementBombsAround(field, row - 1, column - 1);
                    this.incrementBombsAround(field, row - 1, column);
                    this.incrementBombsAround(field, row - 1, column + 1);
                    this.incrementBombsAround(field, row, column - 1);
                    this.incrementBombsAround(field, row, column + 1);
                    this.incrementBombsAround(field, row + 1, column - 1);
                    this.incrementBombsAround(field, row + 1, column);
                    this.incrementBombsAround(field, row + 1, column + 1);
                }
            }
        }
    }

    getCell(field: SaperCell[][], row: number, column: number): SaperCell | undefined {
        const rowsCount = field.length;
        const columnsCount = field[0].length;
        if (row < 0 || row > rowsCount || !field[row]) {
            return
        }
        if (column < 0 || column > columnsCount || !field[row][column]) {
            return
        }
        return field[row][column];
    }

    updateCell(field: SaperCell[][], row: number, column: number, data: Partial<SaperCell>) {
        let cell: SaperCell | undefined = this.getCell(field, row, column);
        if (cell) {
            field[row][column] = {
                ...cell,
                ...data,
            }
        }
    }

    incrementBombsAround(field: SaperCell[][], row: number, column: number) {
        const cell = this.getCell(field, row, column);
        if (cell) {
            cell.bombsAround++
        }
    }

    checkEnd(field: SaperCell[][], bombsCount: number): SaperCheckStatusEnum {
        const rowsCount = field.length;
        const columnsCount = field[0].length;

        if (field.some((rowData, row) => rowData.some(cell => cell.isOpened && cell.isBomb))) {
            return SaperCheckStatusEnum.LOOSE
        }
        if (field.reduce((rowSum, rowData) => {
            return rowSum + rowData.reduce((sum, cell) => sum + Number(cell.isOpened), 0);
        }, 0) >= (rowsCount * columnsCount - bombsCount)) {
            return SaperCheckStatusEnum.WIN
        }
        return SaperCheckStatusEnum.IN_GAME;
    }

    openEmptyCells(field: SaperCell[][], row: number, column: number, checkOnlyClosed: boolean = false) {
        const cell: SaperCell | undefined = this.getCell(field, row, column);
        if (cell) {
            this.updateCell(field, row, column, {isOpened: true})
        }
        if (cell && cell.bombsAround === 0) {
            if (checkOnlyClosed ? !cell.isOpened : cell.isOpened) {
                this.openEmptyCells(field, row - 1, column - 1, true)
                this.openEmptyCells(field, row - 1, column, true)
                this.openEmptyCells(field, row - 1, column + 1, true)
                this.openEmptyCells(field, row, column - 1, true)
                this.openEmptyCells(field, row, column + 1, true)
                this.openEmptyCells(field, row + 1, column - 1, true)
                this.openEmptyCells(field, row + 1, column, true)
                this.openEmptyCells(field, row + 1, column + 1, true)
            }
        }
    }

    markAllAsOpened(field: SaperCell[][]) {
        for(let rowData of field) {
            for(let cell of rowData) {
                cell.isOpened = true;
            }
        }
    }

    getBombFlagsCount(field: SaperCell[][]): number {
        return field.reduce((acc, rowData) => acc + rowData.reduce((sum, cell) => sum + Number(cell.label === CellLabelEnum.BOMB && !cell.isOpened), 0), 0)
    }

    checkAround(field: SaperCell[][], row: number, column: number) {
        for (let r = row - 1; r < row + 2; r++) {
            for(let c = column -1; c < column + 2; c++) {
                const cell: SaperCell | undefined = this.getCell(field, r, c);
                if (cell) {

                    if(cell.label === CellLabelEnum.EMPTY && !cell.isOpened) {
                        this.updateCell(field, r, c, {isOpened: true});
                    }
                    if(!cell.isOpened && cell.bombsAround === 0 && !cell.isBomb && cell.label === CellLabelEnum.EMPTY) {
                        this.checkAround(field, r, c);
                    }
                }
            }
        }
    }
}
