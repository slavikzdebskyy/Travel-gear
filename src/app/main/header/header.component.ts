import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BagService } from '../../Services/bag.service';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../Services/auth.service';
import { UserService } from '../../Services/user.service';
import { User } from '../../models/user.model';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, DoCheck {

	doubleItemMessage: string = '';
	logoImage: string = './assets/images/logo-highlander.png';
	myPurchasesCount: number = 0;
	@Input()
	myFavoriteCount: number = 0;	
	account: string = 'Особистий кабінет';
	logoutVisible: boolean = true;
	user:User = new User('','','','','','','',[]);

	// @Input()
	// headerInfo: any = {'account': 'Особистий кабінет', 'myFavoriteCount': 0, 'logoutVisible': false};

	
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
				this.myPurchasesCount = this.bagService.getAllItemsFromBag().length;	
				// this.account = this.headerInfo.account;
				// this.logoutVisible = this.headerInfo.logoutVisible;
				// this.myFavoriteCount = this.myFavoriteCount;
	// 	if(this.auth.isLogin()){
	// 		let email = localStorage.getItem('userEmail');
	// 		this.userService.getUserByEmail(email).subscribe(res => {
	// 			this.user = res;				
	// 		})		
	// 	} 
	 }
	
	ngDoCheck(): void {
		// this.myFavoriteCount = 0;

		// if(this.auth.isLogin()){			
		// 	this.myFavoriteCount = this.user.favorite.length;
		// 	this.account = this.user.name;
		// 	this.logoutVisible = true;
		// } else {
		// 		this.myFavoriteCount = 0;
		// 		this.account = 'Особистий кабінет';
		// }
	}	
	getHeaderinfo(value){
		this.account = value.account;
		this.logoutVisible = value.logoutVisible;
		this.myFavoriteCount = value.myFavoriteCount;
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
		this.account = 'Особистий кабінет';
		// this.logoutVisible = false;
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
