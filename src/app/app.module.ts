import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { SpacetvComponent } from './spacetv/spacetv.component';
import { MissionsComponent } from './missions/missions.component';
import { EarthComponent } from './earth/earth.component';
import { AboutComponent } from './about/about.component';
import { TestingComponent } from './testing/testing.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { combineLatest } from 'rxjs';
import { KidsComponent } from './kids/kids.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PremiumComponent } from './premium/premium.component';
import { ShirtdetailsComponent } from './shirtdetails/shirtdetails.component';


const routes:Routes = [
  {path: '',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'login',component:LoginComponent},
  {path:'shop',component:ShopComponent},
  {path:'home',component:HomeComponent},
  {path:'galleries',component:GalleriesComponent},
  {path:'spacetv',component:SpacetvComponent},
  {path:'missions',component:MissionsComponent},
  {path:'earth',component:EarthComponent},
  {path:'about',component:AboutComponent},
  {path:'mens',component:MensComponent},
  {path:'womens',component:WomensComponent},
  {path:'kids',component:KidsComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'premium',component:PremiumComponent},
  {path:'shirtdetails',component:ShirtdetailsComponent},
  {path:'testing',component:TestingComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    HomeComponent,
    ShopComponent,
    GalleriesComponent,
    SpacetvComponent,
    MissionsComponent,
    EarthComponent,
    AboutComponent,
    TestingComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    AccessoriesComponent,
    PremiumComponent,
    ShirtdetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
