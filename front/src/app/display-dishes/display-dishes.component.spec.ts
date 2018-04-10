import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDishesComponent } from './display-dishes.component';

describe('DisplayDishesComponent', () => {
  let component: DisplayDishesComponent;
  let fixture: ComponentFixture<DisplayDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
