import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../Services/items.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BagService } from '../../../Services/bag.service';
import { AuthLoginService } from '../../../Services/auth.service';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.less']
})
export class ItemSelectedComponent implements OnInit {

	item:any;
	doubleItemMessageClass: string = '';
	message :string = '';
	currentColor:string = '#888';


	constructor(private itemService: ItemsService, private route: ActivatedRoute,
							private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
							private bagService: BagService,  private auth: AuthLoginService) { 
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-favorite_border-24px.svg'));
			iconRegistry.addSvgIcon(
				'location',
				sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-room-24px.svg'));
	}

  ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.item = this.itemService.getItemById(id);
  }

	addToBag() {
		let flag = true;
		let bagItems = this.bagService.getAllItemsFromBag();
			for(let i = 0; i < bagItems.length; i++){
				if(bagItems[i].id === this.item.id){
					this.message = 'Цей товар вже є у кошику !';
					this.doubleItemMessageClass = 'show-message-error';					
					setTimeout(() => {
						this.doubleItemMessageClass = '';
					}, 3000);
					flag = false;				
				} 
			}
		if(flag) {
			this.bagService.addItemToBag(this.item);
			this.message = this.item.title + ' успішно додано у кошик.';
			this.doubleItemMessageClass = 'show-message-done';					
					setTimeout(() => {
						this.doubleItemMessageClass = '';
					}, 4000);
		}
	}

	addToFavorite () {
		if(this.auth.isLogin()){
			let flag = true;
			let user = JSON.parse(localStorage.getItem('user'));
			if(user.favorite.length > 0){
				for(let i = 0; i < user.favorite.length; i++) {
					if(user.favorite[i].id === this.item.id) {					
						flag = false;
					} else {
						flag = true;
					}
				}
			}
			if(flag){
				user.favorite.push(this.item);
				localStorage.setItem('user', JSON.stringify(user));
				this.message = this.item.title + ' успішно додано до списку бажань.';
				this.doubleItemMessageClass = 'show-message-done';					
					setTimeout(() => {
						this.doubleItemMessageClass = '';
					}, 4000);
			} else {
				this.message = 'Цей товар вже є у списку бажань !';
				this.doubleItemMessageClass = 'show-message-error';					
				setTimeout(() => {
					this.doubleItemMessageClass = '';
				}, 3000);
			}						
		} else {
			this.message = 'Спочатку авторизуйтесь !';
			this.doubleItemMessageClass = 'show-message-error';					
			setTimeout(() => {
				this.doubleItemMessageClass = '';
			}, 3000);
		}
	}

}
