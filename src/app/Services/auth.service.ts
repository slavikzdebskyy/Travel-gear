import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";



@Injectable()
export class AuthLoginService implements CanActivate {

	constructor (private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		let isLog = localStorage.getItem('isLog');
		if(isLog){
			return true;
		} else {
			this.router.navigate(['login']);			
			return false;
		}
	}
	isLogin () {
		if(localStorage.getItem('isLog') === 'true') {
			return true;
		} else {
			return false;
		}
	}
}