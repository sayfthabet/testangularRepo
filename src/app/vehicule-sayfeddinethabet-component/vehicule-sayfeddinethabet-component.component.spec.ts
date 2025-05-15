import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeSayfeddinethabetComponentComponent } from './vehicule-sayfeddinethabet-component.component';

describe('VehiculeSayfeddinethabetComponentComponent', () => {
  let component: VehiculeSayfeddinethabetComponentComponent;
  let fixture: ComponentFixture<VehiculeSayfeddinethabetComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculeSayfeddinethabetComponentComponent]
    });
    fixture = TestBed.createComponent(VehiculeSayfeddinethabetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
