import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmpComponent } from './nav-emp.component';

describe('NavEmpComponent', () => {
  let component: NavEmpComponent;
  let fixture: ComponentFixture<NavEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
