import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

export abstract class ListCollegueComponent implements OnInit {

  private collegues:Collegue[] = [];
  private size:number;
  private sizeMax:number;
  private changePseudo:string = "";

  constructor(public cService:CollegueService) { 
    this.cService = cService;
    this.cService.testerService();
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.cService.listerCollegues()
      .subscribe(
        collegue => {
          this.collegues.push(collegue);
          this.sortList();
          this.sizeMax = this.collegues.length;
          this.size = this.sizeMax;
        },
        error => console.log(error),
    );
  }

  sortList() {
    this.collegues = this.collegues
    .sort((col1, col2) => col2.score - col1.score);
  }

  supp(pseudo:string) {
    this.cService.supprimer(pseudo)
    .subscribe(
        collegue => {
        this.collegues = this.collegues.filter(col => col.pseudo != collegue.pseudo);
      },
      error => console.log(error)
    );
  }
}
