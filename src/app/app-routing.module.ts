import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'Products', component: ProductsListComponent},
  {path: '**',redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
