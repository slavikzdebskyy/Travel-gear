import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenuChildComponent } from './navbar-menu-child.component';

describe('NavbarMenuChildComponent', () => {
  let component: NavbarMenuChildComponent;
  let fixture: ComponentFixture<NavbarMenuChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMenuChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMenuChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
