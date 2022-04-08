import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './modules/display/display.component';
import { CadastroraizComponent } from './modules/siteScreenPrincipal/cadastroraiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdicionarComponent } from './modules/modifyCandidate/adicionar.component';

import { FormsModule }  from  '@angular/forms';
import { MatFormFieldModule }  from  '@angular/material/form-field';
import { MatInputModule }  from  '@angular/material/input';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { ResultVoteComponent } from './modules/result-vote/result-vote.component';
import {CandidateModule} from "./modules/candidate/candidate.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    CadastroraizComponent,
    DisplayComponent,
    UserProfileComponent,
    ResultVoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CoreModule,
    CandidateModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
