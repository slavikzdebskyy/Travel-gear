import { User } from "../models/user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class HeaderDataService {

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




}

