import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../models/item.model';
import { HoverItemDirective } from '../../../hover-item.directive';
import { ItemsService } from '../../../Services/items.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthLoginService } from '../../../Services/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

	doubleItemMessageClass: string = '';
	message :string = '';

	@Input()
	item:Item;
	
	constructor(private itemService: ItemsService, private route: ActivatedRoute,
		private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private auth: AuthLoginService) {
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-favorite_border-24px.svg'));
	 }

  ngOnInit() {
	}

	// some() {
	// 	console.log('container')
	// }
	some2() {
		console.log(this.item.colors)
	}

	addToFavorite () {
		if(this.auth.canActivate){
			let isThisItemInFavorites = true;
			let user = JSON.parse(localStorage.getItem('user'));
			if(user.favorite.length > 0){	
				for(let i = 0; i < user.favorite.length; i++) {
					if(user.favorite[i].id === this.item._id) {					
						isThisItemInFavorites = false;
					} else {
						isThisItemInFavorites = true;
					}
				}
			}
			if(isThisItemInFavorites){
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
