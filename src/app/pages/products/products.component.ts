import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/products-models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: IProducto[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router)

  ngOnInit(): void {
    this._apiService.getproducts().subscribe((data: IProducto[]) => {
      //  console.log(data);
       this.productList = data;
    });
  }
  navegate(id:number){
    // console.log(id);
   this._router.navigate(['/products',id])

  }
}
