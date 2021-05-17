import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfoodComponent } from './productfood.component';

describe('ProductfoodComponent', () => {
  let component: ProductfoodComponent;
  let fixture: ComponentFixture<ProductfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
