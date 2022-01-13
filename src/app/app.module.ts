import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandDirective } from './expand.directive';
import { BackgroundComponent } from './background/background.component';
import { TeslaLogComponent } from './tesla-log/tesla-log.component';
import { CarComponent } from './car/car.component';
import { ShowCarsColorsButtonComponent } from './show-cars-colors-button/show-cars-colors-button.component';
import { ShowGalleryComponent } from './show-gallery/show-gallery.component';




@NgModule({
  declarations: [
    AppComponent,
    ExpandDirective,
    BackgroundComponent,
    TeslaLogComponent,
    CarComponent,
    ShowCarsColorsButtonComponent,
    ShowGalleryComponent,

  ],
    

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
