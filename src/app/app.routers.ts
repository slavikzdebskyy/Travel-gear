import { MainComponent } from "./main/main.component";
import { ItemContentComponent } from "./main/item-content/item-content.component";
import { ItemSelectedComponent } from "./main/item-content/item-selected/item-selected.component";
import { BagComponent } from "./main/bag/bag.component";
import { SignupComponent } from "./main/signup/signup.component";
import { LoginComponent } from "./main/login/login.component";


export const Routers = [
	// {path: 'main', component: MainComponent},
	{path: 'item', component: ItemContentComponent},
	{path: 'item/:id', component: ItemSelectedComponent},
	{path: '', component: ItemContentComponent},
	{path: 'mybag', component: BagComponent},
	{path: 'signup', component: SignupComponent},
	{path: 'login', component: LoginComponent}
]
