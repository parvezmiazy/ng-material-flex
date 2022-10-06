import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../crud/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  saveProduct(data: any) {
    return this.http.post<Product[]>(
      'http://localhost:3000/productList/',
      data
    );
  }

  getProduct() {
    return this.http.get<Product[]>('http://localhost:3000/productList/');
  }

  updateProduct(data: any, id: number) {
    return this.http.put<Product[]>(
      'http://localhost:3000/productList/' + id,
      data
    );
  }
  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/productList/' + id);
  }
}
