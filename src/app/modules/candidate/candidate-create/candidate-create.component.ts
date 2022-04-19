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
 recebeovalordoBd: string;
 public candidato: CandidateModel = {
    nome: '',
    partido: '',
    numero: ''
  }

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
  ) {}

  ngOnInit(): void {}

    criandocandidato(): void {
        // console.log(this.candidato)
        // console.log('opa')
        // this.candidateDatabase.deputadoEstadualCreate(this.candidato).subscribe(()=>{
        //     console.log('entrou')
        //     alert('Produto criado com sucesso!')

        //     this.router.navigate(['edicao'])
        // })
        if (localStorage.getItem("BD")) {
            this.recebeovalordoBd = JSON.parse(localStorage.getItem("BD"));
        }
        console.log(this.recebeovalordoBd);

        switch (this.recebeovalordoBd) {

            case '1': {
                this.candidateDatabase.deputadoEstadualCreate(this.candidato).subscribe(()=>{
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '2': {
                this.candidateDatabase.deputadoFederalCreate(this.candidato).subscribe(()=>{
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '3': {
                this.candidateDatabase.governadorCreate(this.candidato).subscribe(()=>{
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '4': {
                this.candidateDatabase.senadorCreate(this.candidato).subscribe(()=>{
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }

            case '5': {
                this.candidateDatabase.presidenteCreate(this.candidato).subscribe(()=>{
                    alert('Produto criado com sucesso!')
                    this.router.navigate(['edicao'])
                })
                break;
            }
        }
    }
 cancel(): void{
      this.router.navigate(['edicao'])
 }


}
