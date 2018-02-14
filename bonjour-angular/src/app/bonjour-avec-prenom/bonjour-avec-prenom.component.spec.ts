import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonjourAvecPrenomComponent } from './bonjour-avec-prenom.component';

describe('BonjourAvecPrenomComponent', () => {
  let component: BonjourAvecPrenomComponent;
  let fixture: ComponentFixture<BonjourAvecPrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonjourAvecPrenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonjourAvecPrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
