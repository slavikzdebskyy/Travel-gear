import { MainComponent } from "./main/main.component";
import { ItemContentComponent } from "./main/item-content/item-content.component";
import { ItemSelectedComponent } from "./main/item-content/item-selected/item-selected.component";
import { BagComponent } from "./main/bag/bag.component";
import { SignupComponent } from "./main/signup/signup.component";
import { LoginComponent } from "./main/login/login.component";
import { AuthLoginService } from "./Services/auth.service";
import { UserAcountComponent } from "./main/user-acount/user-acount.component";
import { AdministratorComponent } from "./administrator/administrator.component";


export const Routers = [
	{path: 'item', component: ItemContentComponent},
	{path: 'item/:id', component: ItemSelectedComponent},
	{path: '', component: ItemContentComponent},
	{path: 'mybag', component: BagComponent},
	{path: 'signup', component: SignupComponent},
	{path: 'login', component: LoginComponent},
	{path: 'user_acount/:email', component: UserAcountComponent, canActivate: [AuthLoginService]},
	{path: 'administrator', component: AdministratorComponent}
]
