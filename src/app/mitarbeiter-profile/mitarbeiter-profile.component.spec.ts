import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterProfileComponent } from './mitarbeiter-profile.component';

describe('MitarbeiterProfileComponent', () => {
  let component: MitarbeiterProfileComponent;
  let fixture: ComponentFixture<MitarbeiterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
