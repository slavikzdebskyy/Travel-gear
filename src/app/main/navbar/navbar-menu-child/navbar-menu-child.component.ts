import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NavbarService } from '../../../Services/navbar.service';
import { NavItemInterface } from '../../../interfaces/navbar.interface';

@Component({
  selector: 'app-navbar-menu-child',
  templateUrl: './navbar-menu-child.component.html',
  styleUrls: ['./navbar-menu-child.component.less']
})
export class NavbarMenuChildComponent implements OnInit {

	@Input() 
	items: NavItemInterface [];

	@ViewChild('childMenu') 
	public childMenu;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
		
  }

}
