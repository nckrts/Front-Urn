import { Component, OnInit } from '@angular/core';
import { OptionsModifyService } from 'src/app/modules/modifyCandidate/options-modify.service';
@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor(private OptionsModifyService: OptionsModifyService) { }



 obterTodosCandidatosDepEstadual(){}


  ngOnInit(): void {
  }

}
