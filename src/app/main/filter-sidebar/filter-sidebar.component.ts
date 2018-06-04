import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.less']
})
export class FilterSidebarComponent implements OnInit {

	rangeValue: number[] = [0, 100];
	rangeMax: number = 1000;
	label: any;
	tooltip: any;
	tooltipEnabled: any;
	items: any[];

  constructor(private itemService: ItemsService) {
		
	 }

  ngOnInit() {
		this.items = this.itemService.getAllItems();
		this.rangeMax = this.getMaxPrice();
		this.rangeValue = [0,this.rangeMax];
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
