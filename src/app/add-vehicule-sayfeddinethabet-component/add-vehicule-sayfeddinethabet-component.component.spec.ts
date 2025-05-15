import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiculeSayfeddinethabetComponentComponent } from './add-vehicule-sayfeddinethabet-component.component';

describe('AddVehiculeSayfeddinethabetComponentComponent', () => {
  let component: AddVehiculeSayfeddinethabetComponentComponent;
  let fixture: ComponentFixture<AddVehiculeSayfeddinethabetComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehiculeSayfeddinethabetComponentComponent]
    });
    fixture = TestBed.createComponent(AddVehiculeSayfeddinethabetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
