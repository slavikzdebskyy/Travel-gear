import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { ItemsService } from './Services/items.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatMenuModule, MatSelectModule, MatIconModule  } from '@angular/material';
import { ItemContentComponent } from './main/item-content/item-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ItemComponent } from './main/item-content/item/item.component';
import { HoverItemDirective } from './hover-item.directive';
import { MainComponent } from './main/main.component';
import { Routers } from './app.routers';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './main/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarService } from './Services/navbar.service';
import { ToolbarComponent } from './main/header/toolbar/toolbar.component';
import {AccordionModule} from "ng2-accordion";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { ItemSelectedComponent } from './main/item-content/item-selected/item-selected.component';
import { BagComponent } from './main/bag/bag.component';
import { BagService } from './Services/bag.service';
import { SignupComponent } from './main/signup/signup.component';
import { UserService } from './Services/user.service';
import { LoginComponent } from './main/login/login.component';
import { AuthLoginService } from './Services/auth.service';
import { UserAcountComponent } from './main/user-acount/user-acount.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemContentComponent,
    ItemComponent,
    HoverItemDirective,
    MainComponent,
    NavbarComponent,
    ToolbarComponent,
    ItemSelectedComponent,
    BagComponent,
    SignupComponent,
    LoginComponent,
    UserAcountComponent
  ],
  imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatMenuModule,
		MatIconModule,
		MatCardModule,
		MatSelectModule,
		MatTabsModule,
		NoopAnimationsModule,
		RouterModule.forRoot(Routers),
		FormsModule,
		ReactiveFormsModule,
		AccordionModule,
		AngularFontAwesomeModule,
		HttpClientModule
		
	],

	providers: [ItemsService,	NavbarService,
							BagService,	UserService, AuthLoginService],
							
  bootstrap: [AppComponent]
})
export class AppModule { }
