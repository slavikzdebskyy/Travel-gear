import { Item } from "../models/item.model";
import { Injectable } from "@angular/core";
import { NavItemInterface } from "../interfaces/navbar.interface";

@Injectable()
export class NavbarService {

	private menuItems:NavItemInterface []  = [
		{
			value : 'Спорядження',
			children: [
				{value: 'Рюкзаки',
					children: [
						{value: 'Рюкзаки для міста'},
						{value: 'Рюкзаки для тркінгу'},
						{value: 'Велорюкзаки'},
						{value: 'Рюкзаки для ноутбука'},
						{value: 'Рюкзаки дитячі'}
					]},   
					{value: 'Намети',
						children: [
							{value: 'Намети одномісні'},
							{value: 'Намети двомісні'},
							{value: 'Намети тримісні'},
							{value: 'Намети чотиримісні'}
						]},
					{value: 'Спальники',
						children: [
							{value: 'Спальники одномісні'},
							{value: 'Спальники двомісні'},
						]},
					{value: 'Каремати',
						children: [
							{value: 'Пінні'},
							{value: 'Надувні'},
							{value: 'Самонадувні'},
						]},
					{value: 'Пальники',
						children: [
							{value: 'Пальники спиртові'},
							{value: 'Пальники газові'},
							{value: 'Пальники мультипаливні'},
							{value: 'Інтегровані системи'},
						]},
					{value: 'Аксесуари',
						children: [
							{value: 'Посуд'},
							{value: 'Ножі, інструменти'},
							{value: 'Питні системи'},
							{value: 'Трекінгові палиці'},
							{value: 'Інше'},
						]}
			]},
			{
				value: 'Гірські лижі та сноубординг',
				children: [
					{value: 'Лижі',
						children: [
							{value: 'Гірські лижі'},
							{value: 'Бігові лижі'},
							{value: 'Лижні кріплення'},
							{value: 'Лижні палиці'},
							{value: 'Лижні черевики'},
						]},
					{value: 'Сноубординг',
						children: [
							{value: 'Сноуборди'},
							{value: 'Кріплення для сноубордів'},
							{value: 'Боти для сноуборду'},
						]},
					{value: 'Аксесуари',
						children: [
							{value: 'Шоломи'},
							{value: 'Маски'},
							{value: 'Захист'},
						]}
				]},			
			{value: 'Альпінізм, скелелазіння',
				children: [
					{value: 'Карабіни'},
					{value: 'Відтяжки'},
					{value: 'Системи страхування'},
					{value: 'Скельники'},
				]},
			{value: 'Велосипеди',
				children: [
					{value: 'Міські'},
					{value: 'Шосейні'},
					{value: 'Гірські'},
				]},
			{value: 'Велозапчастини та аксесуари',
				children: [
					{value: 'Запчастини',
						children: [
							{value: 'Камери'},
							{value: 'Педалі'},
							{value: 'Гальмівні колодки'},
							{value: 'Ланцюги'},
							{value: 'Інше'},
						]},
					{value: 'Аксесуари',
					children: [
						{value: 'Дзеркала'},
						{value: 'Кошики'},
						{value: 'Багажники'},
						{value: "Велокомп'ютери"},
					]},
				]},
			{value: 'Одяг',
				children: [
					{value: 'Куртки',
					children: [
						{value: 'Міські'},
						{value: 'Трекінгові'},
						{value: 'Гірськолижні'},
					]},
					{value: 'Штани',
					children: [
						{value: 'Міські'},
						{value: 'Трекінгові'},
						{value: 'Гірськолижні'},
					]},
					{value: 'Шапки'},
					{value: 'Фліси'},
				]},
			{value: 'Взуття',
				children: [
					{value: 'Чоловіче',
					children: [
						{value: 'Черевики'},
						{value: 'Кросівки'},
						{value: 'Сандалі'},
					]},
					{value: 'Жіноче',
					children: [
						{value: 'Черевики'},
						{value: 'Кросівки'},
						{value: 'Сандалі'},
					]},
					{value: 'Дитяче'},
				]},			
		]
		




	getMenuItems ():any {
		return this.menuItems;
	}

}