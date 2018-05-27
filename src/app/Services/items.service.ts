import { Item } from "../models/item.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ItemsService {
private	items: Item[] = [
		new Item('Намет_Trimm_Comet_22', 'tents-2', 'Намет Trimm Comet', 'https://www.gorgany.com/image/cache/data/manufacturers/Trimm_logo_09n-85x85.png', 'Trimm', 'Намет для 2-3 людей з традиційною конструкцією та внутрішніми дугами. Просторий тамбур для зберігання рюкзаків та спорядження. Легкий намет, швидко та просто встановлюється.', 2790, ['#336600', '#4d2600', '#4d4d33'], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/trimm_Comet_dark_olive_14-1000x1000.jpg', []),
		new Item('Рюкзак_Osprey_Nebula_34', 'backpacks<40', 'Рюкзак Osprey Nebula 34', 'https://www.gorgany.com/image/cache/data/filemanager/osprey_logo_17-85x85.png', 'Osprey', "Nebula 34 — універсальний міський рюкзак високої якості з безліччю функціональних особливостей, чудовою організацією внутрішнього простору та зручною спинкою. М'яке відділення для ноутбука та планшета. У внутрішніх відділеннях та кишені-органайзері розмістяться усі необхідні речі: ключі, окуляри, електроніка, планшет, записники та інше. У передню еластичну кишеню можна ставити курту, дощовик, тощо. Зручний у користуванні.", 3185, ['#b30000', '#cc3300', '#996633', '#446600', '#0000800', '#334d4d'], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/Osprey_Nebula_34_Side_Navy_Blue_web_17_20170721175716-1000x1000.jpg', []),
		new Item('Спальник_Salewa_Bike_&_Hike', 'sleeping-bag-1', 'Спальник Salewa Bike & Hike', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', "Компактний та легкий літній спальник.Layer construction - пошарова конструкція - утеплювач складається з кількох різних шарів, розташованих таким чином, щоб забезпечити максимальне збереження тепла.Powerloft - легкий та м'який матеріал з водовідштовхуючими властивостями. Складається з тонких мікроволокон з безліччю повітряних каналів. Powerloft має хороші теплоізоляційні та дихаючі властивості, забезпечує тепло навіть при намоканні, добре стискається та швидко сохне.", 1750, ['#b30000', '#cc3300', '#996633', '#446600'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/sallewa_3756_3852_BIKE_HIKE_16-1000x1000.jpg', []),
		new Item('Кросівки_Salewa_MS_MTN_Trainer_(2017)', 'Кросівки', 'Кросівки Salewa MS MTN Trainer (2017)', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Чоловічі трекінгові кросівки без мембрани для походів з важким рюкзаком. Оновлений дизайн, зручна система підтримки стопи, подовжене шнурування, устілка з 3-х елементів дозволяють максимально припасувати та адаптувати взуття під індивідуальні особливості ніг.', 3750, ['#446600', '#0000800', '#334d4d'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/salewa_63414_0487%20MS%20MTN%20TRAINER_17_20170405155618-1000x1000.jpg', ['40', '42', '43', '44']),
		new Item('Куртка_Alpine_Pro_Justic_2', 'Одяг', 'Куртка Alpine Pro Justic 2', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-alpine-pro-85x85.png', 'Alpine', 'Мембранна чоловіча куртка з підкладкою. Анатомічна форма рукавів, прямий крій та подовжена спина роблять виріб зручним майже для всіх outdoor-активностей. Матеріал надійно захищатиме від вітру та вологи, додаткові отвори для вентиляції під руками додають більше комфорту.', 3980, ['#446600', '#0000800', '#334d4d'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/AlpinePro_JUSTIC2_MJCL241_990_1_18_20180413145628-1000x1000.jpg', ['S', 'M', 'L', 'XL']),
		new Item('Фліс_Salewa_Fanes_45', 'Одяг', 'Фліс Salewa Fanes', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Теплий чоловічий фліс від Salewa. Якісні та зносостійкі матеріали. Для туристичних мандрівок, походів в гори, активного відпочинку, подорожей та щоденного використання. Приємний на дотик матеріал.', 2450, ['#336600', '#4d2600', '#4d4d33'], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/salewa_25973_8670_FANES_16-1000x1000.jpg', ['M', 'L', 'XL', 'XXL']),
		new Item('Термос_Esbit_VF1000ML', 'dishes', 'Термос Esbit VF1000ML', 'https://www.gorgany.com/image/cache/data/filemanager/ESBIT_Logo_new_14-85x85.png', 'Esbit', 'Термос з нержавіючої сталі з двома горнятками та додатковим корком. Зручно наливати напої. Отвір для наливання відкривається / закривається натисканням кнопки. Високоякісна конструкція термоса зберігає напої холодними / гарячими тривалий час. Зручний у тривалих мандрівках, забезпечить Вас улюбленим напоєм на цілий день.', 870, [], ['Львів', 'Київ', 'Одеса', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/esbit_steel_vacuum_flask_1000_14-1000x1000.jpg', []),
		new Item('Тримач_для_гаджета_KLS_Navigator_ts5', 'Спорядження', 'Тримач для гаджета KLS Navigator', 'https://www.gorgany.com/image/cache/data/filemanager/kls-logo-85x85.png', 'KLS', 'Універсальний тримач для гаджета. Має поворотну конструкцію, яка дозволяє зручно використовувати ваш пристрій під час руху. Користуватися GPS, відповідати на дзвінки чи перемикати улюблені пісні під час вело-прогулянки — легко, при цьому, не потрібно зупинятись чи уповільнюючи швидкість.', 250, [], ['Львів', 'Київ'], 'https://www.gorgany.com/image/cache/data/kls_navigator_1_17-1000x1000.jpg', []),
		new Item('Мультипаливний_пальник_Kovea_Booster_Dual_Max_g4', 'burner-multi', 'Мультипаливний пальник Kovea Booster Dual Max', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-Kovea-85x85.png', 'Kovea', 'Мультипаливний пальник KB-N0810 Dual Max Stove - це оновлена модель пальника Booster Calm. Працює як на бензині, так і від різьбового газового балона. Надійний супутник у будь-яких подорожах - складні гірські походи, багатоденні сходження або важкі сплави.', 5600, [], ['Львів', 'Київ'], 'https://www.gorgany.com/image/cache/data/kovea_Booster_Dual_Mix_KB-N0810_15-1000x1000.jpg', []),
		new Item('Шолом_Julbo_Mission_orange_5860_см', 'Спорядження', 'Шолом Julbo Mission orange 58/60 см', 'https://www.gorgany.com/image/cache/data/filemanager/logo_julbo-85x85.png', 'Julbo', 'Цей легкий та міцний шолом стане відмінним захистом для всіх любителів катання на лижах чи сноуборді. Для того, щоб зменшити масу, але не втратити захисних властивостей, він має два шари. Зовнішній полікарбонатний товщиною 0,3 мм, що виконує бар’єрну функцію і є стійким до пошкоджень та подряпин. Та внутрішній з пінополістиролу для поглинання та розподілу енергії при ударі.', 2100, ['#b30000', '#cc3300', '#996633', '#446600', '#0000800'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/julbo_Mission-orange_17-1000x1000.jpg', ['S', 'M', 'L', 'XL']),
		new Item('Намет_Salewa_Litetrek_Pro_II', 'tents-3', 'Намет Salewa Litetrek Pro II', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Двомісний намет, що підійде не тільки для звичайного трекінгу, але і для подорожей у складніших погодних умовах Серія LITETREK має надзвичайно вітростійку конструкцію. Pro версія виготовлена із тонших, але міцних тканин, що робить намет легшим. Тому його можна використовувати як і штормовий намет. Внутрішній тент прикріплюється до зовнішнього (за допомогою блискавки), тому конструкцію можна швидко зібрати, що дозволяє зекономити час. Рукави для дуг виготовлені із хлоросульфатного поліетилену (Hypalon), що характеризується міцністю і вогнестійкістю.', 16800, ['#b30000', '#cc3300', '#996633', '#446600'], ['Львів', 'Київ'], 'https://www.gorgany.com/image/cache/data/salewa_Litetrek_pro_II_5617_4745_17-1000x1000.jpg', [])
		// new Item('ffrt56', '', '', '', '', '', 0, [], [], '', []),
	];

	getAllItems () {
		return this.items;
	}
	getItemById (id:string) {
		for(let i = 0; i < this.items.length; i++){
			if(this.items[i].id === id){
				return this.items[i];
			}
		}
	}

}