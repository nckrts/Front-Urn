import { Component, OnInit } from '@angular/core';
import {CandidateDatabase} from "../candidate.database.";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  public candidateList: object[] = [];

  constructor(
      private candidateDatabase: CandidateDatabase
  ) { }

  ngOnInit(): void {




  }

  getList(type): void {

    if (type == '1') {
      this.candidateDatabase.deputadoEstadualList((response) => {
          if (response.data) {
            console.log(response.data);
            this.candidateList = response.data;
          } else {
            this.candidateList = [];
            alert('deu ruim');
          }
        })
    }
    if (type == '2') {
      this.candidateDatabase.deputadoEstadualList((response) => {
        if (response.data) {
          console.log(response.data);
          this.candidateList = response.data;
        } else {
          this.candidateList = [];
          alert('deu ruim');
        }
      })
    }
    if (type == '3') {
      this.candidateDatabase.deputadoEstadualList((response) => {
        if (response.data) {
          console.log(response.data);
          this.candidateList = response.data;
        } else {
          this.candidateList = [];
          alert('deu ruim');
        }
      })
    }

  }



}