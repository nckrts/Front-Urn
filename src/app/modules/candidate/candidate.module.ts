import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidateListComponent} from "./candidate-list/candidate-list.component";



@NgModule({
  declarations: [
      CandidateListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CandidateModule { }
