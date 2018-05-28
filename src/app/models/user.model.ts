export class User {
	name: string;
	lastName: string;
	phone: number;
	email: string;
	password: string;
	passwordConfirm: string;
	rememberMe: boolean;

	constructor (name, lastName, email, phone, password, passwordConfirm, rememberMe) {
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;		
		this.password = password;
		this.passwordConfirm = passwordConfirm;
		this.rememberMe = rememberMe;
	}
}