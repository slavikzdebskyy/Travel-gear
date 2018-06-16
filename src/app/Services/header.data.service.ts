import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class HeaderDataService {

	// constructor(private httpClient: HttpClient) {	}
	private endpoints: any = environment.local;
	private loginUser: User = new User('','','','','','','',[]);
	private filterSideBarVisible: boolean = true;

	setLoginUser (user:User) {	
		this.loginUser = user;
	}

	getloginUser () {
		return this.loginUser;
	}

	setfilterSideBarVisible (value:boolean) {
		this.filterSideBarVisible = value;
	}

	getfilterSideBarVisible () {
		return this.filterSideBarVisible;
	}

	// addHeaders () {
	// 	let tokenLS = localStorage.getItem('token');
	// 	if(!tokenLS){
	// 		tokenLS = 'some token';
	// 	}
	// 	return new HttpHeaders ({
	// 		'Contetnt-Type' : 'application/json',
	// 		'Authorization' : tokenLS,
	// 		// 'Access-Control-Allow-Origin' : '*',
	// 	});
	// }



}

