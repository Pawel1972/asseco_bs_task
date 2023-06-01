import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTiledComponent } from './product-tiled.component';

describe('ProductTiledComponent', () => {
  let component: ProductTiledComponent;
  let fixture: ComponentFixture<ProductTiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTiledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
