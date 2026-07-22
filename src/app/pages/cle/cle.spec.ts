import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cle } from './cle';

describe('Cle', () => {
  let component: Cle;
  let fixture: ComponentFixture<Cle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
