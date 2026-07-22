import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoproListes } from './copro-listes';

describe('CoproListes', () => {
  let component: CoproListes;
  let fixture: ComponentFixture<CoproListes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoproListes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoproListes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
