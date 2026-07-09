import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoproDashboard } from './copro-dashboard';

describe('CoproDashboard', () => {
  let component: CoproDashboard;
  let fixture: ComponentFixture<CoproDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoproDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoproDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
