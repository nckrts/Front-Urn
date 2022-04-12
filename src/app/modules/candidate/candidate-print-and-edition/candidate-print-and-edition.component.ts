import { Component, OnInit } from '@angular/core';
import {CandidateDatabase} from "../candidate.database.";
import {Router} from "@angular/router";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-candidate-print-and-edition',
  templateUrl: './candidate-print-and-edition.component.html',
  styleUrls: ['./candidate-print-and-edition.component.css']
})
export class CandidatePrintAndEditionComponent implements OnInit {

  public candidateList: object[] = [];
  displayedColumns = ['id', 'image','nome', 'partido' , 'numero' , 'votos', 'action'];

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
  ) {}

  ngOnInit(): void {
    this.candidateDatabase.deputadoEstadualList(response => {
      this.candidateList = response.data
    })
  }

}

