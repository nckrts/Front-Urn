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
  candidato: CandidateModel;

  constructor(
      private router: Router,
      private candidateDatabase: CandidateDatabase,
      private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.candidateDatabase.deputadoEstadualLer(Number(id)).subscribe(candidato => {
      this.candidato = candidato
    });
  }

  updatecandidato(){
this.candidateDatabase.deputadoEstadualUpgrade(this.candidato).subscribe(()=> {
  alert("Cadastro do candidato atualizado")
  this.router.navigate(['edicao'])
})
  }
  cancel(){
    this.router.navigate(['edicao'])
  }

}
