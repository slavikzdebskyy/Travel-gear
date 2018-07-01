import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'filterByCategory'
})
export class FilterPipeByCategory implements PipeTransform {
	transform(value: any, categorySelected: any[]) {
		if(value.length === 0) {
			return value;
		} else {
			let resultArr = [];
			if(categorySelected.length) {
				for(let item of value){				
					for(let catValue of categorySelected){
						if(item.category === catValue){
							resultArr.push(item); 
						}
					}
				}
			} else {
				resultArr = value;
			}
			return resultArr;
		}		
	}
}