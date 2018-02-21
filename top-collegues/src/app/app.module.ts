import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './shared/service/collegue.service';
import { RouterModule, Routes } from '@angular/router';
import { ClassiqueComponent } from './classique/classique.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TableauComponent } from './tableau/tableau.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { FilterByPseudoPipe } from './shared/pipe/filter-by-pseudo.pipe';
import { DernierAvisComponent } from './dernier-avis/dernier-avis.component';
import { LigneComponent } from './ligne/ligne.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommentPipe } from './shared/pipe/comment.pipe';
import { AvisCollegueComponent } from './avis-collegue/avis-collegue.component';
import { AvisSiteComponent } from './avis-site/avis-site.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'detail/:pseudo', component: PageDetailComponent },
  { path: '**', redirectTo: 'classique'}
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ClassiqueComponent,
    CarouselComponent,
    TableauComponent,
    PageDetailComponent,
    FormulaireComponent,
    NavigationComponent,
    ScorePipe,
    FilterByPseudoPipe,
    DernierAvisComponent,
    LigneComponent,
    HistoriqueComponent,
    CommentPipe,
    AvisCollegueComponent,
    AvisSiteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
