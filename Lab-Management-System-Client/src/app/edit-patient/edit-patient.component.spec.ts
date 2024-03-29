import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientComponent } from './edit-patient.component';

describe('EditPatientComponent', () => {
  let component: EditPatientComponent;
  let fixture: ComponentFixture<EditPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPatientComponent],
    });
    fixture = TestBed.createComponent(EditPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
