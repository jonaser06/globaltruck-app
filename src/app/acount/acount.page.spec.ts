import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountPage } from './acount.page';

describe('AcountPage', () => {
  let component: AcountPage;
  let fixture: ComponentFixture<AcountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
