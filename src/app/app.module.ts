import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
=======
import { NgModule } from '@angular/core';
>>>>>>> bd62b35faee6c72a38a978e581360244e13a9d70

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
=======
    BrowserModule
>>>>>>> bd62b35faee6c72a38a978e581360244e13a9d70
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
