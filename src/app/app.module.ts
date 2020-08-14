import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { FormComponent } from './form/form.component';

import { CommonModule } from '@angular/common';


@NgModule({
  imports:      [ 
    BrowserModule,
    ReactiveFormsModule , 
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(
      [
        {path:'',component:FormComponent}
      ])
    ],
  declarations: [ AppComponent, HeaderComponent, ResultsComponent, FormComponent],
  bootstrap:    [ AppComponent ],
  entryComponents : [FormComponent]
})
export class AppModule { }
