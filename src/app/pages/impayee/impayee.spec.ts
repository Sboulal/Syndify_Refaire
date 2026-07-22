import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impayee } from './impayee';

describe('Impayee', () => {
  let component: Impayee;
  let fixture: ComponentFixture<Impayee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impayee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impayee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
