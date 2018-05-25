import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../models/item.model';
import { HoverItemDirective } from '../../../hover-item.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {


	@Input()
	item:Item;
	
  constructor() { }

  ngOnInit() {
  }

}
