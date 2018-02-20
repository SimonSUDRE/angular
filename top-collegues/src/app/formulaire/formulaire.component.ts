import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  private savePseudo:string;
  private affiche:boolean = false;
  private warning:boolean = false;
  private erreur:boolean = false;
  private offLine:boolean = false;

  @Output() ajout:EventEmitter<Collegue> = new EventEmitter();

  constructor(private cService:CollegueService){}

  ngOnInit() {
    this.cService.collegueLigneObs
    .subscribe(value => this.offLine = value);
  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
    if(pseudo.value != "" && imageUrl.value != "") {
      this.savePseudo = pseudo.value;
      this.cService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 0))
      .subscribe(
        collegue => {
          if(collegue != null){
            pseudo.value = "";
            imageUrl.value = "";
            this.affiche = true;
            this.erreur = false;
            this.warning = false;
          } else {
            this.erreur = true;
            this.warning = false;
            this.affiche = false;
          }
        }
    );
    } else {
      this.erreur = false;
      this.warning = true;
      this.affiche = false;
    }
  }
}
