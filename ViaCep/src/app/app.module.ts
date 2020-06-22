import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ViaCepComponent } from './via-cep/via-cep/via-cep.component';

@NgModule({
  declarations: [
    AppComponent,
    ViaCepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

