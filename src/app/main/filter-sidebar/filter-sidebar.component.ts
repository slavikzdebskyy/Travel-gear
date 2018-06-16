import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { NavbarService } from '../../Services/navbar.service';
import { ItemDetailsService } from '../../Services/item.details.service';
import { Item } from '../../models/item.model';
import { HeaderDataService } from '../../Services/header.data.service';


@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.less']
})
export class FilterSidebarComponent implements OnInit {

	priceMax: number;
	priceValue: number[] = [0, 1000];	
	subCategoryIndex: number;
	subCategory: boolean[]=[];
	allColors: any[]=[];
	allBrands: any[]=[];
	items: Item[];
	brandsSelected: boolean[] = [];
	menuItems: any[];

	constructor(private itemService: ItemsService, private navbarService: NavbarService,
							private itemDetailService: ItemDetailsService) {
		
	 }

  ngOnInit() {	
		this.menuItems = this.navbarService.getMenuItems();
		this.itemService.getAllItems().subscribe(
			res => {
				this.items = res;
				this.priceMax = this.getMaxPrice();
				this.priceValue = [0, this.priceMax];
				this.itemDetailService.setPriceValue(this.priceValue);
				this.allBrands = this.getAllProperty('brand');
			});	
		this.allColors = this.itemDetailService.getAllColors();
	}

	getMaxPrice (): number {
		let max = 0;
		for(let i = 0; i < this.items.length; i++) {
			if(this.items[i].newPrice > max) {
				max = this.items[i].newPrice;
			}
		}
		return max;
	}

	getAllPropertyFromArray (prop) { 			// only for size, colors, locations
		let propertyArray = [];
		let isProp = 0;
		this.items.forEach(element => {
			for(let i = 0; i < element[prop].length; i++){
				isProp = 0;
				for(let j = 0; j < propertyArray.length; j++){
					if(element[prop][i] === propertyArray[j]){
						isProp++;
					}
				}
				if(!isProp){
					propertyArray.push(element[prop][i]);
				}
			}
		});
		return propertyArray;
	}

	getAllProperty (prop) { 			// not for for size, colors, locations
		let propertyArray = [];
		let isProp = 0;
		this.items.forEach(element => {
				isProp = 0;
				for(let j = 0; j < propertyArray.length; j++){
					if(element[prop] === propertyArray[j]){
						isProp++;
					}
				}
				if(!isProp){
					propertyArray.push(element[prop]);
				}
		});
		propertyArray.sort((a,b) => {
			if(b > a){
				return -1;
		} else {
				return 1;
		}
		});
		return propertyArray;
	}

	rangePriceChanged () {
		this.itemDetailService.setPriceValue(this.priceValue);
	}

	categorySelected () {
		let result = [];
		let arr = this.menuItems[this.subCategoryIndex].children
		for(let i = 0; i < arr.length; i++){
			if(this.subCategory[i]){
				result.push(arr[i].value);
			}
		}
		this.itemDetailService.setCategorySelected(result);		
	}

	brandSelected () {
		let result = [];
		for(let y = 0; y < this.allBrands.length; y++){
			if(this.brandsSelected[y]){
				result.push(this.allBrands[y]);
			}
		}
		this.itemDetailService.setBrandsSelected(result);
		// console.log(this.itemDetailService.getBrandsSelected());
	}

}
