import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddProductComponent } from './crud/add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { Product } from './crud/product';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = [
    'name',
    'category',
    'price',
    'date',
    'freshness',
    'comment',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getProduct();
  }
  open(): void {
    this.dialog.open(AddProductComponent, {
      width: '30%',
    });
  }

  getProduct() {
    this.apiService.getProduct().subscribe((data: Product[]) => {
      //this.products = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value.trim();
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editProduct(row: any): void {
    this.dialog.open(AddProductComponent, {
      width: '30%',
      data: row,
    });
  }

  deleteProduct() {}
}
