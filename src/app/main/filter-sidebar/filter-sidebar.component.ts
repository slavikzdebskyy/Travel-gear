import { Component, OnInit, DoCheck } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { NavbarService } from '../../Services/navbar.service';
import { ItemDetailsService } from '../../Services/item.details.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.less']
})
export class FilterSidebarComponent implements OnInit, DoCheck {

	priceMax: number = 1000;
	priceValue: number[] = [0, 1000];	
	subCategoryIndex: number;
	subCategory: any;
	allColors: any;
	allBrands: any[];
	items: Item[];
	category: any[] = [];
	menuItems: any[];

	constructor(private itemService: ItemsService, private navbarService: NavbarService,
							private itemDetailService: ItemDetailsService) {
		
	 }

  ngOnInit() {	

		this.menuItems = this.navbarService.getMenuItems();
		// this.items = this.itemService.getAllItems();
		this.itemService.getAllItems().subscribe(
			res => {
				this.items = res;
				this.priceMax = this.getMaxPrice();
				this.allBrands = this.getAllProperty('brand');
			});	

		this.allColors = this.itemDetailService.getAllColors();

	}

	ngDoCheck(): void {
		// console.log(this.items);
		// this.priceMax = this.getMaxPrice();
		// 		this.priceValue = [0,this.priceMax];
		// this.allBrands = this.getAllProperty('brand');
	
	}

	test() {
		// let col = this.itemService.getAllProperty('size');
		console.log(this.allBrands);
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
		})
		return propertyArray;
	}

}
