/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViaCepComponent } from './via-cep.component';

describe('ViaCepComponent', () => {
  let component: ViaCepComponent;
  let fixture: ComponentFixture<ViaCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
