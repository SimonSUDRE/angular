import { Component } from '@angular/core';
import { ListCollegueComponent } from '../list-collegue/list-collegue.component';
import { CollegueService } from '../shared/service/collegue.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends ListCollegueComponent {
  
  constructor(public cService:CollegueService, public modalService:NgbModal){
    super(cService, modalService);
  }
}
