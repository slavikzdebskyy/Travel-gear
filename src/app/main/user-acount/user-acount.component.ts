import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Item } from '../../models/item.model';
import { BagService } from '../../Services/bag.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../Services/user.service';
import { NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ItemsService } from '../../Services/items.service';
import { HeaderDataService } from '../../Services/header.data.service';


@Component({
  selector: 'app-user-acount',
  templateUrl: './user-acount.component.html',
  styleUrls: ['./user-acount.component.less']
})
export class UserAcountComponent implements OnInit, DoCheck {

	
	
	requaredFeld: any;
	doubleItemMessageClass: string;
	message: string;
	itemsAll: Item[] = [];
	itemsInBag: Item[] = [];
	itemsInFavorite: Item[] = [];
	isBagEmpty: boolean = false;
	isFavoriteEmpty: boolean = false;
	user: User = new User('','','','','','','',[]);

	@ViewChild('UserDataForm') 
	UserDataForm: NgForm;

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private route: ActivatedRoute,
							private bagService: BagService, private userService: UserService, private router: Router,
							private itemService: ItemsService, private headerDataService: HeaderDataService) {
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-stars-24px.svg'));
	 }

  ngOnInit() {
		this.userService.getUserByToken().subscribe(res => {
		this.user = res;
		this.headerDataService.setLoginUser(this.user);
		this.itemsInFavorite = this.headerDataService.getloginUser().favorite;
		});			
	
						
	
	}
	ngDoCheck(): void {		
		this.itemsInBag = this.bagService.getAllItemsFromBag();
		this.itemsInFavorite = this.headerDataService.getloginUser().favorite;
		this.isFavoriteEmpty = Boolean(this.user.favorite.length);
		this.isBagEmpty = Boolean(this.itemsInBag.length);
	}

	
	updateUser () {
		if(this.UserDataForm.valid){
			if(this.UserDataForm.value.oldpassword === this.user.password){
				if(this.UserDataForm.value.password === this.UserDataForm.value.passwordconfirm){
					for(var key in this.UserDataForm.value){
						if(this.UserDataForm.value[key] === ''){
							this.UserDataForm.value[key] = this.user[key]
						}
					}
					let user: User = new User(this.UserDataForm.value.name, this.UserDataForm.value.lastName, this.UserDataForm.value.email, this.UserDataForm.value.phone, this.UserDataForm.value.password, this.UserDataForm.value.city, this.UserDataForm.value.remember, []);
					let naviEmail = this.UserDataForm.value.email;
					this.userService.updateUser(user).subscribe(res => {
						this.UserDataForm.onReset();
						this.message = 'Дані успішно змінено !';
						this.doubleItemMessageClass = 'show-message-done';					
							setTimeout(() => {
								this.doubleItemMessageClass = '';
								this.router.navigate(['user_acount']);			
							}, 4000);
					});
				} else {
						this.UserDataForm.value.password = '';
						this.UserDataForm.value.oldpassword = '';
						this.UserDataForm.value.passwordconfirm = '';
						this.message = 'Нові паролі не співпадають !';
						this.doubleItemMessageClass = 'show-message-error';					
						setTimeout(() => {
							this.doubleItemMessageClass = '';
						}, 3000);
					}
				} else {
						this.UserDataForm.value.password = '';
						this.UserDataForm.value.oldpassword = '';
						this.UserDataForm.value.passwordconfirm = '';
						this.message = 'Введено неправильний пароль ! ';
						this.doubleItemMessageClass = 'show-message-error';					
						setTimeout(() => {
							this.doubleItemMessageClass = '';
						}, 3000);
					}
		} else {
			this.UserDataForm.value.password = '';
			this.UserDataForm.value.oldpassword = '';
			this.UserDataForm.value.passwordconfirm = '';
			this.requaredFeld = {'border' : '1px solid #b30000'};
			this.message = "Заповніть обов'язкові поля ! ";
			this.doubleItemMessageClass = 'show-message-error';					
			setTimeout(() => {
				this.doubleItemMessageClass = '';
			}, 3000);
		}
	}


	removeFromBag (id) {
		this.bagService.removeFromBag(id);	
	}
	
	removeFromFavorite (id) {
		for(let i = 0; i < this.user.favorite.length; i++) {
			if(this.user.favorite[i]._id === id) {
				this.user.favorite.splice(i, 1);	
			}
		}
		if(this.user.favorite.length === 0) {
			this.isFavoriteEmpty = false;
		}
		
		this.userService.updateUser(this.user).subscribe(res => {
			if(res) {
				this.message = 'Видалено !';
				this.doubleItemMessageClass = 'show-message-done';
				this.headerDataService.setLoginUser(this.user);					
				setTimeout(() => {
					this.doubleItemMessageClass = '';
					this.router.navigate(['user_acount']);
				}, 3000);
			}
		})
	}

	cancel() {
		this.UserDataForm.reset();
	}


}
