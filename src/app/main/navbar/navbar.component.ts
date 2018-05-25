import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavbarService } from '../../Services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
	
	equipmentControl: FormControl = new FormControl();
	equipmentGroups: NavbarService;

  constructor(private navbarService: NavbarService) { 

	}

  ngOnInit() {
		this.equipmentGroups = this.navbarService.getEquipmentGroups();
  }


  
}


