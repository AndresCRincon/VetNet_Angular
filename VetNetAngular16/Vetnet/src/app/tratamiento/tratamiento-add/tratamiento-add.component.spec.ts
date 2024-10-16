import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoAddComponent } from './tratamiento-add.component';

describe('TratamientoAddComponent', () => {
  let component: TratamientoAddComponent;
  let fixture: ComponentFixture<TratamientoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoAddComponent]
    });
    fixture = TestBed.createComponent(TratamientoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
