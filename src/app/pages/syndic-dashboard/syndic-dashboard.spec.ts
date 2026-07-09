import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndicDashboard } from './syndic-dashboard';

describe('SyndicDashboard', () => {
  let component: SyndicDashboard;
  let fixture: ComponentFixture<SyndicDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyndicDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyndicDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
