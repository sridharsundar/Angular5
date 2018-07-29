import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
	name: 'limitchar'
})

export class TruncatePipe implements PipeTransform {
	transform(value: string, limit: number) {
	    return value.length > limit ? value.substring(0, limit) : value;
	}
}