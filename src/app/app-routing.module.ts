import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
{path:'', component:WelcomeComponent},
{path:'sample', component:WelcomeComponent},
{path:'ecommerce',component:EcommerceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
