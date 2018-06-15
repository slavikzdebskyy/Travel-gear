import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../models/item.model';
import { HoverItemDirective } from '../../../hover-item.directive';
import { ItemsService } from '../../../Services/items.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthLoginService } from '../../../Services/auth.service';
import { UserService } from '../../../Services/user.service';
import { HeaderDataService } from '../../../Services/header.data.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

	doubleItemMessageClass: string = '';
	message :string = '';
	user: User;

	@Input()
	item:Item;
	
	constructor(private itemService: ItemsService, private route: ActivatedRoute,
							private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private auth: AuthLoginService,
							private userService: UserService, private headerDataService: HeaderDataService) {
		
		
			iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-favorite_border-24px.svg'));
	 }

  ngOnInit() {
		this.userService.getUserByToken().subscribe(res => {
			this.user = res;
		});
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
