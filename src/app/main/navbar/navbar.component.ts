import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Services/navbar.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

	menuItems: NavbarService;
	media: boolean;
	toolbarClassName: string = '';

  constructor(
		private navbarService: NavbarService,
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer,) { 
			iconRegistry.addSvgIcon(
				'hidden-menu',
				sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/baseline-reorder-24px.svg'));
		}

  ngOnInit() {
		this.menuItems = this.navbarService.getMenuItems();
		this.media = window.matchMedia('screen and (min-width:600px)').matches;
	}
	
	showOrHideToolbarMenu () {
		if(!this.media){
			this.media = !this.media;
			this.toolbarClassName = 'show';			
		} else {
			this.toolbarClassName = 'hide';
			setTimeout(()=>{
				this.media = !this.media;
			}, 1000);			
		}
	}

}


