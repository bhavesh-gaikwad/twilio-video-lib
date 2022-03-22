import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleMdTwilioVideoModule } from 'projects/module-md-twilio-video/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleMdTwilioVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
