import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BagService } from '../../Services/bag.service';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../Services/auth.service';
import { UserService } from '../../Services/user.service';
import { User } from '../../models/user.model';
import { HeaderDataService } from '../../Services/header.data.service';



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
	logoutVisible: boolean = true;
	user:User = new User('','','','','','','',[]);
	
	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private userService: UserService,
							private bagService: BagService, private router: Router, private auth: AuthLoginService,
							private headerDataService: HeaderDataService) {
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
			  this.userService.getUserByToken().subscribe(res => {
					if(res) {
						this.user = res;
						this.headerDataService.setLoginUser(this.user);
					}
				})
				this.myPurchasesCount = this.bagService.getAllItemsFromBag().length;
				this.myFavoriteCount = this.user.favorite.length;
				this.account = this.user.name;
				if(this.user.name === ''){
					this.logoutVisible = false;
					this.account = 'Особистий кабінет';
				} else {
					this.logoutVisible = true;
					this.account = this.user.name;
				}	
	 }
	
	ngDoCheck(): void {
		this.myPurchasesCount = this.bagService.getAllItemsFromBag().length;
		this.user = this.headerDataService.getloginUser();
		this.myFavoriteCount = this.user.favorite.length;
		if(this.user.name === ''){
			this.logoutVisible = false;
			this.account = 'Особистий кабінет';
		} else {
			this.logoutVisible = true;
			this.account = this.user.name;
		}	
	}	
	goToMyAccount () {	
		this.userService.getUserByToken().subscribe(res => {
		if(res){
			this.router.navigate(['user_acount/']);
		} else {
			this.router.navigate(['login']);
		}
		});			
	}
	
	logOut () {
		this.userService.logout(); // subscribe in UserService
		let logOutUser = new User('','','','','','','',[]);
		this.headerDataService.setLoginUser(logOutUser);
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
