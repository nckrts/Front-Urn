import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {CandidateDatabase} from "../candidate.database.";
import {CandidateListComponent} from "../candidate-list/candidate-list.component";

@Component({
  selector: 'app-candidate-print-and-edition',
  templateUrl: './candidate-print-and-edition.component.html',
  styleUrls: ['./candidate-print-and-edition.component.css']
})
export class CandidatePrintAndEditionComponent implements OnInit {
  teste: string;

  public candidateList: object[] = [];
  displayedColumns = ['id', 'ocupacao', 'nome', 'partido', 'numero', 'votos', 'action'];

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
      private candidateListComponent: CandidateListComponent,
  ) {
  }

  ngOnInit(): void {

    // this.candidateDatabase.deputadoEstadualList(response => {
    //     this.candidateList = response.data
    // });
    // this.candidateDatabase.deputadoFederalList(response => {
    //     this.candidateList = this.candidateList + response.data
    // });
    //
    // this.candidateDatabase.deputadoEstadualList(response => {
    //   this.candidateList = response.data
    // })
    if (localStorage.getItem("BD")) {
      this.teste = JSON.parse(localStorage.getItem("BD"));
    }
    console.log(this.teste);

    switch (this.teste) {

      case '1': {
        this.candidateDatabase.deputadoEstadualList(response => {
          this.candidateList = response.data
        })
        break;
      }

      case '2': {
        this.candidateDatabase.deputadoFederalList(response => {
          this.candidateList = response.data
        })
        break;
      }

      case '3': {
        this.candidateDatabase.senadorList(response => {
          this.candidateList = response.data
        })
        break;
      }

      case '4': {
        this.candidateDatabase.governadorList(response => {
          this.candidateList = response.data
        })
        break;
      }

      case '5': {
        this.candidateDatabase.presidenteList(response => {
          this.candidateList = response.data
        })
        break;
      }
    }
  }
}
