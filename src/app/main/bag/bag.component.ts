import { Component, OnInit } from '@angular/core';
import { BagService } from '../../Services/bag.service';
import { Item } from '../../models/item.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.less']
})
export class BagComponent implements OnInit {

  itemsInBag: Item[] = [];

  constructor(private bagService: BagService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
		this.itemsInBag = this.bagService.getAllItemsFromBag();
	}

	removeFromBag (id) {
		this.bagService.removeFromBag(id);	
		this.itemsInBag = this.bagService.getAllItemsFromBag();
		if(this.itemsInBag.length === 0) {
			this.router.navigate(['']);
		}
	}

}
