import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router'
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  productsSubscription!: Subscription;
  product!: Product;

  constructor(
    private productsService: ProductsService,
    private activRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activRoute.params.subscribe(params=>{
      const productId = params['id'];
      this.productsSubscription = this.productsService.products$.subscribe(
        (data: Product[] ) => {
        
          if(data !== null)
          {
            const prods = data.filter(x => x.productId == productId);
            if(prods !== null)
            {
                this.product = prods[0];
            }
            else
            {
              notify("Wskazany produkt nie istnieje", "error", 3500);
            }
          }
        },
          (err) => {
            notify(err.message, "error", 3500);
          }
      );
    })
  }

  listaProduktow(): void {
    this.router.navigate(['/products']);
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
