import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidateListComponent} from "./candidate-list/candidate-list.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
      CandidateListComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
    ]
})
export class CandidateModule { }
