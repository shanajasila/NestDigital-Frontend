import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsviewComponent } from './visitorsview.component';

describe('VisitorsviewComponent', () => {
  let component: VisitorsviewComponent;
  let fixture: ComponentFixture<VisitorsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
