import { Item } from "../models/item.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ItemsService {
private	items: Item[] = [
		new Item('Намет_Trimm_Comet_22', 'tents', 'tents-2', 'Намет Trimm Comet', 'https://www.gorgany.com/image/cache/data/manufacturers/Trimm_logo_09n-85x85.png', 'Trimm', 'Намет для 2-3 людей з традиційною конструкцією та внутрішніми дугами. Просторий тамбур для зберігання рюкзаків та спорядження. Легкий намет, швидко та просто встановлюється.', 0, 2790, ['#336600', '#4d2600', '#4d4d33'], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/trimm_Comet_dark_olive_14-1000x1000.jpg', [], false, ''),
		new Item('Рюкзак_Osprey_Nebula_34','backpacks', 'backpacks<40', 'Рюкзак Osprey Nebula 34', 'https://www.gorgany.com/image/cache/data/filemanager/osprey_logo_17-85x85.png', 'Osprey', "Nebula 34 — універсальний міський рюкзак високої якості з безліччю функціональних особливостей, чудовою організацією внутрішнього простору та зручною спинкою. М'яке відділення для ноутбука та планшета. У внутрішніх відділеннях та кишені-органайзері розмістяться усі необхідні речі: ключі, окуляри, електроніка, планшет, записники та інше. У передню еластичну кишеню можна ставити курту, дощовик, тощо. Зручний у користуванні.", 0, 3185, ['#b30000', '#cc3300', '#996633', '#446600', '#0000800', '#334d4d'], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/Osprey_Nebula_34_Side_Navy_Blue_web_17_20170721175716-1000x1000.jpg', [], false, ''),
		new Item('Спальник_Salewa_Bike_&_Hike','sleeping-bag', 'sleeping-bag-1', 'Спальник Salewa Bike & Hike', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', "Компактний та легкий літній спальник.Layer construction - пошарова конструкція - утеплювач складається з кількох різних шарів, розташованих таким чином, щоб забезпечити максимальне збереження тепла.Powerloft - легкий та м'який матеріал з водовідштовхуючими властивостями. Складається з тонких мікроволокон з безліччю повітряних каналів. Powerloft має хороші теплоізоляційні та дихаючі властивості, забезпечує тепло навіть при намоканні, добре стискається та швидко сохне.", 0, 1750, ['#b30000', '#cc3300', '#996633', '#446600'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/sallewa_3756_3852_BIKE_HIKE_16-1000x1000.jpg', [], false, ''),
		new Item('Кросівки_Salewa_MS_MTN_Trainer_(2017)','shoes', 'sneakers', 'Кросівки Salewa MS MTN Trainer (2017)', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Чоловічі трекінгові кросівки без мембрани для походів з важким рюкзаком. Оновлений дизайн, зручна система підтримки стопи, подовжене шнурування, устілка з 3-х елементів дозволяють максимально припасувати та адаптувати взуття під індивідуальні особливості ніг.', 0, 3750, ['#446600', '#0000800', '#334d4d'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/salewa_63414_0487%20MS%20MTN%20TRAINER_17_20170405155618-1000x1000.jpg', ['40', '42', '43', '44'], false, ''),
		new Item('Куртка_Alpine_Pro_Justic_2','clothes', 'jackets', 'Куртка Alpine Pro Justic 2', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-alpine-pro-85x85.png', 'Alpine', 'Мембранна чоловіча куртка з підкладкою. Анатомічна форма рукавів, прямий крій та подовжена спина роблять виріб зручним майже для всіх outdoor-активностей. Матеріал надійно захищатиме від вітру та вологи, додаткові отвори для вентиляції під руками додають більше комфорту.', 0, 3980, ['#446600', '#0000800', '#334d4d'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/AlpinePro_JUSTIC2_MJCL241_990_1_18_20180413145628-1000x1000.jpg', ['S', 'M', 'L', 'XL'], false, ''),
		new Item('Фліс_Salewa_Fanes_45','clothes', 'fleece', 'Фліс Salewa Fanes', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Теплий чоловічий фліс від Salewa. Якісні та зносостійкі матеріали. Для туристичних мандрівок, походів в гори, активного відпочинку, подорожей та щоденного використання. Приємний на дотик матеріал.', 0, 2450, ['#336600', '#4d2600', '#4d4d33'], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/salewa_25973_8670_FANES_16-1000x1000.jpg', ['M', 'L', 'XL', 'XXL'], true, 'Новинка'),
		new Item('Термос_Esbit_VF1000ML','accessories', 'dishes', 'Термос Esbit VF1000ML', 'https://www.gorgany.com/image/cache/data/filemanager/ESBIT_Logo_new_14-85x85.png', 'Esbit', 'Термос з нержавіючої сталі з двома горнятками та додатковим корком. Зручно наливати напої. Отвір для наливання відкривається / закривається натисканням кнопки. Високоякісна конструкція термоса зберігає напої холодними / гарячими тривалий час. Зручний у тривалих мандрівках, забезпечить Вас улюбленим напоєм на цілий день.', 0, 870, [], ['Львів', 'Київ', 'Одеса', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/esbit_steel_vacuum_flask_1000_14-1000x1000.jpg', [], false, ''),
		new Item('Тримач_для_гаджета_KLS_Navigator_ts5', 'bicycleparts', 'accessories', 'Тримач для гаджета KLS Navigator', 'https://www.gorgany.com/image/cache/data/filemanager/kls-logo-85x85.png', 'KLS', 'Універсальний тримач для гаджета. Має поворотну конструкцію, яка дозволяє зручно використовувати ваш пристрій під час руху. Користуватися GPS, відповідати на дзвінки чи перемикати улюблені пісні під час вело-прогулянки — легко, при цьому, не потрібно зупинятись чи уповільнюючи швидкість.', 0, 250, [], ['Львів', 'Київ'], 'https://www.gorgany.com/image/cache/data/kls_navigator_1_17-1000x1000.jpg', [], false, ''),
		new Item('Мультипаливний_пальник_Kovea_Booster_Dual_Max_g4', 'burner', 'burner-multi', 'Мультипаливний пальник Kovea Booster Dual Max', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-Kovea-85x85.png', 'Kovea', 'Мультипаливний пальник KB-N0810 Dual Max Stove - це оновлена модель пальника Booster Calm. Працює як на бензині, так і від різьбового газового балона. Надійний супутник у будь-яких подорожах - складні гірські походи, багатоденні сходження або важкі сплави.', 6800, 5600, [], ['Львів', 'Київ'], 'https://www.gorgany.com/image/cache/data/kovea_Booster_Dual_Mix_KB-N0810_15-1000x1000.jpg', [], true, '-20%'),
		new Item('Шолом_Julbo_Mission_orange_5860_см', 'skiingSnowboarding', 'Спорядження', 'Шолом Julbo Mission orange 58/60 см', 'https://www.gorgany.com/image/cache/data/filemanager/logo_julbo-85x85.png', 'Julbo', 'Цей легкий та міцний шолом стане відмінним захистом для всіх любителів катання на лижах чи сноуборді. Для того, щоб зменшити масу, але не втратити захисних властивостей, він має два шари. Зовнішній полікарбонатний товщиною 0,3 мм, що виконує бар’єрну функцію і є стійким до пошкоджень та подряпин. Та внутрішній з пінополістиролу для поглинання та розподілу енергії при ударі.', 0, 2100, ['#b30000', '#cc3300', '#996633', '#446600', '#0000800'], ['Львів', 'Київ', 'Одеса'], 'https://www.gorgany.com/image/cache/data/julbo_Mission-orange_17-1000x1000.jpg', ['S', 'M', 'L', 'XL'], false, ''),
		new Item('Намет_Salewa_Litetrek_Pro_II', 'tents', 'tents-3', 'Намет Salewa Litetrek Pro II', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Двомісний намет, що підійде не тільки для звичайного трекінгу, але і для подорожей у складніших погодних умовах Серія LITETREK має надзвичайно вітростійку конструкцію. Pro версія виготовлена із тонших, але міцних тканин, що робить намет легшим. Тому його можна використовувати як і штормовий намет. Внутрішній тент прикріплюється до зовнішнього (за допомогою блискавки), тому конструкцію можна швидко зібрати, що дозволяє зекономити час. Рукави для дуг виготовлені із хлоросульфатного поліетилену (Hypalon), що характеризується міцністю і вогнестійкістю.', 0, 16800, ['#b30000', '#cc3300', '#996633', '#446600'], ['Львів', 'Київ'], 'https://www.gorgany.com/image/cache/data/salewa_Litetrek_pro_II_5617_4745_17-1000x1000.jpg', [], false, ''),
		new Item('Карабін_Salewa_Ergotec_2.0', 'mountaineering', 'carbine', 'Карабін Salewa Ergotec 2.0', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Карабін для віа-феррата. Простий, швидкий та безпечний у використанні.', 0, 1295, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/salewa_1648_5306_ERGOTEC_2.0_VF_15-1000x1000.jpg', [], false, ''),
		new Item('Набір_карабінів_AustriAlpin_Micro_KM01BL.6', 'mountaineering', 'carbine', 'Набір карабінів AustriAlpin Micro KM01BL.6', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-AustriAlpin-85x85.png', 'AustriAlpin ', 'Набір із 6-ти міцних і зручних карабінів, що мають великий діапазон відкриття.', 0, 1245, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/Austrialpin_KM01BL.6_17_n-1000x1000.jpg', [], false, ''),
		new Item('Карабін_Petzl_Attache_Screw_Lock_159', 'mountaineering', 'carbine', 'Карабін Petzl Attache Screw Lock', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-petzl-85x85.png', 'Petzl', 'Карабіном Attache Screw Lock зручно пристібати спусковий пристрій, зручно організовувати з його допомогою страхівку, а також його можна використовувати як багатофункціональний карабін на станціях.', 0, 625, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/petzl_ATTACHE_SCREW-LOCK_M35_SL_15-1000x1000.jpg', [], false, ''),
		new Item('Відтяжка_Salewa_Hot_G3_Dyneema_straight_bent_753', 'mountaineering', 'backstay', 'Відтяжка Salewa Hot G3 Dyneema straight/bent', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Відтяжка з двома карабінами Hot G3 Straight і Hot G3 Bent, стропою Dyneema та протектором, що запобігає скручуванню.', 0, 505, [], ['Львів', 'Одеса', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/salewa_1725_0165_DYN_HOT_G3_STR-BENT_15-1000x1000.jpg', [], false, ''),
		new Item('Відтяжка_Salewa_Fly_straight_bent_552', 'mountaineering', 'backstay', 'Відтяжка Salewa Fly straight/bent', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Надійна відтяжка від виробника Salewa з двома легкими карабінами Fly Straight і Fly Bent та протектором Sling Protector, що запобігає скручуванню.', 0, 562, [], ['Львів', 'Одеса', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/salewa_1738_0455_EXPRESS_SET_FLY_STRAIGHT-BENT_15-1000x1000.jpg', [], false, ''),
		new Item('Відтяжка_AustriAlpin_Easy_Classic_Set_KS11AC', 'mountaineering', 'backstay', 'Відтяжка AustriAlpin Easy Classic Set KS11AC', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-AustriAlpin-85x85.png', 'AustriAlpin', 'AustriAlpin - альпіністське спорядження світового рівня, яке виготовляється в легендарній долині Штубай – самому серці Альп. У розробці та виробництві технологи AustriAlpin спираються на понад сторічний досвід компанії. ', 0, 432, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/AA_ks11ac_10n-1000x1000.jpg', [], false, ''),
		new Item('Система_Petzl_Corax_2_(2016)', 'mountaineering', 'insurance_sys', 'Система Petzl Corax 2 (2016)', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-petzl-85x85.png', 'Petzl', 'Універсальна регульована система страхування. Зручна система Corax підійде для широкого кола користувачів у скелелазінні, альпінізмі або віа феррата.', 0, 2000, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/petzl_corax_C51_1B_15-1000x1000.jpg', [], false, ''),
		new Item('Система_Petzl_Corax_2_897', 'mountaineering', 'insurance_sys', 'Система Petzl Corax 2', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-petzl-85x85.png', 'Petzl', 'Універсальна, перевірена часом модель системи: проста у використанні і комфортна. Розроблена для скелелазіння, альпінізму і маршрутів via ferrata.', 0, 2150, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/Petzl_corax_C51A_4_17_20171116160039-1000x1000.jpg', [], false, ''),
		new Item('Система_Camp_Quartz_CR_5673', 'mountaineering', 'insurance_sys', 'Система Camp Quartz CR', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-Camp-85x85.png', 'Camp', "Quartz CR - універсальна поясна система від Camp. Система дуже зручна при проходженні тривалих маршрутів завдяки м'якій підкладці. Регулювання системи здійснюється пряжкою на поясі і системою Auto Fit на ногах. Для підвищення безпеки в ный застосовані такі патентовані системи, як No Twist і Flat Link elastic.", 0, 1905, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/camp_QUARTZ_11-1000x1000.jpg', [], false, ''),
		new Item('Скельники_Salewa_Gamma_sg567', 'mountaineering', 'rockers', 'Скельники Salewa Gamma', 'https://www.gorgany.com/image/cache/data/filemanager/Logo_Salewa_neu-85x85.png', 'Salewa', 'Скельники Salewa Gamma підійдуть для тих, хто надає перевагу довгим скелелазним та альпіністським маршрутам. Скельники Gamma комфортно сидять на нозі і при цьому забезпечують максимальну надійність на маршруті. Не мають неприємного запаху навіть після довготривалого використання.', 3600, 2170, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/salewa_65300_0906_CUBE_13-1000x1000.jpg', ['38', '38.5', '40', '40.5', '42'], true, '-40%'),
		new Item('Скельники_Zamberlan_Precisa_zp_987', 'mountaineering', 'rockers', 'Скельники Zamberlan Precisa', 'https://www.gorgany.com/image/cache/data/filemanager/Zamberlan_Logo%20COLORE-85x85.png', 'Zamberlan', 'Завдяки високоякісним матеріалам та новітнім технологіям скельники Zamberlan розроблені так, щоб забезпечити максимально зручну посадку ноги та абсолютний комфорт при їх використанні. Моделі скельників відрізняються особливостями конструкцій для різних ступенів складності скалелазіння.', 2120, 3850, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/Zamb_Prescia_1_11-1000x1000.jpg', ['39', '39.5', '40', '42', '42.5'], true, '-40%'),
		new Item('Скельники_Wild_Climb_Bat_XSG', 'mountaineering', 'rockers', 'Скельники Wild Climb Bat XSG', 'https://www.gorgany.com/image/cache/data/Rocky/Logo/logo-wild-climb-85x85.png', 'Wild Climb', 'Скельники на липучці, популярна модель для тренувань у залі. Асиметрична форма і використані матеріали дозволяють рекомендувати їх для високих досягнень.', 0, 2130, [], ['Львів', 'Київ', 'Івано-Франкіськ'], 'https://www.gorgany.com/image/cache/data/WC_bat_14-1000x1000.jpg', ['38', '38.5', '40', '40.5', '42'], false, ''),
		// new Item('', '', '', '', '', '', 0, 0, [], [], '', [], false, ''),
		// new Item('', '', '', '', '', '', 0, 0, [], [], '', [], false, ''),
		// new Item('', '', '', '', '', '', 0, 0, [], [], '', [], false, ''),
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
	getAllPropertyFromArray (prop) { 			// only for size, colors, locations
		let propertyArray = [];
		let isProp = 0;
		this.items.forEach(element => {
			for(let i = 0; i < element[prop].length; i++){
				isProp = 0;
				for(let j = 0; j < propertyArray.length; j++){
					if(element[prop][i] === propertyArray[j]){
						isProp++;
					}
				}
				if(!isProp){
					propertyArray.push(element[prop][i]);
				}
			}
		});
		return propertyArray;
	}
	getAllProperty (prop) { 			// not for for size, colors, locations
		let propertyArray = [];
		let isProp = 0;
		this.items.forEach(element => {
				isProp = 0;
				for(let j = 0; j < propertyArray.length; j++){
					if(element[prop] === propertyArray[j]){
						isProp++;
					}
				}
				if(!isProp){
					propertyArray.push(element[prop]);
				}
		});
		propertyArray.sort((a,b) => {
			if(b > a){
				return -1;
		} else {
				return 1;
		}
		})
		return propertyArray;
	}

}