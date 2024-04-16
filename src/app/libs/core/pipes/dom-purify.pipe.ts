import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'domPurify',
    standalone: true,
})
export class DomPurifyPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

}
