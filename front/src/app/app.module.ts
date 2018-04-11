import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppComponent } from './app.component';
import { DisplayDishesComponent } from './display-dishes/display-dishes.component';
import { RouterModule, Routes } from '@angular/router';
import { DishesService } from './services/dishes.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: DisplayDishesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayDishesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    InfiniteScrollModule
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
