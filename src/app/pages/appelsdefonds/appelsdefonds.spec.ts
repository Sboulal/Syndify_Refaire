import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appelsdefonds } from './appelsdefonds';

describe('Appelsdefonds', () => {
  let component: Appelsdefonds;
  let fixture: ComponentFixture<Appelsdefonds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appelsdefonds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appelsdefonds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
