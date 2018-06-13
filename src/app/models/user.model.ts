export class User {
	name: string;
	lastName: string;
	phone: number;
	email: string;
	password: string;
	city: string;
	rememberMe: boolean;
	favorite: any[];
	token: any[];

	constructor (name, lastName, email, phone, password, city, rememberMe, favorite) {
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;		
		this.password = password;
		this.city = city;
		this.rememberMe = rememberMe;
		this.favorite = favorite;
	}
}