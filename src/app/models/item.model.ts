export class Item {
	id: string;
	category: string;
	title: string;
	brandLogoUrl: string;
	brand: string;
	description: string;
	oldPrice: number;
	newPrice: number;
	colors: string[];
	locations: string[];
	imageUrl: string;
	size: string;
	promo: boolean;
	promoTitle: string;

	constructor (id, category, title, brandLogoUrl, brand, description, oldPrice, newPrice, colors, locations, imageUrl, size, promo, promoTitle) {
		this.id = id;
		this.category = category;
		this.title = title;
		this.brandLogoUrl = brandLogoUrl;
		this.brand = brand;
		this.description = description;
		this.oldPrice = oldPrice;
		this.newPrice = newPrice;
		this.colors = colors;
		this.locations = locations;
		this.imageUrl = imageUrl;
		this.size = size;
		this.promo = promo;
		this.promoTitle = promoTitle;
	}

}