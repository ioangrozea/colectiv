import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMitarbeiterComponent } from './edit-mitarbeiter.component';

describe('EditMitarbeiterComponent', () => {
  let component: EditMitarbeiterComponent;
  let fixture: ComponentFixture<EditMitarbeiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMitarbeiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMitarbeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
