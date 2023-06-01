import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-product-tiled',
  templateUrl: './product-tiled.component.html',
  styleUrls: ['./product-tiled.component.scss']
})
export class ProductTiledComponent implements OnInit, OnDestroy {
  productsSubscription!: Subscription;
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) { }

    ngOnInit(): void { 
      this.getProducts();
    }
  
    private getProducts()
    {
      this.productsSubscription = this.productsService.products$.subscribe(
        (data: Product[] ) => {
        
          if(data !== null)
          {
            this.products = data;
          }
        },
          (err) => {
            notify(err.message, "error", 3500);
          }
      );
    }

    viewItem(productId: number): void {
      this.router.navigate(['/product-detail/' + productId]);
    }
  
    ngOnDestroy(): void {
      if(this.productsSubscription !== null)
      {
        this.productsSubscription.unsubscribe();
      }
    }

}
