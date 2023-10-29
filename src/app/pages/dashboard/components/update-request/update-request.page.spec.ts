import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateRequestPage } from './update-request.page';

describe('UpdateRequestPage', () => {
  let component: UpdateRequestPage;
  let fixture: ComponentFixture<UpdateRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
