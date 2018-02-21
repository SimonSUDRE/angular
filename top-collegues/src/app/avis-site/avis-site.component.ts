import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-avis-site',
  templateUrl: './avis-site.component.html',
  styleUrls: ['./avis-site.component.css']
})
export class AvisSiteComponent implements OnInit {

  @Output() close:EventEmitter<string> = new EventEmitter();
  @Output() fermer:EventEmitter<string> = new EventEmitter();

  private monForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.monForm = this.fb.group({
      saisie1: ['', Validators.required ],
      saisie2: ['', Validators.compose([
                      Validators.required,
                      Validators.minLength(20),
                      Validators.maxLength(255)
                    ])
                ]
    });
  }

  ngOnInit() { }

  closer() {
    this.close.emit("close");
  }

  ferme() {
    this.fermer.emit("fermer");
  }
}
