import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisCollegueComponent } from './avis-collegue.component';

describe('AvisCollegueComponent', () => {
  let component: AvisCollegueComponent;
  let fixture: ComponentFixture<AvisCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
