import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ramadanbooking } from './ramadanbooking';

describe('Ramadanbooking', () => {
  let component: Ramadanbooking;
  let fixture: ComponentFixture<Ramadanbooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ramadanbooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ramadanbooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
