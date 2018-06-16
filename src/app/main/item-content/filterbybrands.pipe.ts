import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
	name: 'filterByBrands'
})
export class FilterPipeByBrands implements PipeTransform {
	transform(value: any, brandsSelected: any[]) {
		if(value.length === 0) {
			return value;
		} else {
			let resultArr = [];
			if(brandsSelected.length) {
				for(let item of value){				
					for(let brandValue of brandsSelected){
						if(item.brand === brandValue){
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