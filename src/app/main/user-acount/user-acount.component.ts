import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Item } from '../../models/item.model';
import { BagService } from '../../Services/bag.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../Services/user.service';
import { NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-user-acount',
  templateUrl: './user-acount.component.html',
  styleUrls: ['./user-acount.component.less']
})
export class UserAcountComponent implements OnInit, DoCheck {

	
	requaredFeld: any;
	doubleItemMessageClass: string;
	message: string;
	itemsInBag: Item[] = [];
	isBagEmpty: boolean;
	isFavoriteEmpty: boolean;
	user: User;

	@ViewChild('UserDataForm') 
	UserDataForm: NgForm;

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private route: ActivatedRoute,
							private bagService: BagService, private userService: UserService, private router: Router) {
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-stars-24px.svg'));
	 }


	
	
	

  ngOnInit() {
		let email = this.route.snapshot.params['email'];
		this.userService.getUserByEmail(email).subscribe(res => {
			this.user = res;		
			this.isFavoriteEmpty = Boolean(this.user.favorite.length);	
		});		
		
				
	}
	ngDoCheck(): void {
		this.itemsInBag = this.bagService.getAllItemsFromBag();
		this.isBagEmpty = Boolean(this.itemsInBag.length);
		this.isFavoriteEmpty = Boolean(this.user.favorite.length);
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
								this.router.navigate(['user_acount/', naviEmail]);			
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
		this.itemsInBag = this.bagService.getAllItemsFromBag();
		if(this.itemsInBag.length === 0) {
			this.isBagEmpty = false;
		}
	}

	removeFromFavorite (id) {
		for(let i = 0; i < this.user.favorite.length; i++) {
			if(this.user.favorite[i].id === id) {
				this.user.favorite.splice(i, 1);
			}
		}
		localStorage.setItem('user', JSON.stringify(this.user));
		if(this.user.favorite.length === 0) {
			this.isFavoriteEmpty = false;
		}
	}

	isValidForm() {
		if(this.UserDataForm.value.password === this.UserDataForm.value.passwordconfirm && this.UserDataForm.valid){
			return true;		
		} else {
			return false;			
		}
	}

	cancel() {
		this.UserDataForm.reset();
	}


}
