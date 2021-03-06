import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { ItemsService } from './Services/items.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatSelectModule, MatIconModule  } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { ItemContentComponent } from './main/item-content/item-content.component';
import { ItemComponent } from './main/item-content/item/item.component';
import { HoverItemDirective } from './hover-item.directive';
import { MainComponent } from './main/main.component';
import { Routers } from './app.routers';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarService } from './Services/navbar.service';
import { ToolbarComponent } from './main/header/toolbar/toolbar.component';
import { AccordionModule } from "ng2-accordion";
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
import { NavbarMenuChildComponent } from './main/navbar/navbar-menu-child/navbar-menu-child.component';
import { FilterSidebarComponent } from './main/filter-sidebar/filter-sidebar.component';
import { NouisliderModule } from 'ng2-nouislider';
import { AdministratorComponent } from './administrator/administrator.component';
import { ItemDetailsService } from './Services/item.details.service';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderDataService } from 'src/app/Services/header.data.service';
import { FilterPipe } from 'src/app/main/item-content/filter.paginator';
import { FilterPipeByPrice } from 'src/app/main/item-content/filterbyprice.pipe';
import { FilterPipeByCategory } from './main/item-content/filterbycategory.pipe';
import { FilterPipeBySubCategory } from './main/item-content/filterbysubcategory.pipe';
import { FilterPipeByBrands } from './main/item-content/filterbybrands.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MediaQueryDirective } from './media.query.directive';


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
    UserAcountComponent,
    NavbarMenuChildComponent,
		FilterSidebarComponent,
		AdministratorComponent,
		FooterComponent,
		FilterPipe,
		FilterPipeByPrice,
		FilterPipeByCategory,
		FilterPipeBySubCategory,
		FilterPipeByBrands,
		// MediaQueryDirective
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
		MatToolbarModule,
		MatPaginatorModule,
		MatRadioModule,
		MatCheckboxModule,
		NoopAnimationsModule,
		RouterModule.forRoot(Routers),
		FormsModule,
		ReactiveFormsModule,
		AccordionModule,
		AngularFontAwesomeModule,
		HttpClientModule,
		NouisliderModule,		
	],

	providers: [ItemsService,	NavbarService, ItemDetailsService,
							BagService,	UserService, AuthLoginService, HeaderDataService,
							],
							
  bootstrap: [AppComponent]
})
export class AppModule { }
