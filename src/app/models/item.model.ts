export class Item {
	id: string;
	category: string;
	title: string;
	brandLogoUrl: string;
	brand: string;
	description: string;
	price: number;
	colors: string[];
	locations: string[];
	imageUrl: string;
	size: string;

	constructor (id, category, title, brandLogoUrl, brand, description, price, colors, locations, imageUrl, size) {
		this.id = id;
		this.category = category;
		this.title = title;
		this.brandLogoUrl = brandLogoUrl;
		this.brand = brand;
		this.description = description;
		this.price = price;
		this.colors = colors;
		this.locations = locations;
		this.imageUrl = imageUrl;
		this.size = size;
	}

}