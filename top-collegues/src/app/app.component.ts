import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private collegues:Collegue[];
  private savePseudo:string;
  private affiche:boolean = false;
  private warning:boolean = false;
  private erreur:boolean = false;

  constructor(private cService:CollegueService){}

  ngOnInit() {
    this.list();
  }

  list() {
    this.cService.listerCollegues()
      .then(collegues => {
        this.collegues = collegues;
        this.sortList();
      });
  }

  sortList(){
    this.collegues = this.collegues
    .sort((col1, col2) => col2.score - col1.score);
  }

  supp(pseudo:string) {
    this.cService.supprimer(pseudo)
    .then(collegue => {
      this.collegues = this.collegues.filter(col => col.pseudo != collegue.pseudo);
      this.sortList();
    });
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value != "" && imageUrl.value != "") {
      this.savePseudo = pseudo.value;
      this.cService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 0))
      .then(collegue => {
          this.collegues.push(collegue);
          pseudo.value = "";
          imageUrl.value = "";
          this.affiche = true;
          this.erreur = false;
          this.warning = false;
          this.sortList();
          //this.list();
      })
      .catch(error => {
        this.erreur = true;
        this.warning = false;
        this.affiche = false;
      });
    } else {
      this.erreur = false;
      this.warning = true;
      this.affiche = false;
    }
  }
}
