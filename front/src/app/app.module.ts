import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayDishesComponent } from './display-dishes/display-dishes.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayDishesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
