import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { NavbarService } from '../../Services/navbar.service';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.less']
})
export class FilterSidebarComponent implements OnInit {

	priceValue: number[] = [0, 100];
	priceMax: number = 1000;
	subCategoryIndex: number;
	subCategory: any;
	allColors: any;
	allBrands: any[];
	items: any[];
	category: any[] = [];
	menuItems: any[];

  constructor(private itemService: ItemsService, private navbarService: NavbarService) {
		
	 }

  ngOnInit() {	
		this.menuItems = this.navbarService.getMenuItems();
		this.items = this.itemService.getAllItems();
		this.priceMax = this.getMaxPrice();
		this.priceValue = [0,this.priceMax];
		this.allBrands = this.itemService.getAllProperty('brand');
		this.allColors = this.itemService.getAllPropertyFromArray('colors');
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

}
