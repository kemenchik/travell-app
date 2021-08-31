import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbInputModule,
  NbLayoutModule,
  NbThemeModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {OffersComponent} from './offers/offers.component';
import {PricePipe} from "./shared/price.pipe";
import {DecimalPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbInputModule,
    NbButtonModule,
    FlexLayoutModule,
    NbDialogModule.forRoot(),
    NbCardModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
