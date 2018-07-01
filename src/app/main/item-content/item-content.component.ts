import { Component, OnInit, DoCheck } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../models/item.model';
import { ItemDetailsService } from '../../Services/item.details.service';
import {PageEvent, MatPaginatorIntl} from '@angular/material';


@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
	styleUrls: ['./item-content.component.less'],
	providers: [MatPaginatorIntl],
	
})
export class ItemContentComponent implements OnInit, DoCheck {

	priceValue: number[];
	items: Item[] = [];
	itemsLength: number = 0;
	categorySelected: any[];
	brandSelected: any[];
	subCategorySelected: string;
	pageEvent: PageEvent;
	pageSizeOptions: number[] = [8, 16, 24];
	media: boolean;

	constructor(private itemService:ItemsService,
							private itemDetailsService: ItemDetailsService, 
							private paginator: MatPaginatorIntl) { }

  ngOnInit() {
		this.itemService.getAllItems().subscribe(res => {
				this.items = res;
				this.itemsLength = this.items.length;
			});
		this.paginator.itemsPerPageLabel = 'Кількість товарів на сторінці';
		this.paginator.nextPageLabel = 'Наступна сторінка';
		this.paginator.previousPageLabel = 'Попередня сторінка';
	}
	
	ngDoCheck(): void {
			this.priceValue = this.itemDetailsService.getPriceValue();
			this.categorySelected = this.itemDetailsService.getCategorySelected();
			this.brandSelected = this.itemDetailsService.getBrandsSelected();
			this.subCategorySelected = this.itemDetailsService.getSubCategorySelected();			
			}
}

