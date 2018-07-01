import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NavbarService } from '../../../Services/navbar.service';
import { NavItemInterface } from '../../../interfaces/navbar.interface';
import { ItemDetailsService } from '../../../Services/item.details.service';

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

  constructor(private navbarService: NavbarService, private itemDetailService: ItemDetailsService) { }

	ngOnInit() { }
	
	filteredByCategory(value){
		let arr = [value];
		this.itemDetailService.setCategorySelected(arr);
	}
	
	filteredBySubCategory(value){
		this.itemDetailService.setSubCategorySelected(value);
	}
}
