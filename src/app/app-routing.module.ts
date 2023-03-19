import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimeComponent } from './anime/anime.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CLIComponent } from './cli/cli.component';
import { IdeasComponent } from './ideas/ideas.component';
import { MusicComponent } from './music/music.component';
import { SpamComponent } from './spam/spam.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'cli', component: CLIComponent },
  { path: 'spam', component: SpamComponent },
  { path: '', component: AboutComponent },
  { path: '**', pathMatch: 'full', component: AboutComponent }, //Wenn er nichts findet, geht es zu der about-seite
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
