import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeanglishtComponent } from './homeanglisht.component';

describe('HomeanglishtComponent', () => {
  let component: HomeanglishtComponent;
  let fixture: ComponentFixture<HomeanglishtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeanglishtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeanglishtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
