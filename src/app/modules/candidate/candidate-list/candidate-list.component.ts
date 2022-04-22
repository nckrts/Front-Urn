import { Component, OnInit } from '@angular/core';
import {CandidateDatabase} from "../candidate.database.";
import {Router} from "@angular/router";



@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  public recebeOclic: string = '';
  public candidateList: object[] = [];

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
  ) {
  }

  ngOnInit(): void {
  }


  setDisplayInser(value: string): void {
    this.recebeOclic = value;
    localStorage.setItem("BD", this.recebeOclic);
  }




}
