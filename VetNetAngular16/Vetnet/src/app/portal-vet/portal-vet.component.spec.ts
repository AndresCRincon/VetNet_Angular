import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalVetComponent } from './portal-vet.component';

describe('PortalVetComponent', () => {
  let component: PortalVetComponent;
  let fixture: ComponentFixture<PortalVetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalVetComponent]
    });
    fixture = TestBed.createComponent(PortalVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
