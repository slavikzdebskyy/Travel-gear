import { Item } from "../models/item.model";
import { Injectable } from "@angular/core";

@Injectable()
export class NavbarService {
	private equipmentGroups = [
    {
      name: 'Рюкзаки',
      equipment: [
        { value: 'backpacks<40', viewValue: 'Рюкзаки < 40л' },
        { value: 'backpacks>40', viewValue: 'Рюкзаки > 40л' },
        { value: 'backpacks-child', viewValue: 'Рюкзаки дитячі' }
      ]
    },
    {
      name: 'Намети',
      equipment: [
        { value: 'tents-1', viewValue: 'Намети 1-місні' },
        { value: 'tents-2', viewValue: 'Намети 2-місні' },
				{ value: 'tents-3', viewValue: 'Намети 3-місні' },
				{ value: 'tents-4', viewValue: 'Намети 4-місні' }
      ]
    },
    {
      name: 'Спальники',
      // disabled: true,
      equipment: [
				{ value: 'sleeping-bag-1', viewValue: 'Спальники 1-місні' },
				{ value: 'sleeping-bag-2', viewValue: 'Спальники 2-місні' },
             ]
    },
    {
      name: 'Каремати',
      equipment: [
        { value: 'tourist-mat-foam', viewValue: 'Пінні' },
				{ value: 'tourist-mat-inflatable', viewValue: 'Надувні' },
				{ value: 'tourist-mat-selfinflatable', viewValue: 'Самонадувні' },
      ]
		},
		{
      name: 'Пальники',
      equipment: [
        { value: 'burner-spirit', viewValue: 'Пальники спиртові' },
				{ value: 'burner-gas', viewValue: 'Пальники газові' },
				{ value: 'burner-multi', viewValue: 'Пальники мультипаливні' },
        { value: 'burner-integrater', viewValue: 'Інтегровані системи' },
      ]
		},
		{
      name: 'Аксесуари',
      equipment: [
        { value: 'dishes', viewValue: 'Посуд' },
				{ value: 'tools', viewValue: 'Ножі, інструменти' },
				{ value: 'drincing-system', viewValue: 'Питні системи' },
				{ value: 'trekking-sticks', viewValue: 'Трекінгові палиці' },
				{ value: 'accessories-other', viewValue: 'Інше' },
      ]
    }
	];
	




	getEquipmentGroups ():any {
		return this.equipmentGroups;
	}

}