import { Component, OnInit, ViewChild } from '@angular/core';
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
export class UserAcountComponent implements OnInit {

		
	itemsInBag: Item[] = [];
	isBagEmpty: boolean;
	isFavoriteEmpty: boolean;
	user: User;

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
							private bagService: BagService, private userService: UserService, private router: Router) {
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-stars-24px.svg'));
	 }


	
	@ViewChild('UserDataForm') 
	UserDataForm: NgForm;
	registerNewUser () {
		if(this.UserDataForm.value.password === this.user.password){
			let user: User = new User(this.UserDataForm.value.name, this.UserDataForm.value.lastname, this.UserDataForm.value.email, this.UserDataForm.value.phone, this.UserDataForm.value.password, this.UserDataForm.value.city, this.UserDataForm.value.remember, []);
			this.userService.addNewUser(user);
			this.router.navigate(['user_acount', this.UserDataForm.value.email]);
		}
	}

  ngOnInit() {
		this.user = JSON.parse(localStorage.getItem('user'));
		this.itemsInBag = this.bagService.getAllItemsFromBag();
		this.isBagEmpty = Boolean(this.itemsInBag.length);
		this.isFavoriteEmpty = Boolean(this.user.favorite.length);		
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
