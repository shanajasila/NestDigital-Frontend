import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorslogComponent } from './visitorslog.component';

describe('VisitorslogComponent', () => {
  let component: VisitorslogComponent;
  let fixture: ComponentFixture<VisitorslogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorslogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
