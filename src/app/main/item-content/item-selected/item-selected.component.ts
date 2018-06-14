import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../Services/items.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BagService } from '../../../Services/bag.service';
import { AuthLoginService } from '../../../Services/auth.service';
import { Item } from '../../../models/item.model';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../models/user.model';
import { HeaderDataService } from '../../../Services/header.data.service';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.less']
})
export class ItemSelectedComponent implements OnInit {
	
	items: Item[] = [];
	item: Item = new Item('','','','','','','','','','','','','','');
	user: User;
	doubleItemMessageClass: string = '';
	message :string = '';

	constructor(private itemService: ItemsService, private route: ActivatedRoute,
							private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
							private bagService: BagService,  private auth: AuthLoginService, 
							private userService: UserService, private headerDataService: HeaderDataService) { 
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-favorite_border-24px.svg'));
		iconRegistry.addSvgIcon(
			'location',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-room-24px.svg'));
	}

  ngOnInit() {	
		let id = this.route.snapshot.params['id'];
		this.itemService.getItemById(id).subscribe(res => {
			this.item = res;
		});	
		this.userService.getUserByToken().subscribe(res => {
			this.user = res;
		});	
		
	}

	
	

	addToBag() {
		let isThisItemInBag = true;
		let bagItems = this.bagService.getAllItemsFromBag();
			for(let i = 0; i < bagItems.length; i++){
				if(bagItems[i]._id === this.item._id){
					this.message = 'Цей товар вже є у кошику !';
					this.doubleItemMessageClass = 'show-message-error';					
					setTimeout(() => {
						this.doubleItemMessageClass = '';
					}, 3000);
					isThisItemInBag = false;				
				} 
			}
		if(isThisItemInBag) {
			this.bagService.addItemToBag(this.item);
			this.message = this.item.title + ' успішно додано у кошик.';
			this.doubleItemMessageClass = 'show-message-done';					
					setTimeout(() => {
						this.doubleItemMessageClass = '';
					}, 4000);
		}
	}

	addToFavorite () {
		if(this.auth.canActivate){
			let isThisItemInFavorites = false;
				if(this.user.favorite.length > 0){	
					for(let i = 0; i < this.user.favorite.length; i++) {
						if(this.user.favorite[i]._id === this.item._id) {					
							isThisItemInFavorites = true;
						} else {
							isThisItemInFavorites = false;						
						}						
					}
				}					
	
			if(!isThisItemInFavorites){
				this.user.favorite.push(this.item);
				this.userService.updateUser(this.user).subscribe(result => {
					if(result){
						this.headerDataService.setLoginUser(this.user);
						this.message = this.item.title + ' успішно додано до списку бажань.';
						this.doubleItemMessageClass = 'show-message-done';					
							setTimeout(() => {
								this.doubleItemMessageClass = '';
							}, 4000);
					}
				});				
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
