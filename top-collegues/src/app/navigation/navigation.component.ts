import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() limite:EventEmitter<number> = new EventEmitter();
  @Output() changeP:EventEmitter<string> = new EventEmitter();
  @Input() tailleMax:number;

  constructor() { }

  ngOnInit() { }

  setLimite(lim:HTMLInputElement) {
    if(lim.valueAsNumber >= 0)
      this.limite.emit(lim.valueAsNumber);
    else {
      this.limite.emit(this.tailleMax);
    }
  }

  searchPseudo(cPseudo:HTMLInputElement){
    this.changeP.emit(cPseudo.value);
  }
}
