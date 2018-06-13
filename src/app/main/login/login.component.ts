import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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

	doubleItemMessageClass: string = '';
	message :string = '';
	headerInfo: any = {'account': '', 'myFavoriteCount': 0, 'logoutVisible': false};
	@Output()
	headerInfoEvent = new EventEmitter<any>();
	@ViewChild('loginForm') 
	loginForm: NgForm;
	
  constructor(private router: Router, private userService: UserService) { }

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
				// this.headerInfo.account = JSON.parse(token).userName;
				// this.headerInfo.myFavoriteCount = JSON.parse(token).userFavorite.length;
				// this.headerInfo.logoutVisible = true;	
				// this.headerInfoEvent.emit(this.headerInfo);
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
