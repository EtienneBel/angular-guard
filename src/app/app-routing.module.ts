import { PageUnauthorizedComponent } from './views/page-unauthorized/page-unauthorized.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ProductsComponent } from './views/products/products.component';
import { AuthGuard } from './_guard/auth.guard';
import { RoleGuard } from './_guard/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'products', component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    canActivate: [RoleGuard],
    data: { role: 'ROLE_ADMIN' },
  },

  { path: 'unauthorized', component: PageUnauthorizedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
