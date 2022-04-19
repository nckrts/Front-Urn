import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CandidateDatabase} from "../candidate/candidate.database.";
import {CandidateModel} from "../candidate/candidate.model";

@Component({
  selector: 'app-result-vote',
  templateUrl: './result-vote.component.html',
  styleUrls: ['./result-vote.component.css']
})

export class ResultVoteComponent implements OnInit {
  public candidato: CandidateModel = {
    nome: '',
    partido: '',
    numero: '',
    image: ''
  }
  public candidateList: object[];
  public deputadofedList: object[];
  public governadorList: object[];
  public senadorList: object[];
  public presidenteList: object[];


  displayedColumns = ['id', 'ocupacao', 'nome', 'partido' , 'numero' , 'votos'];

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,

  ) {}


  ngOnInit(): void {
    this.candidateDatabase.deputadoEstadualList(response => {
      this.candidateList = response.data
    });
    this.candidateDatabase.deputadoFederalList(response => {
      this.deputadofedList = response.data
    });
    this.candidateDatabase.senadorList(response => {
      this.senadorList = response.data
    });
    this.candidateDatabase.governadorList(response => {
      this.governadorList = response.data
    });
    this.candidateDatabase.presidenteList(response => {
      this.presidenteList = response.data
    });
   }

}
