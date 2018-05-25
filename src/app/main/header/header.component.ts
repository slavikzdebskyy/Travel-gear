import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
	
	logoImage: string = './assets/images/logo-highlander.png';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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

  ngOnInit() {
	
  }

}
