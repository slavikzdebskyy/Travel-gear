import { PipeTransform, Pipe } from "@angular/core";



@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform(value: any, priceValue: number[], categorySelected: any[], brandsSelected: any[], subCategory: string) {
		if(value.length === 0) {
			return value;
		} else {
			let arrSortedByPriceAndCategory = [];
			for(let item of value){
				if(item.newPrice > priceValue[0] && item.newPrice <= priceValue[1]){ // сюди заходять айтеми, що попадають в діпазон ціни
					if(categorySelected.length) { // перевіряємо чи вибрані якісь категорії товарів
						for(let catValue of categorySelected){	// якщо вибрані фільтруємо за тими категоріями
							if(item.category === catValue){
								arrSortedByPriceAndCategory.push(item); // якщо категорії вибрані то тут отримаємо масив відсортований по ціні та категоріях
							}
						}
					} else {
						arrSortedByPriceAndCategory.push(item); // якщо категорії НЕ вибрані то тут отримаємо масив відсортований ЛИШЕ по ціні
					}
				}
			}
			let arrSortedByPriceAndCategoryAndBrands = []; //створюємо новий масив
			if(brandsSelected.length){				 	// перевіряємо чи вибрані якісь бренди
				for(let el of arrSortedByPriceAndCategory){ // якщо вибрані то фільтруємо за тими брендами
					for(let brandValue of brandsSelected){
						if(el.brand === brandValue){
							arrSortedByPriceAndCategoryAndBrands.push(el); // якщо бренди вибрато то тут отримаємо відсотований масив
						}
					}
				} 
			} else {
				arrSortedByPriceAndCategoryAndBrands = arrSortedByPriceAndCategory; // якщо бренди не вибрано то переприсвоюємо масиви
			}
			let resultArr = []; // створюємо новий масив
			if(subCategory){  // перевіряємо чи вибрана підкатегорія
				for(let element of arrSortedByPriceAndCategoryAndBrands){ // сортуємо по підкатегоріїї
					if(element.subCategory === subCategory){
						resultArr.push(element);		// якщо підкатегорія є то с пушаємо в новий масив
					}
				}
			} else {
				resultArr = arrSortedByPriceAndCategoryAndBrands; //якщо ж підкатегоріїї нема то повертаємо попередній масив
			}
			return resultArr; // повертаємо результат
		}
	}
}