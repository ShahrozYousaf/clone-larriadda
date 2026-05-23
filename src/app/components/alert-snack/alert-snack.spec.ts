import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSnack } from './alert-snack';

describe('AlertSnack', () => {
  let component: AlertSnack;
  let fixture: ComponentFixture<AlertSnack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertSnack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertSnack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
