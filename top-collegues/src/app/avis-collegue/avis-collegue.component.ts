import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { Commentaire } from '../shared/domain/comment';

@Component({
  selector: 'app-avis-collegue',
  templateUrl: './avis-collegue.component.html',
  styleUrls: ['./avis-collegue.component.css']
})
export class AvisCollegueComponent implements OnInit {

  @Input() col:Collegue;
  private com:Commentaire = new Commentaire(0, "");
  private validMin:boolean = false;

  @Output() close:EventEmitter<string> = new EventEmitter();
  @Output() fermer:EventEmitter<string> = new EventEmitter();

  constructor(private cService:CollegueService) {}

  ngOnInit() {
    if(!this.col){
      this.col = new Collegue("", "", 0, [])
    }
    if(this.com.commentaire.length > 10){
      this.validMin = true;
    } 
    this.validMin = false;
  }

  enregistrer(){
    this.cService.commentaireUnCollegue(this.col, this.com.commentaire)
    .subscribe(
      collegue => this.col.commentaires = collegue.commentaires,
      error => console.log(error)
    );
    this.com.commentaire = "";
  }

  closer() {
    this.close.emit("close");
  }

  ferme() {
    this.fermer.emit("fermer");
  }
}
