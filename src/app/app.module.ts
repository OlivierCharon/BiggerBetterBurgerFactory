import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BurgersComponent} from './burgers/burgers.component';
import {BurgerComponent} from './burger/burger.component';
import {AddBurgerComponent} from './add-burger/add-burger.component';
import {AddVeggieComponent} from './add-veggie/add-veggie.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { MenuComponent } from './menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    BurgerComponent,
    AddBurgerComponent,
    AddVeggieComponent,
    MenuComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
