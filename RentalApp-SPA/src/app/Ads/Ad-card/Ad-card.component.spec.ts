/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdCardComponent } from './Ad-card.component';

describe('AdCardComponent', () => {
  let component: AdCardComponent;
  let fixture: ComponentFixture<AdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
