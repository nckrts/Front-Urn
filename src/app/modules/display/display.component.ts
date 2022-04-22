
import {Component, ElementRef, OnInit} from '@angular/core';
//import {AuthService} from "../services/auth.service";


import {CandidateDatabase} from "../candidate/candidate.database.";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

  export class DisplayComponent implements OnInit {

    keyboard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    getNumberOfCandidate: any = '';
    votesForcandidate: any = 0
    showInformations: boolean = false
    showNull: boolean = false
    whiteVote: boolean = false
    EndVote: boolean = false

    public position: string[] = ['DEPUTADO ESTADUAL', 'DEPUTADO FEDERAL', 'SENADOR', 'GOVERNADOR', 'PRESIDENTE'];
    public printNumberPosition: number[] = [5, 5, 3, 2, 2];

    public numberPosition: number = 0;
    public currentStage: number = 0;
    public candidato: object = [];
    public dom: HTMLElement;
    public actualSquare: NodeListOf<Element>;


    constructor(
        //public auth: AuthService,
        public elementRef: ElementRef,
        public candidateDatabase: CandidateDatabase,
    ) {
      this.dom = this.elementRef.nativeElement;
    }

    ngOnInit(): void {}

    listOfPresident(): void {
      this.candidateDatabase.numberofPresident(response => {
        this.candidato = response.data
        if (this.candidato['numero'] == 0) {
          this.showNull = true;
          this.candidato = {id: 31};
          this.showInformations = false;
        } else {
          this.showInformations = true;
          this.showNull = false;
        }
      })
    }

    listOfSenador() {
      this.candidateDatabase.senadorList(response => {
        this.candidato = response.data
        if (this.candidato['numero'] == 0) {
          this.showNull = true;
          this.candidato = {id: 31};
          this.showInformations = false;
        } else {
          this.showInformations = true;
          this.showNull = false;
        }
      })
    }

    listOfGovernador() {
      this.candidateDatabase.governadorList(response => {
        this.candidato = response.data
        if (this.candidato['numero'] == 0) {
          this.showNull = true;
          this.candidato = {id: 31};
          this.showInformations = false;
        } else {
          this.showInformations = true;
          this.showNull = false;
        }
      })
    }

    listOfstate() {
      this.candidateDatabase.deputadoEstadualList(response => {
        this.candidato = response.data
        if (this.candidato['numero'] == 0) {
          this.showNull = true;
          this.candidato = {id: 31};
          this.showInformations = false;
        } else {
          this.showInformations = true;
          this.showNull = false;
        }
      })
    }

    listOfFederal() {
      this.candidateDatabase.deputadoFederalList(response => {
        this.candidato = response.data
        if (this.candidato['numero'] == 0) {
          this.showNull = true;
          this.candidato = {id: 31};
          this.showInformations = false;
        } else {
          this.showInformations = true;
          this.showNull = false;
        }
      })
    }

  votespresident() {
      this.candidateDatabase.votesforpresidente(this.candidato['id']).subscribe(data => {
        this.votesForcandidate = data

      })

    }

    votesfederal() {
      this.candidateDatabase.votesforfederal(this.candidato['id']).subscribe(data => {
        this.votesForcandidate = data
      })
    }

    votesestadual() {
      this.candidateDatabase.votesforestadual(this.candidato['id']).subscribe(data => {
        this.votesForcandidate = data
      })
    }


    votessenador() {
      this.candidateDatabase.votesforsenador(this.candidato['id']).subscribe(data => {
        this.votesForcandidate = data
      })

    }

    votesgovernador() {
      this.candidateDatabase.votesforgovernador(this.candidato['id']).subscribe(data => {
        this.votesForcandidate = data
      })
    }

    insertNumber(keyboards) {

      this.actualSquare = this.dom.querySelectorAll('.square');

      if (this.numberPosition <= (this.printNumberPosition[this.currentStage] - 1)) {
        this.actualSquare[this.numberPosition].innerHTML = keyboards;

        this.actualSquare[this.numberPosition].classList.remove('focus');

        this.getNumberOfCandidate = this.getNumberOfCandidate + keyboards.toString()

        if (this.numberPosition < this.printNumberPosition[this.currentStage] - 1) {
          this.actualSquare[++this.numberPosition].classList.add('focus');

        } else {
          this.numberPosition++
        }
      }

      if (this.numberPosition == (this.printNumberPosition[this.currentStage])) {
        switch (this.currentStage) {
          case 0:
            this.listOfstate()
            break;
          case 1:
            this.listOfFederal()
            break;
          case 2:
            this.listOfSenador()
            break;
          case 3:
            this.listOfGovernador()
            break;
          case 4:
            this.listOfPresident()
            break;
        }
      }
    }


    updateDisplay() {
      this.showNull = false
      this.whiteVote = false
      this.showInformations = false
      this.getNumberOfCandidate = '';
      this.numberPosition = 0
      this.candidato = [];
      for (let square = 0; square < this.printNumberPosition[this.currentStage]; square++) {
        this.actualSquare[square].innerHTML = '';
      }

    }

    buttonwhite() {
      if (this.getNumberOfCandidate == '') {
        this.showInformations = false
        this.showNull = false
        this.whiteVote = true
        this.numberPosition = 0;
      }

    }

    buttoncorrection() {
      this.updateDisplay()
    }

    buttonconfirm() {
      let confirmVotes: boolean = false
      if (this.whiteVote === true) {
        switch (this.currentStage) {
          case 0:
            this.candidato = {id: 29}
            this.votesfederal()
            break;
          case 1:
            this.candidato = {id: 12}
            this.votesestadual()
            break;
          case 2:
            this.candidato = {id: 12}
            this.votessenador()
            break;
          case 3:
            this.candidato = {id: 11}
            this.votesgovernador()
            break;
          case 4:
            this.candidato = {id: 32}
            this.votespresident()
            break;
        }

        confirmVotes = true

      } else if (this.numberPosition == (this.printNumberPosition[this.currentStage])) {
        confirmVotes = true
        switch (this.currentStage) {
          case 0:
            this.votesfederal()
            break;
          case 1:
            this.votesestadual()
            break;
          case 2:
            this.votessenador()
            break;
          case 3:
            this.votesgovernador()
            break;
          case 4:
            this.votespresident()
            break;
        }

      }
      if (confirmVotes == true) {
        this.currentStage++
      }
      if (this.currentStage < 5) {
        this.updateDisplay()
      } else {
        this.whiteVote = false;
        this.EndVote = true
        this.showNull = false;
        this.showInformations = false

      }
    }

  }