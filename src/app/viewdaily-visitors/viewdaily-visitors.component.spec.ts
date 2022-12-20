import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdailyVisitorsComponent } from './viewdaily-visitors.component';

describe('ViewdailyVisitorsComponent', () => {
  let component: ViewdailyVisitorsComponent;
  let fixture: ComponentFixture<ViewdailyVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdailyVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdailyVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
