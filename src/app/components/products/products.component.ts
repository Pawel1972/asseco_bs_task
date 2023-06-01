import { Component, OnInit } from '@angular/core';
import { ViewType } from '../../interfaces/view-type';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  viewType: ViewType = ViewType.List;
  enum: typeof ViewType = ViewType;

  constructor(
    private productsService: ProductsService
    ) { }

    ngOnInit(): void { 
      this.viewType = this.productsService.getViewType();
    }
  
    setListLayout(): void {
      this.viewType = ViewType.List;
      this.productsService.setViewType(this.viewType);
    }

    setTiledLayout(): void {
      this.viewType = ViewType.Tiled;
      this.productsService.setViewType(this.viewType);
    }
}
