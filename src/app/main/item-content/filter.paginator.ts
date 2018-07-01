import { PipeTransform, Pipe } from "@angular/core";
import { PageEvent } from "@angular/material";

@Pipe({
	name: 'filterPaginator'
})
export class FilterPipe implements PipeTransform {
	transform(value: any, pageEvent: PageEvent) {
		if(value.length === 0) {
			return value;
		} else {
			let resultArr = [];	
			if(pageEvent){				
				for(let i = pageEvent.pageSize*pageEvent.pageIndex; i < (pageEvent.pageSize*pageEvent.pageIndex)+pageEvent.pageSize; i++){
					resultArr.push(value[i]); 
				}
			} else {
				for(let i = 0; i < 5; i++){
					resultArr.push(value[i]);
				}
			}
		return resultArr;	
		}		
	}		
}
