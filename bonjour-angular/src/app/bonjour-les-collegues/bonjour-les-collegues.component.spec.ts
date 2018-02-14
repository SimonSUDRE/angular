import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonjourLesColleguesComponent } from './bonjour-les-collegues.component';

describe('BonjourLesColleguesComponent', () => {
  let component: BonjourLesColleguesComponent;
  let fixture: ComponentFixture<BonjourLesColleguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonjourLesColleguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonjourLesColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
