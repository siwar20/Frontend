import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionEtBeautyComponent } from './fashion-et-beauty.component';

describe('FashionEtBeautyComponent', () => {
  let component: FashionEtBeautyComponent;
  let fixture: ComponentFixture<FashionEtBeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionEtBeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionEtBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
