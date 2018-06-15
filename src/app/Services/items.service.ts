import { Item } from "../models/item.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ItemsService {

	constructor(private httpClient: HttpClient) {	}
	private endpoints: any = environment.local;
	private	item: Item;
	private	items: Item[] = [];

	getAllItems () : Observable<Item[]>{
			let headers = {headers : this.addHeaders()};
			return this.httpClient.get<Item[]>(this.endpoints.allItems, headers);
	}

	getItemById (id:string) {	
		let headers = {headers : this.addHeaders()};		
		let andpointsByID = this.endpoints.item + id;
		return this.httpClient.get<Item>(andpointsByID, headers);		
	}


	saveItem (item:Item) {
		let headers = {headers : this.addHeaders()};
		return this.httpClient.post(this.endpoints.saveItem, item, headers);		
	}
	
	addHeaders () {
		return new HttpHeaders ({
			'Contetnt-Type' : 'application/json',
			'Authorization' : 'some token',
			// 'Access-Control-Allow-Origin' : '*'
		});
	}
}