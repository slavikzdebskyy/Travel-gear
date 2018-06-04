import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../Services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

	menuItems: NavbarService;

  constructor(private navbarService: NavbarService) { 

	}

  ngOnInit() {
		this.menuItems = this.navbarService.getMenuItems();
  }


  
}


