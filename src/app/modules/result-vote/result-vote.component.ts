import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CandidateDatabase} from "../candidate/candidate.database.";

@Component({
  selector: 'app-result-vote',
  templateUrl: './result-vote.component.html',
  styleUrls: ['./result-vote.component.css']
})

export class ResultVoteComponent implements OnInit {

  public candidateList: object[] = [];
  displayedColumns = ['id', 'ocupacao', 'nome', 'partido' , 'numero' , 'votos'];

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,

  ) {}


  ngOnInit(): void {
    this.candidateDatabase.deputadoEstadualList(response => {
      this.candidateList = response.data
    });

  //   this.candidateDatabase.deputadoFederalList(response => {
  //     this.candidateList = response.data
  //   })
   }

}
