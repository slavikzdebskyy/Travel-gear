import { Component, OnInit, DoCheck } from '@angular/core';
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

	ngDoCheck () {
		
	}
	removeFromBag (id) {
		let items = this.bagService.getAllItemsFromBag()
		for(let i = 0; i < items.length; i++){
			if(items[i].id === id){
				this.bagService.removeFromBag(i);
			}
		}
		if(this.bagService.getAllItemsFromBag().length === 0) {
			this.router.navigate(['']);
		}

	}
}
