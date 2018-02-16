import { Component } from '@angular/core';
import { ListCollegueComponent } from '../list-collegue/list-collegue.component';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends ListCollegueComponent {

  constructor(public cService:CollegueService){
    super(cService);
  }
}
