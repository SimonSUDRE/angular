import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  private pseudo:string;
  private collegue:Collegue;

  constructor(private route:ActivatedRoute, private router:Router, private cService:CollegueService) {
    this.collegue = new Collegue("", "", 0);
    route.params.subscribe(params => { this.pseudo = params['pseudo']; });
  }

  getCollegue() {
    this.cService.listerCollegues()
      .then(collegues => {
        this.collegue = collegues.filter(collegue => collegue.pseudo == this.pseudo)[0];
      });
  }

  ngOnInit() {
    this.getCollegue();
  }

  @Output() supp:EventEmitter<string> = new EventEmitter();
  @Output() change:EventEmitter<string> = new EventEmitter();

  jaime() {
    this.cService.aimerUnCollegue(this.collegue)
    .then(collegue => this.collegue.score = collegue.score);
    this.change.emit("aime");
  }

  jedeteste() {
    this.cService.detesterUnCollegue(this.collegue)
    .then(collegue => this.collegue.score = collegue.score);
    this.change.emit("deteste");
  }
}
