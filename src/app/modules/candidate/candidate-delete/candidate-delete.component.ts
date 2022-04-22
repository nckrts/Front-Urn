import { Component, OnInit } from '@angular/core';
import {CandidateModel} from "../candidate.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CandidateDatabase} from "../candidate.database.";


@Component({
  selector: 'app-candidate-delete',
  templateUrl: './candidate-delete.component.html',
  styleUrls: ['./candidate-delete.component.css']
})
export class CandidateDeleteComponent implements OnInit {

  public editTheCandidate;
  public id;
  public candidato: CandidateModel = {
    nome: '',
    partido: '',
    numero: '',
    image: ''
  }

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
      private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.editTheCandidate = localStorage.getItem("ED");
    if (this.editTheCandidate == null) {
      //volta a tela
    }
    console.log(this.editTheCandidate);
    if(this.editTheCandidate === 'estadual'){
      const id = this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.deputadoEstadual(parseInt(id), res => {
        if (res.data) {
          this.candidato = res.data
          console.log(this.candidato)
        } else{
          console.log(res.error);
        }
      })
    }

    if(this.editTheCandidate === 'federal'){
      const id = this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.deputadoFederal(parseInt(id), res => {
        if (res.data) {
          this.candidato = res.data
          console.log(this.candidato)
        } else{
          console.log(res.error);
        }
      })
    }

    if(this.editTheCandidate === 'senador'){
      const id = this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.senador(parseInt(id), res => {
        if (res.data) {
          this.candidato = res.data
          console.log(this.candidato)
        } else{
          console.log(res.error);
        }
      })
    }

    if(this.editTheCandidate === 'governador'){
      const id = this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.governador(parseInt(id), res => {
        if (res.data) {
          this.candidato = res.data
          console.log(this.candidato)
        } else{
          console.log(res.error);
        }
      })
    }

    if(this.editTheCandidate === 'presidente'){
      const id = this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.presidente(parseInt(id), res => {
        if (res.data) {
          this.candidato = res.data
          console.log(this.candidato)
        } else{
          console.log(res.error);
        }
      })
    }
  }


  deletecandidato(): void{
    this.editTheCandidate = localStorage.getItem("ED");
    if (this.editTheCandidate == null) {
      //volta a tela
    }
    if(this.editTheCandidate === 'estadual'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.deputadoEstadualDelete(this.candidato.id).subscribe(() => {
        alert("Deletado com sucesso")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'federal'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.deputadoFederalDelete(this.candidato.id).subscribe(() => {
        alert("Deletado com sucesso")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'senador'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.senadorDelete(this.candidato.id).subscribe(() => {
        alert("Deletado com sucesso")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'governador'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.governadorDelete(this.candidato.id).subscribe(() => {
        alert("Deletado com sucesso")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'presidente'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.presidenteDelete(this.candidato.id).subscribe(() => {
        alert("Deletado com sucesso")
        return this.router.navigate(['/edicao'])
      })
    }
  }

  cancel(): void{
    this.router.navigate(['/edicao']);
  }

}
