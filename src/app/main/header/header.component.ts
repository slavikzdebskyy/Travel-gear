import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BagService } from '../../Services/bag.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

	doubleItemMessage: string = '';
	logoImage: string = './assets/images/logo-highlander.png';
	
	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
							private bagService: BagService, private router: Router) {
    iconRegistry.addSvgIcon(
        'shopping-cart',
				sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-shopping_cart-24px.svg'));
		iconRegistry.addSvgIcon(
			'account',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-account_box-24px.svg'));
		iconRegistry.addSvgIcon(
			'stars',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-stars-24px.svg'));
  }
	@Output()
	myEvent = new EventEmitter<boolean>();

  ngOnInit() {
	
	}
	
	loginOrSignup () {
		// this.myEvent.emit(true);
		this.router.navigate(['login']);
		
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
