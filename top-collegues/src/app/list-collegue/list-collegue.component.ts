import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

export abstract class ListCollegueComponent implements OnInit {

  private collegues:Collegue[];
  private size:number;
  private sizeMax:number;
  private changePseudo:string = "";

  constructor(public cService:CollegueService) { 
    this.cService = cService;
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.cService.listerCollegues()
      .then(collegues => {
        this.collegues = collegues;
        this.sortList();
        this.sizeMax = this.collegues.length;
        this.size = this.sizeMax;
      });
  }

  sortList() {
    this.collegues = this.collegues
    .sort((col1, col2) => col2.score - col1.score);
  }

  addList(collegue:Collegue){
    this.collegues.push(collegue);
    this.sortList()
  }

  supp(pseudo:string) {
    this.cService.supprimer(pseudo)
    .then(collegue => {
      this.collegues = this.collegues.filter(col => col.pseudo != collegue.pseudo);
      this.sortList();
    });
  }
}
