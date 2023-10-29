import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchRequestPage } from './search-request.page';

describe('SearchRequestPage', () => {
  let component: SearchRequestPage;
  let fixture: ComponentFixture<SearchRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
