import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SincronizedRequestPage } from './sincronized-request.page';

describe('SincronizedRequestPage', () => {
  let component: SincronizedRequestPage;
  let fixture: ComponentFixture<SincronizedRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SincronizedRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
