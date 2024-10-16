import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaTableVetComponent } from './mascota-table-vet.component';

describe('MascotaTableVetComponent', () => {
  let component: MascotaTableVetComponent;
  let fixture: ComponentFixture<MascotaTableVetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaTableVetComponent]
    });
    fixture = TestBed.createComponent(MascotaTableVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
