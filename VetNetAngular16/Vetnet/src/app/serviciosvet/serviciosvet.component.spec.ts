import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosvetComponent } from './serviciosvet.component';

describe('ServiciosvetComponent', () => {
  let component: ServiciosvetComponent;
  let fixture: ComponentFixture<ServiciosvetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosvetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
