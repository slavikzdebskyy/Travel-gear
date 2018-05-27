import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../models/item.model';
import { HoverItemDirective } from '../../../hover-item.directive';
import { ItemsService } from '../../../Services/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {


	@Input()
	item:Item;
	
  constructor(private itemService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
		
  }

}
