import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  actionBtn: string = 'Save';
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  productForm!: FormGroup;

  list = ['A', 'B', 'C'];
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      comment: ['', Validators.required],
    });

    if (this.editData) {
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['comment'].setValue(this.editData.comment);

      this.actionBtn = 'Update';
    }
  }

  addProduct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.apiService.saveProduct(this.productForm.value).subscribe(
          (res) => {
            //console.log(res);
            // alert('Product Added Successfull');
            this.dialogRef.close('save');
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        console.log('data is not valid');
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.apiService
      .updateProduct(this.productForm.value, this.editData.id)
      .subscribe(
        (res) => {
          //console.log(res);
          //alert('Product Updated Successfull');
          this.productForm.reset(), this.dialogRef.close('update');
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
