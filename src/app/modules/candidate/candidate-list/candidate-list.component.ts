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

  }

// verificationOnInser():void {
//   switch(this.recebeOclic)
// {
// case'1':
//
// }
// }
}
//   clicou1(){
//     this.recebeOclic = 1
//     return this.recebeOclic
//
//   }
//   clicou2(){
//     this.recebeOclic = 2
//     return (this.recebeOclic)
//   }
//   clicou3(){
//     this.recebeOclic = 3
//     return (this.recebeOclic)
//   }
//   clicou4(){
//     this.recebeOclic = 4
//     return (this.recebeOclic)
//   }
//   clicou5(){
//     this.recebeOclic = 5
//     return (this.recebeOclic)
//   }
//   chamarlistadodeputadoestadual(){
//    // this.candidateDatabase.deputadoEstadualList()
//
//   }
// }
   //     (response) => {
   //           if (response.data) {
   //             console.log(response.data);
   //             this.candidateList = response.data;
   //           } else {
   //             this.candidateList = [];
   //             alert('deu ruim');
   //               console.log(response.data);
   //                  }
   //
   // })
   // }
//}
  //getList(type): void {
  //
  //   if (type == '1') {
  //     this.candidateDatabase.deputadoEstadualList((response) => {
  //       if (response.data) {
  //         console.log(response.data);
  //         this.candidateList = response.data;
  //       } else {
  //         this.candidateList = [];
  //         alert('deu ruim');
  //       }
  //     })
  //   }
  //   if (type == '2') {
  //     this.candidateDatabase.deputadoEstadualList((response) => {
  //       if (response.data) {
  //         console.log(response.data);
  //         this.candidateList = response.data;
  //       } else {
  //         this.candidateList = [];
  //         alert('deu ruim');
  //       }
  //     })
  //   }
  //   if (type == '3') {
  //     this.candidateDatabase.deputadoEstadualList((response) => {
  //       if (response.data) {
  //         console.log(response.data);
  //         this.candidateList = response.data;
  //       } else {
  //         this.candidateList = [];
  //         alert('deu ruim');
  //       }
  //     })
  //   }
  //
  // }
