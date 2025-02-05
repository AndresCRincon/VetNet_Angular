import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaTableComponent } from './mascota-table.component';

describe('MascotaTableComponent', () => {
  let component: MascotaTableComponent;
  let fixture: ComponentFixture<MascotaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
