import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAddComponent } from './vet-add.component';

describe('VetAddComponent', () => {
  let component: VetAddComponent;
  let fixture: ComponentFixture<VetAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetAddComponent]
    });
    fixture = TestBed.createComponent(VetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
