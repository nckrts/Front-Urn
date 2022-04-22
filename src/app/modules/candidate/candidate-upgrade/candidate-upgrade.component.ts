import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CandidateDatabase} from "../candidate.database.";
import {CandidateModel} from "../candidate.model";

@Component({
  selector: 'app-candidate-upgrade',
  templateUrl: './candidate-upgrade.component.html',
  styleUrls: ['./candidate-upgrade.component.css']
})
export class CandidateUpgradeComponent implements OnInit {
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


  updatecandidato(){
    this.editTheCandidate = localStorage.getItem("ED");
    if (this.editTheCandidate == null) {
      //volta a tela
    }
    if(this.editTheCandidate === 'estadual'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.deputadoEstadualUpgrade(this.candidato).subscribe(() => {
        alert("Cadastro do candidato atualizado")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'federal'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.deputadoFederalUpgrade(this.candidato).subscribe(() => {
        alert("Cadastro do candidato atualizado")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'senador'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.senadorUpgrade(this.candidato).subscribe(() => {
        alert("Cadastro do candidato atualizado")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'governador'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.governadorUpgrade(this.candidato).subscribe(() => {
        alert("Cadastro do candidato atualizado")
        return this.router.navigate(['/edicao'])
      })
    }

    if(this.editTheCandidate === 'presidente'){
      this.id= this.route.snapshot.paramMap.get('id')
      this.candidateDatabase.presidenteUpgrade(this.candidato).subscribe(() => {
        alert("Cadastro do candidato atualizado")
        return this.router.navigate(['/edicao'])
      })
    }

  }
  cancel(){
    this.router.navigate(['/edicao']);
  }

}
