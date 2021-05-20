import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { FoodsComponent } from './components/foods/foods.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { ResturantsComponent } from './components/resturants/resturants.component';
import {LoginComponent} from './components/auth/login/login.component'
import { RegisterComponent } from './components/auth/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { ResturantDetailsComponent } from './components/resturant-details/resturant-details.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'drinks',component:DrinksComponent},
  {path:'foods',component:FoodsComponent},
  {path:'chefs',component:ChefsComponent},
  {path:'feedbacks',component:FeedbacksComponent},
  {path:'resturant',component:ResturantsComponent},
  {path:'resturant/:id',component:ResturantDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'pageNotFound',component:PageNotFoundComponent},
   {path:'resourceNotFound',component:ResourceNotFoundComponent},
   {path:'applicationError',component:ApplicationErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
