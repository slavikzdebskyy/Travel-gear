import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'filterByPrice'
})
export class FilterPipeByPrice implements PipeTransform {
	transform(value: any, priceValue: number[]) {
		if(value.length === 0) {
			return value;
		} else {
			let resultArr = [];
			for(let item of value){
				if(item.newPrice > priceValue[0] && item.newPrice <= priceValue[1]){
					resultArr.push(item);
				}
			}
			return resultArr;
		}		
	}
}