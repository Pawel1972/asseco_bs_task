import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, shareReplay } from 'rxjs';
import { Product } from '../interfaces/product';
import { ViewType } from '../interfaces/view-type';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://wpmyaccountapi.assecobs.pl/api/products';
  
  constructor(private http: HttpClient) { }

  private viewType: ViewType = ViewType.List;

  public getViewType(): ViewType {
    return this.viewType;
  }

  public setViewType(type: ViewType): void {
    this.viewType = type;
  }

  public products$ = this.http.get<Product[]>(this.url).pipe(
    map((value: Product[]) => {
      return value;
    }),
    shareReplay(1),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = error.status !== 0 ? error.statusText : "Nieznany błąd pobierania danych";
    return throwError(() => new Error(message)); 
  }

}
