import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeshqipComponent } from './homeshqip.component';

describe('HomeshqipComponent', () => {
  let component: HomeshqipComponent;
  let fixture: ComponentFixture<HomeshqipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeshqipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeshqipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
