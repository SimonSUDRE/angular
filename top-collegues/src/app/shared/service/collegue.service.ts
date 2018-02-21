import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { CollegueActionScore } from '../domain/collegueActionScore';
import { Avis } from '../domain/avis';

@Injectable()
export class CollegueService {

  private collegueSaveSub:Subject<Collegue> = new Subject();
  private collegueLigneSub:Subject<boolean> = new Subject();
  private collegueLDikeSub:ReplaySubject<CollegueActionScore> = new ReplaySubject();
  private collegueAvisSub:Subject<Collegue> = new Subject();

  constructor(private http:HttpClient) {}

  get collegueSaveObs():Observable<Collegue> {
    return this.collegueSaveSub.asObservable();
  }

  get collegueLDikeObs():Observable<CollegueActionScore> {
    return this.collegueLDikeSub.asObservable();
  }

  get collegueLigneObs():Observable<boolean> {
    return this.collegueLigneSub.asObservable();
  }

  listerCollegues():Observable<Collegue> {
    this.http.get<Collegue[]>(
        'http://localhost:8080/collegues'
      ).subscribe(collegues => 
        collegues.forEach(collegue => {
          this.collegueSaveSub.next(collegue);
        })
      );
    return this.collegueSaveObs;
  }

  sauvegarder(newCollegue:Collegue):Observable<Collegue> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.http.post<Collegue>(
        'http://localhost:8080/collegues', 
        newCollegue, 
        httpOptions
      ).subscribe(collegue =>
        this.collegueSaveSub.next(collegue)
      );
    return this.collegueSaveObs;
  }

  supprimer(pseudoCollegue:string):Observable<Collegue> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.http.delete<Collegue>(
        'http://localhost:8080/collegues/' + pseudoCollegue, 
        httpOptions
      ).subscribe(collegue =>
        this.collegueSaveSub.next(collegue)
      );
    return this.collegueSaveObs;
  }

  addCollegue(pseudoCollegue:string):Observable<Collegue> {
    this.http.get<Collegue>(
        'http://localhost:8080/collegues/' + pseudoCollegue
      ).subscribe(collegue =>
        this.collegueSaveSub.next(collegue)
      );
    return this.collegueSaveObs;
  }

  aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.patch<Collegue>(
        'http://localhost:8080/collegues/' + unCollegue.pseudo, 
        '{ "action": "aimer" }',
        httpOptions
      ).map(collegue => {
        this.collegueLDikeSub.next(new CollegueActionScore(collegue, "aimer"));
        return collegue;
      });
  }

  detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.patch<Collegue>(
        'http://localhost:8080/collegues/' + unCollegue.pseudo, 
        '{ "action": "detester" }',
        httpOptions
      ).map(collegue => {
        this.collegueLDikeSub.next(new CollegueActionScore(collegue, "detester"));
        return collegue;
      });
  }

  testerService(){
    Observable.interval(5000)
    .subscribe(() => 
      this.http.get<Collegue[]>('http://localhost:8080/collegues')
      .subscribe(
        collegues => this.collegueLigneSub.next(false),
        error => this.collegueLigneSub.next(true)
      )
    );
  }

  historiqueAvis(voteId:string):Observable<Avis[]> {
    return this.http.get<Avis[]>(`http://localhost:8080/avis?since=${voteId}`);
  }

  supprimerAvis(voteId:number):Observable<Avis> {
    return this.http.delete<Avis>(`http://localhost:8080/avis?since=${voteId}`)
  }

  commentaireUnCollegue(unCollegue:Collegue, com:string):Observable<Collegue> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.patch<Collegue>(
        'http://localhost:8080/collegues/' + unCollegue.pseudo, 
        { "action": "avis", "comment": com },
        httpOptions
      ).map(collegue => {
        this.collegueAvisSub.next(collegue);
        return collegue;
      });
  }
}
