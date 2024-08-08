import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/products-models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  getproducts(): Observable<IProducto[]> {
    return this._http.get<IProducto[]>(this.urlBase);
  }

  getProduct(id: number): Observable<IProducto> {
    return this._http.get<IProducto>(`${this.urlBase}/${id}`);
  }

  constructor() {}
}
