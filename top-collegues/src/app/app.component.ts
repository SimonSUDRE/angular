import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public collegues:Collegue[];
  public affiche:boolean = false;
  public savePseudo:string;

  ngOnInit() {
    this.collegues = [
      new Collegue("Aline", 'assets/images/aline.jpg', 100),
      new Collegue("Hugues", 'assets/images/hugues.jpg', 100),
      new Collegue("Paul", 'assets/images/paul.jpg', 20),
      new Collegue("Justine", 'assets/images/justine.jpg', 20),
      new Collegue("Jaques", 'assets/images/jaques.jpg', 10)
    ]
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 0));
    this.savePseudo = pseudo.value;
    pseudo.value = "";
    imageUrl.value = "";
    this.affiche = true;
    return false;
  }
}
