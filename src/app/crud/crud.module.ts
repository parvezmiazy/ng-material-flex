import { NgModule } from '@angular/core';
import { components, CrudRoutingModule, providers } from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [components],
  imports: [
    SharedModule,
    CrudRoutingModule
  ],
  providers: [providers],
})
export class CrudModule { }
