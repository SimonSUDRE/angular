import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-bonjour-les-collegues',
  templateUrl: './bonjour-les-collegues.component.html',
  styleUrls: ['./bonjour-les-collegues.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BonjourLesColleguesComponent implements OnInit {

  collegues:string[];

  constructor() {
    this.collegues = ['Yves', 'Landry', 'Bob'];
  }

  ngOnInit() {}
}
