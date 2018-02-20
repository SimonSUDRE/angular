import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierAvisComponent } from './dernier-avis.component';

describe('DernierAvisComponent', () => {
  let component: DernierAvisComponent;
  let fixture: ComponentFixture<DernierAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DernierAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DernierAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
