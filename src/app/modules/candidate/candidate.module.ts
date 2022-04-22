import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidateListComponent} from "./candidate-list/candidate-list.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { CandidatePrintAndEditionComponent } from './candidate-print-and-edition/candidate-print-and-edition.component';
import { CandidatePrintAndEdition2Component } from './candidate-print-and-edition2/candidate-print-and-edition2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CandidateCreateComponent } from './candidate-create/candidate-create.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { CandidateUpgradeComponent } from './candidate-upgrade/candidate-upgrade.component';
import { CandidateDeleteComponent } from './candidate-delete/candidate-delete.component';




@NgModule({
  declarations: [
      CandidateListComponent,
      CandidatePrintAndEditionComponent,
      CandidatePrintAndEdition2Component,
      CandidateCreateComponent,
      CandidateUpgradeComponent,
      CandidateDeleteComponent,

  ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ],
    providers: [
        CandidateListComponent
    ]
})
export class CandidateModule { }

