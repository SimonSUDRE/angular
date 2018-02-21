import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Commentaire } from '../shared/domain/comment';

export abstract class ListCollegueComponent implements OnInit {

  private collegues:Collegue[] = [];
  private size:number;
  private sizeMax:number;
  private changePseudo:string = "";
  private closeResult: string;
  private col:Collegue;

  constructor(public cService:CollegueService, public modalService:NgbModal) { 
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

  open(colModal) {
    this.modalService.open(colModal).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
