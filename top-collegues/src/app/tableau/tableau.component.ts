import { Component } from '@angular/core';
import { ListCollegueComponent } from '../list-collegue/list-collegue.component';
import { CollegueService } from '../shared/service/collegue.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends ListCollegueComponent {

  constructor(public cService:CollegueService, public modalService:NgbModal){
    super(cService, modalService);
  }
}
