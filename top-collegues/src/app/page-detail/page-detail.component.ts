import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  private pseudo:string;
  private collegue:Collegue;

  constructor(private route:ActivatedRoute, private router:Router, private location:Location, private cService:CollegueService) {
    this.collegue = new Collegue("", "", 0);
    route.params.subscribe(params => { this.pseudo = params['pseudo']; });
  }

  getCollegue() {
    this.cService.addCollegue(this.pseudo)
      .subscribe(
        collegue => this.collegue = collegue,
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.getCollegue();
  }

  historyBack(){
    this.location.back();
  }

  @Output() supp:EventEmitter<string> = new EventEmitter();

  jaime() {
    this.cService.aimerUnCollegue(this.collegue)
    .subscribe(
      collegue => this.collegue.score = collegue.score,
      error => console.log(error)
    );
  }

  jedeteste() {
    this.cService.detesterUnCollegue(this.collegue)
    .subscribe(
      collegue => this.collegue.score = collegue.score,
      error => console.log(error)
    );
  }
}
