import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsecurityComponent } from './navsecurity.component';

describe('NavsecurityComponent', () => {
  let component: NavsecurityComponent;
  let fixture: ComponentFixture<NavsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
