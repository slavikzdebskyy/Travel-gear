import { Component, OnInit, DoCheck } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BagService } from '../../Services/bag.service';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../Services/auth.service';
import { UserService } from '../../Services/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, DoCheck {

	doubleItemMessage: string = '';
	logoImage: string = './assets/images/logo-highlander.png';
	myPurchasesCount: number = 0;
	myFavoriteCount: number = 0;
	account: string = 'Особистий кабінет';
	logoutVisible: boolean = false;
	user:any;
	
	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private userService: UserService,
							private bagService: BagService, private router: Router, private auth: AuthLoginService) {
    iconRegistry.addSvgIcon(
        'shopping-cart',
				sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-shopping_cart-24px.svg'));
		iconRegistry.addSvgIcon(
			'account',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-account_box-24px.svg'));
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-stars-24px.svg'));
			iconRegistry.addSvgIcon(
				'logout',
				sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-reply-24px.svg'));
				iconRegistry.addSvgIcon(
					'home',
					sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-home-24px.svg'));
  }
	
	ngOnInit() {
		this.user = JSON.parse(localStorage.getItem('user'));
	 }
	
	ngDoCheck(): void {
		this.myPurchasesCount = this.bagService.getAllItemsFromBag().length;
		if(this.auth.isLogin()){
			this.user = JSON.parse(localStorage.getItem('user'));
			this.account = this.user.name;
			this.logoutVisible = true;
			this.myFavoriteCount = this.user.favorite.length;
		} else {
			this.myFavoriteCount = 0;
		}
	}	
	
	myAccount () {
		if(this.auth.isLogin()){
			this.account = this.user.name;
			this.logoutVisible = true;
			this.router.navigate(['user_acount/', this.user.email]);
		} else {
			this.router.navigate(['login']);
		}
	}

	logOut () {
		this.userService.logout();
		this.account = 'Особистий кабінет';
		this.logoutVisible = false;
		this.router.navigate(['']);
	}

	home () {
		this.router.navigate(['']);
	}

	goToMyBag () {
		let itemsInBag = this.bagService.getAllItemsFromBag();
		if(itemsInBag.length){
			this.router.navigate(['mybag']);
		} else {
			this.doubleItemMessage = 'show-message';
					setTimeout(() => {
						this.doubleItemMessage = '';
					}, 3000);
		}
	}


}
