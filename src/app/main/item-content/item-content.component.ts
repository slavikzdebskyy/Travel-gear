import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../models/item.model';


@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.less']
})
export class ItemContentComponent implements OnInit {

	items: Item[] = [];

  constructor(private itemService:ItemsService) { }

  ngOnInit() {
		this.items = this.itemService.getAllItems();
  }

}
