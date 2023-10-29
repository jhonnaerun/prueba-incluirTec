import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaterRequestPage } from './creater-request.page';

describe('CreaterRequestPage', () => {
  let component: CreaterRequestPage;
  let fixture: ComponentFixture<CreaterRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreaterRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
