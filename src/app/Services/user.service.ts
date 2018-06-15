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
		let headers = {headers : this.addHeaders()};
		return this.httpClient.post(this.endpoints.saveUser, user, headers);
	}

	updateUser (user:User) {
		let headers = {headers : this.addHeaders()};
		return this.httpClient.post(this.endpoints.updateUser, user, headers);
	}
	
	login (email: string, password: string) {
		let headers = {headers : this.addHeaders()};
		let data = {'email': email, 'password': password}
		return this.httpClient.post(this.endpoints.loginUser, data, headers);		
	}

	getUserByToken () {
		let headers = {headers : this.addHeaders()};
		return this.httpClient.get<User>(this.endpoints.acountUser, headers);
	}
	
	
	logout () {
		let headers = {headers : this.addHeaders()};
		let token = {'token': localStorage.getItem('token')};
		localStorage.removeItem('token');
		return this.httpClient.post(this.endpoints.logOutUser, token, headers).subscribe(res => {	});	
	}

	addHeaders () {
		let token = localStorage.getItem('token');
		if(!token){
			token = 'some token';
		}
		return new HttpHeaders ({
			'Contetnt-Type' : 'application/json',
			'Authorization' : token,
			// 'Access-Control-Allow-Origin' : '*',
		});
	}




}