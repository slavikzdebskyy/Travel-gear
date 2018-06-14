import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { HeaderDataService } from '../../Services/header.data.service';
import { User } from '../../models/user.model';


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

	doubleItemMessageClass: string = '';
	message :string = '';
	loginUser: User;
	@ViewChild('loginForm') 
	loginForm: NgForm;
	
	constructor(private router: Router, private userService: UserService,
							 private headerDataService: HeaderDataService) { }

  ngOnInit() {	 
		let modal = document.getElementById('modal');
		window.onclick = (event) => {
			if (event.target == modal) {
				this.router.navigate(['']);
			}
		}	
		
	}
	
	loginUp () {		 
		this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
			if(res){				
				let token = JSON.stringify(res);				
				localStorage.setItem('token', JSON.parse(token).token);
				this.loginUser = new User(JSON.parse(token).name,JSON.parse(token).lastName,JSON.parse(token).email,JSON.parse(token).phone,JSON.parse(token).password,JSON.parse(token).cyty,JSON.parse(token).rememberMe,JSON.parse(token).favorite);
				this.headerDataService.setLoginUser(this.loginUser);
				this.router.navigate(['user_acount']);
			} else {
					this.message = 'Перевірте логін та пароль !';
					this.doubleItemMessageClass = 'show-message-error';					
					setTimeout(() => {
						this.doubleItemMessageClass = '';
						this.router.navigate(['']);
					}, 3000);
				}
		});		
		
	}

	close () {
		this.router.navigate(['']);
	}
	goToSignUp () {
		this.router.navigate(['signup']);
	}

	

}
