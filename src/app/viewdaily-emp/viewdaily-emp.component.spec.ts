import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdailyEmpComponent } from './viewdaily-emp.component';

describe('ViewdailyEmpComponent', () => {
  let component: ViewdailyEmpComponent;
  let fixture: ComponentFixture<ViewdailyEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdailyEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdailyEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
