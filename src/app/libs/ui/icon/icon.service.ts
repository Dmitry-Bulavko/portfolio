import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Icons } from "./icons.enum";
import { Memo } from "../../core/decorators/memo.decorator";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class IconService {
    private readonly http = inject(HttpClient)

    @Memo()
    getIcon(id: Icons | string): Promise<string> {
        return firstValueFrom(this.http.get(`/assets/icons/${id}.svg`, {responseType: "text"}));
    }
}
