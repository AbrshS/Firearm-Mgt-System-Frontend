import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidenavComponent } from './profile-sidenav.component';

describe('ProfileSidenavComponent', () => {
  let component: ProfileSidenavComponent;
  let fixture: ComponentFixture<ProfileSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSidenavComponent]
    });
    fixture = TestBed.createComponent(ProfileSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
