import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisSiteComponent } from './avis-site.component';

describe('AvisSiteComponent', () => {
  let component: AvisSiteComponent;
  let fixture: ComponentFixture<AvisSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
