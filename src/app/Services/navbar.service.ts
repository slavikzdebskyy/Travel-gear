import { Item } from "../models/item.model";
import { Injectable } from "@angular/core";
import { NavItemInterface } from "../main/interfaces/navbar.interface";

@Injectable()
export class NavbarService {

	private menuItems:NavItemInterface []  = [
		{ value : 'equipments',
			viewValue : 'Спорядження',
			children: [
								{	value: 'backpacks',
									viewValue: 'Рюкзаки',
									children: [
															{ value: 'backpacks<40',
																viewValue: 'Рюкзаки для міста'
															},
															{ value: 'backpacks>40',
																viewValue: 'Рюкзаки для тркінгу'
															},
															{ value: 'backpacks-child',
																viewValue: 'Велорюкзаки'
															},
															{ value: 'backpacks<40',
																viewValue: 'Рюкзаки для ноутбука'
															},
															{ value: 'backpacks>40',
																viewValue: 'Рюкзаки дитячі'
															}
														]
									},   
									{	value: 'tents',
										viewValue: 'Намети',
										children: [
																{ value: 'tents-1',
																	viewValue: 'Намети одномісні'
																},
																{ value: 'tents-2',
																	viewValue: 'Намети двомісні'
																},
																{ value: 'tents-3',
																	viewValue: 'Намети тримісні'
																},
																{ value: 'tents-4',
																	viewValue: 'Намети чотиримісні'
																}
															]
									},
									{	value: 'sleepingbag',
										viewValue: 'Спальники',
										children: [
																{ value: 'sleeping-bag-1',
																	viewValue: 'Спальники одномісні'
																},
																{ value: 'sleeping-bag-2',
																	viewValue: 'Спальники двомісні'
																},
															]
									},
									{	value: 'touristmat',
										viewValue: 'Каремати',
										children: [
																{ value: 'tourist-mat-foam',
																	viewValue: 'Пінні'
																},
																{ value: 'tourist-mat-inflatable',
																	viewValue: 'Надувні'
																},
																{ value: 'tourist-mat-selfinflatable',
																	viewValue: 'Самонадувні'
																},
															]
									},
									{	value: 'burner',
										viewValue: 'Пальники',
										children: [
																	{ value: 'burner-spirit',
																		viewValue: 'Пальники спиртові'
																	},
																	{ value: 'burner-gas',
																		viewValue: 'Пальники газові'
																	},
																	{ value: 'burner-multi',
																		viewValue: 'Пальники мультипаливні'
																	},
																	{ value: 'burner-integrater',
																		viewValue: 'Інтегровані системи'
																	},
																]
									},
									{	value: 'accessories',
										viewValue: 'Аксесуари',
										children: [
																{ value: 'dishes',
																	viewValue: 'Посуд'
																},
																{ value: 'tools',
																	viewValue: 'Ножі, інструменти'
																},
																{ value: 'drincing-system',
																	viewValue: 'Питні системи'
																},
																{ value: 'trekking-sticks',
																	viewValue: 'Трекінгові палиці'
																},
																{ value: 'accessories-other',
																	viewValue: 'Інше'
																},
															]
									}
							]
			},
			{
				value: '',
				viewValue: 'Гірські лижі',
				children: []
			},
			{
				value: '',
				viewValue: 'Сноубординг',
				children: []
			},
			{
				value: '',
				viewValue: 'Альпінізм, скелелазіння',
				children: []
			},
			{
				value: '',
				viewValue: 'Велосипеди',
				children: []
			},
			{
				value: '',
				viewValue: 'Велозапчастини та аксесуари',
				children: []
			},
			{
				value: '',
				viewValue: 'Одяг',
				children: []
			},
			{
				value: '',
				viewValue: 'Взуття',
				children: []
			},
			{
				value: '',
				viewValue: 'Зимові аксесуари',
				children: []
			}
		]
		




	getMenuItems ():any {
		return this.menuItems;
	}

}