import { Injectable } from "@angular/core";

@Injectable()
export class ItemDetailsService {
private colors: string[] = ['#336600', '#4d2600', '#4d4d33', '#446600', '#0000800', '#334d4d','#b30000', '#cc3300', '#996633', '#446600'];
private locations: string[] = ['Львів', 'Київ', 'Івано-Франкіськ', 'Одеса', 'Тернопіль'];
private sizes: string[] = ['XS','S','M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL', '38', '38.5', '39', '39.5', '40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5', '44'];


getAllColors () {
	return this.colors;
}

getAllLocations () {
	return this.locations;
}

getAllSizes () {
	return this.sizes;
}


}