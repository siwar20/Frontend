import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclothingComponent } from './productclothing.component';

describe('ProductclothingComponent', () => {
  let component: ProductclothingComponent;
  let fixture: ComponentFixture<ProductclothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductclothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
