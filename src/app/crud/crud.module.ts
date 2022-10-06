import { NgModule } from '@angular/core';
import {
  components,
  CrudRoutingModule,
  providers,
} from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [components],
  imports: [SharedModule, CrudRoutingModule],
  exports: [AddProductComponent],
  providers: [providers],
})
export class CrudModule {}
