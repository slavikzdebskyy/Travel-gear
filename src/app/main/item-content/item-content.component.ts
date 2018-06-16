import { Component, OnInit, DoCheck } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../models/item.model';
import { ItemDetailsService } from '../../Services/item.details.service';


@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.less']
})
export class ItemContentComponent implements OnInit, DoCheck {

	priceValue: number[];
	items: Item[] = [];
	categorySelected: any[];
	brandSelected: any[];
	subCategorySelected: string;

  constructor(private itemService:ItemsService, private itemDetailsService: ItemDetailsService) { }

  ngOnInit() {
		// this.items = this.itemService.getAllItems();
		this.itemService.getAllItems().subscribe(res => {
				this.items = res;
			});
		// this.priceValue = this.itemDetailsService.getPriceValue();
		// console.log(this.priceValue);
	}
	
	ngDoCheck(): void {
			this.priceValue = this.itemDetailsService.getPriceValue();
			this.categorySelected = this.itemDetailsService.getCategorySelected();
			this.brandSelected = this.itemDetailsService.getBrandsSelected();
			this.subCategorySelected = this.itemDetailsService.getSubCategorySelected();
			}
}
