import { User } from "../models/user.model";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

	constructor(private httpClient: HttpClient) {	}

	user: User;
	private endpoints: any = environment.local;

	addNewUser (user:User) {
		return this.httpClient.post(this.endpoints.saveUser, user);
	}

	updateUser (user:User) {
		return this.httpClient.post(this.endpoints.updateUser, user);
	}
	
	login (email: string, password: string) {
		// let headers = {headers : this.addHeaders()};
		let data = {'email': email, 'password': password}
		return this.httpClient.post(this.endpoints.loginUser, data);		
	}

	getUserByEmail (email:string) {
		// let headers = {headers : this.addHeaders()};		
		let andpointsByEmail = this.endpoints.acountUser + email;
		return this.httpClient.get<User>(andpointsByEmail);	
	}

	
	// addHeaders () {
	// 	return new HttpHeaders ({
	// 		'Contetnt-Type' : 'application/json',
	// 		'Authorization' : 'some token',
	// 		'Access-Control-Allow-Origin' : '*',
	// 	});
	// }

logout () {
	localStorage.setItem('isLog', 'false');
	localStorage.setItem('userEmail', '');
}



}