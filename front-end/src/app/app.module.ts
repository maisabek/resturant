import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { MaterialModule } from './shared/material/material.module';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { FoodsComponent } from './components/foods/foods.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ResturantsComponent } from './components/resturants/resturants.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { CarouselModule } from 'ngx-owl-carousel-o';
import {PopoverModule} from "ngx-smart-popover";
import { interceptors } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ResourceNotFoundComponent,
    ApplicationErrorComponent,
    CartComponent,
    MenuComponent,
    FoodsComponent,
    DrinksComponent,
    ChefsComponent,
    ResturantsComponent,
    FeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgwWowModule,
    NgxTypedJsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CarouselModule,
    PopoverModule
   ],
  providers: [interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
