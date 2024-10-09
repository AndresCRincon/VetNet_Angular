import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaAddComponent } from './mascota-add.component';

describe('MascotaAddComponent', () => {
  let component: MascotaAddComponent;
  let fixture: ComponentFixture<MascotaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotaAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
