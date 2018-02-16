import { Component } from '@angular/core';
import { ListCollegueComponent } from '../list-collegue/list-collegue.component';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends ListCollegueComponent {
  
  constructor(public cService:CollegueService){
    super(cService);
  }
}
