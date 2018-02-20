import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-dernier-avis',
  templateUrl: './dernier-avis.component.html',
  styleUrls: ['./dernier-avis.component.css']
})
export class DernierAvisComponent implements OnInit {

  private aime:boolean = false;
  private deteste:boolean = false;
  private aucun:boolean = true;
  private pseudo:string = ""; 

  constructor(private cService:CollegueService) { }

  ngOnInit() { 
    this.cService.collegueLDikeObs.subscribe(value => this.avis(value.collegue, value.scoreAction));
  }

  avis(collegue:Collegue, action:string){
    switch(action) {
      case "aimer":
        this.aime = true;
        this.deteste = false;
        this.aucun = false;
        this.pseudo = collegue.pseudo;
        break;
      case "detester":
        this.aime = false;
        this.deteste = true;
        this.aucun = false;
        this.pseudo = collegue.pseudo;
        break;
      default:
        this.aime = false;
        this.deteste = false;
        this.aucun = true;
        break;
    }
  }
}
