import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductsComponent } from './views/products/products.component';
import { AuthGuard } from './_guard/auth.guard';
import { PageUnauthorizedComponent } from './views/page-unauthorized/page-unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailComponent,
    PageUnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
