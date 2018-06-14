import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Services/user.service';
import { NgForm } from '@angular/forms';
import { Item } from '../models/item.model';
import { NavbarService } from '../Services/navbar.service';
import { MatSelectChange} from '@angular/material/select';
import { ItemDetailsService } from '../Services/item.details.service';
import { ItemsService } from '../Services/items.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.less']
})
export class AdministratorComponent implements OnInit {

	menuCategory: any;
	subMenuCategory: any;
	subCategoryIndex: number;
	categorySelectVisible: boolean = false;
	subCategorySelectVisible: boolean = false;
	promoArr: boolean[] = [true, false];
	colorsArr: string[];
	locationsArr: string[];
	sizeArr: string[];

	constructor(private itemService: ItemsService, private navbarService: NavbarService,
							private itemDetails: ItemDetailsService, private router: Router) { }

  ngOnInit() {
		this.menuCategory = this.navbarService.getMenuItems();
		 this.colorsArr = this.itemDetails.getAllColors();
		 this.locationsArr = this.itemDetails.getAllLocations();
		 this.sizeArr = this.itemDetails.getAllSizes();
  }

	@ViewChild('adminAddItemForm') 
	newItemForm: NgForm;
	addNewItem () {
		let item: Item = new Item(this.newItemForm.value.category, this.newItemForm.value.subCategory, this.newItemForm.value.title, this.newItemForm.value.brandLogoUrl, this.newItemForm.value.brand, this.newItemForm.value.description, this.newItemForm.value.oldPrice, this.newItemForm.value.newPrice, this.newItemForm.value.colors, this.newItemForm.value.locations, this.newItemForm.value.imageUrl, this.newItemForm.value.size, this.newItemForm.value.promo, this.newItemForm.value.promoTitle);
		if(this.newItemForm.value.promo === '') {
			this.newItemForm.value.promo = false;
		}
		this.itemService.saveItem(item).subscribe( res => {
			console.log(res);
			// this.router.navigate(['administrator']);
			this.newItemForm.resetForm();

		})
		// this.newItemForm.resetForm();
		
		// console.log(this.newItemForm.value.colors);

	}

	categoryVisible(event: MatSelectChange, i:number, j:number){
		if (event.source.selected) {
			if(this.categorySelectVisible) {				
				this.subMenuCategory = this.menuCategory[i].children[j].children;
				this.subCategorySelectVisible = true;				
			} else {
					this.categorySelectVisible = true;
				}			
		}
	}

}
