import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
	emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
	
	@ViewChild('loginForm') 
	loginForm: NgForm;
	
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
	loginUp () {
		this.userService.login(this.loginForm.value.email, this.loginForm.value.password);
	}

	close () {
		this.router.navigate(['']);
	}
	goToSignUp () {
		this.router.navigate(['signup']);
	}
}
