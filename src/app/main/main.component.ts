import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  @Input()
	signUpVisible: boolean = false;
	loginVisible: boolean = false;
  constructor() { }

  ngOnInit() {
	}
	
	getDataFromMyEvent(value) {
		this.signUpVisible = value;
	}
}
