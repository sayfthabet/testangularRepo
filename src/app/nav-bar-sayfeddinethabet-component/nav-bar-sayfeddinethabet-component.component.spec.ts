import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSayfeddinethabetComponentComponent } from './nav-bar-sayfeddinethabet-component.component';

describe('NavBarSayfeddinethabetComponentComponent', () => {
  let component: NavBarSayfeddinethabetComponentComponent;
  let fixture: ComponentFixture<NavBarSayfeddinethabetComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarSayfeddinethabetComponentComponent]
    });
    fixture = TestBed.createComponent(NavBarSayfeddinethabetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
