import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

	doubleItemMessageClass: string = '';
	message :string = '';

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit() {		 
		let modal = document.getElementById('modal');
		window.onclick = (event) => {
			if (event.target == modal) {
				this.router.navigate(['']);
			}
		}	 
  }

	@ViewChild('signUpForm') 
	signUpForm: NgForm;
	registerNewUser () {
		let validForm = this.isValidForm();
		if(validForm) {
			if(this.signUpForm.value.remember === ''){
				this.signUpForm.value.remember = false;
			}
			let user: User = new User(this.signUpForm.value.name, this.signUpForm.value.lastname, this.signUpForm.value.email, this.signUpForm.value.phone, this.signUpForm.value.password, this.signUpForm.value.city, this.signUpForm.value.remember, []);
			this.userService.addNewUser(user).subscribe( res => {
				if(res){
					this.message = 'Реєстрація пройшла успішно !';
					this.doubleItemMessageClass = 'show-message-done';					
						setTimeout(() => {
							this.doubleItemMessageClass = '';
							this.goToLogin();
						}, 4000);
				} else {
					this.message = 'Користувач з такою електроною адресою вже зареєстрований !';
					this.doubleItemMessageClass = 'show-message-error';					
					setTimeout(() => {
						this.doubleItemMessageClass = '';
					}, 3000);
				}
			});
			
		} else {
			this.message = 'Дані заповнені некоректно, або заповнені не всі !';
			this.doubleItemMessageClass = 'show-message-error';					
			setTimeout(() => {
				this.doubleItemMessageClass = '';
			}, 3000);
		}
		// this.goToLogin();
	}

	isValidForm() {
		if(this.signUpForm.value.password === this.signUpForm.value.passwordconfirm && this.signUpForm.valid){
			return true;		
		} else {
			return false;			
		}
}
	close () {
		this.router.navigate(['']);
	}
	goToLogin () {
		this.router.navigate(['login']);
	
	}

}
