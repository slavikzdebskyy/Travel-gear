import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

	constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

	@ViewChild('signUpForm') 
	signUpForm: NgForm;
	registerNewUser () {
		let user: User = new User(this.signUpForm.value.name, this.signUpForm.value.lastname, this.signUpForm.value.email, this.signUpForm.value.phone, this.signUpForm.value.password, this.signUpForm.value.passwordconfirm, this.signUpForm.value.remember);
		this.userService.addNewUser(user);
	}

	close () {
		this.router.navigate(['']);
	}
	goToLogin () {
		this.router.navigate(['login']);
	
	}

}
