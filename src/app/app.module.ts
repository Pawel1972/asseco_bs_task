import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxDataGridModule, DxTemplateModule, DxToastModule, DxButtonModule, DxTileViewModule, DxSelectBoxModule } from 'devextreme-angular';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { TruncatePipe } from './pipes/truncate';
import { CustomCurrencyPipe } from './pipes/custome-currency';
import { ProductTiledComponent } from './components/product-tiled/product-tiled.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    ProductsComponent,
    TruncatePipe,
    CustomCurrencyPipe,
    ProductTiledComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
    DxToastModule,
    DxTileViewModule,
    DxSelectBoxModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
