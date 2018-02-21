import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avis } from '../shared/domain/avis';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  private historique:Avis[];

  constructor(private cService:CollegueService) { }

  ngOnInit() {
    this.updateHistory();
  }

  updateHistory() {
    this.cService.historiqueAvis('')
     .subscribe(
        avis => {
          if(avis) {
            this.historique = avis.reverse();
          } else {
            this.historique = new Array();
          }
        }
      );
  }

  supprimerHistorique(vote:Avis){
    this.cService.supprimerAvis(vote.id)
    .subscribe(() => this.updateHistory());
  }
}
