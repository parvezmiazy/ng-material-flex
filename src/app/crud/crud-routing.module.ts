import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

export const components = [
  HomeComponent,
  SignupComponent
];

export const providers = [

];

const routes: Routes = [
	{
		path: 'list',
		component: HomeComponent,
	},
	{
		path: 'add',
		component: SignupComponent,
	},

	{ path: '', redirectTo: 'list', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CrudRoutingModule { }
