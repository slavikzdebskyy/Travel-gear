import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'filterBySubCategory'
})
export class FilterPipeBySubCategory implements PipeTransform {
	transform(value: any, subCategory: string) {
		if(value.length === 0) {
			return value;
		} else {
			let resultArr = [];
			if(subCategory) {
				for(let item of value){				
					if(item.subCategory === subCategory){
						resultArr.push(item); 
					}
				}
			} else {
				resultArr = value;
			}
			return resultArr;
		}		
	}
}