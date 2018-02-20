import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {

  private offLine:boolean;

  constructor(private cService:CollegueService) {
    this.offLine = false;
  }

  ngOnInit() {
    this.cService.collegueLigneObs
    .subscribe(value => this.offLine = value);
  }
}
