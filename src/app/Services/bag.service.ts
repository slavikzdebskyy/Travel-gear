import { Item } from "../models/item.model";


export class BagService {

	itemsInBag: Item[] = [];

	addItemToBag (item:Item) {
		this.itemsInBag.push(item);
		localStorage.setItem('ItemsInBag', JSON.stringify(this.itemsInBag));
	}

	getAllItemsFromBag () {
		this.itemsInBag = JSON.parse(localStorage.getItem('ItemsInBag'));
		if(this.itemsInBag){
		return this.itemsInBag;
		} else {
			return this.itemsInBag =[];
		}
 }

 removeFromBag (id:string) {	
	this.itemsInBag = JSON.parse(localStorage.getItem('ItemsInBag'));
	for(let i = 0; i < this.itemsInBag.length; i++){
		if(this.itemsInBag[i]._id === id){
			this.itemsInBag.splice(i, 1);			
		}
	}
		localStorage.setItem('ItemsInBag', JSON.stringify(this.itemsInBag));	
}


}