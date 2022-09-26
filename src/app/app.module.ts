import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
    

  ],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
