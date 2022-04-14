import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']

})

export class DisplayComponent implements OnInit {

  public recebeAsOcupacaoe: object = ['DEPESTADUAL','DEPFEDERAL','GOVERNADOR','SENADOR','PRESIDENTE']


  constructor() { }

  ngOnInit(): void {
  }

}
