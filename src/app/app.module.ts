import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CadastroraizComponent } from './cadastroraiz/cadastroraiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdicionarComponent } from './adicionar/adicionar.component';


import { FormsModule }  from  '@angular/forms';
import { MatFormFieldModule }  from  '@angular/material/form-field';
import { MatInputModule }  from  '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CadastroraizComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
