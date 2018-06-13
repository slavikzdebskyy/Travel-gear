import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";



@Injectable()
export class AuthLoginService implements CanActivate {

	constructor (private router: Router, private userService: UserService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		let token = localStorage.getItem('token');
		if(token){		
			return true;
		} else {
			// this.router.navigate(['login']);	
			return false;
		}
		
	}

	

	// isLogin () {
	// 	if(localStorage.getItem('isLog') === 'true') {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
}