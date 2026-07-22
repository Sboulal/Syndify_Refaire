import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsDepenses } from './budgets-depenses';

describe('BudgetsDepenses', () => {
  let component: BudgetsDepenses;
  let fixture: ComponentFixture<BudgetsDepenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsDepenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetsDepenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
