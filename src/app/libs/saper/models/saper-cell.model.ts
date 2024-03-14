import { CellLabelEnum } from "./cell-label.enum";

export type SaperCell = {
    isBomb: boolean,
    bombsAround: number,
    isOpened: boolean,
    label: CellLabelEnum,
}
