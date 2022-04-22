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

 private recebeovalordoBd: string;

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
      this.recebeovalordoBd = localStorage.getItem("BD");
      console.log(this.recebeovalordoBd);
      if (this.recebeovalordoBd == null) {
          //volta a tela
      }
  }

    criandocandidato(): void {

        console.log(this.recebeovalordoBd);

        switch (this.recebeovalordoBd) {

            case '1': {
                this.candidateDatabase.deputadoEstadualCreate(this.candidato).subscribe(() => {
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '2': {
                this.candidateDatabase.deputadoFederalCreate(this.candidato).subscribe(() => {
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '3': {
                this.candidateDatabase.senadorCreate(this.candidato).subscribe(() => {
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '4': {
                this.candidateDatabase.governadorCreate(this.candidato).subscribe(() => {
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '5': {
                this.candidateDatabase.presidenteCreate(this.candidato).subscribe(() => {
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }
        }
    }

    cancel(): void {
            this.router.navigate(['edicao'])
        }
}
