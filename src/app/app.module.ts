import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: NavBarComponent }];
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CoreModule,
    SharedModule,
    CrudModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
