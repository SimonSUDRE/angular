import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ContentChild } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: '[app-un-collegue]',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @ContentChild(TemplateRef)
  private template: TemplateRef<any>;

  @Input("cardTemplate")
  private cardTemplate:boolean;

  @Input("tableTemplate")
  private tableTemplate:boolean;

  @Input("carouselTemplate")
  private carouselTemplate:boolean;

  @Input() collegue:Collegue;
  @Output() supp:EventEmitter<string> = new EventEmitter();
  @Output() change:EventEmitter<string> = new EventEmitter();

  constructor(private cService:CollegueService) {}

  ngOnInit() {}

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

  supprimer(){
    this.supp.emit(this.collegue.pseudo);
  }
}
