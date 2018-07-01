import { Component, OnInit, DoCheck } from '@angular/core';
import { HeaderDataService } from '../Services/header.data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, DoCheck {

	filterSideBarVisible: boolean = true;
	
	constructor(private headerDataService: HeaderDataService) { }

  ngOnInit() {}	
	
	ngDoCheck(): void {
		this.filterSideBarVisible = this.headerDataService.getfilterSideBarVisible();
	}	
	
}
