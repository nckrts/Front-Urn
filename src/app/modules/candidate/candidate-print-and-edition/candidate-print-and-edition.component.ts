import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {CandidateDatabase} from "../candidate.database.";
import {CandidateListComponent} from "../candidate-list/candidate-list.component";

@Component({
  selector: 'app-candidate-print-and-edition',
  templateUrl: './candidate-print-and-edition.component.html',
  styleUrls: ['./candidate-print-and-edition.component.css']
})
export class CandidatePrintAndEditionComponent implements OnInit {

  public candidateList: object[] = [];
  displayedColumns = ['id', 'ocupacao','nome', 'partido' , 'numero' , 'votos', 'action'];

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
      private candidateListComponent: CandidateListComponent,
  ) {}

  ngOnInit(): void {
    // this.candidateDatabase.deputadoEstadualList(response => {
    //   this.candidateList = response.data
    // })
      console.log(this.candidateListComponent.recebeOclic)
   switch (this.candidateListComponent.recebeOclic){

     case 1:{
        //this.candidateListComponent.recebeOclic = 0;
        //  this.candidateDatabase.deputadoEstadualList(response => {
        //    this.candidateList = response.data
     // })
         return console.log("entrou aki")

        break;
     }

     case 2:{
         this.candidateListComponent.recebeOclic = 0;
       this.candidateDatabase.deputadoFederalList(response => {
         this.candidateList = response.data
       })
       break;
     }
   }
  }
}

