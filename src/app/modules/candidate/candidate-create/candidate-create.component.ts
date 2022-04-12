import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CandidateDatabase} from "../candidate.database.";
import {CandidateModel} from "../candidate.model";

@Component({
  selector: 'app-candidate-create',
  templateUrl: './candidate-create.component.html',
  styleUrls: ['./candidate-create.component.css']
})
export class CandidateCreateComponent implements OnInit {

 public candidato: CandidateModel = {
    nome: '',
    partido: '',
    numero: '',
    image: ''
  }

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
  ) {}

  ngOnInit(): void {
  }

 criandocandidato(): void {
    this.candidateDatabase.deputadoEstadualCreate(this.candidato).subscribe(()=>{
      alert('Produto criado com sucesso!')
        this.router.navigate(['edicao'])
    })
 }
 cancel(): void{
      this.router.navigate(['edicao'])
 }
}
