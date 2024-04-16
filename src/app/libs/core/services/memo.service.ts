import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class MemoService {
    private cache: Map<string, any> = new Map();
}
