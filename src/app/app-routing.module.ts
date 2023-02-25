import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AnimeComponent } from './anime/anime.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChessComponent } from './chess/chess.component';
import { CLIComponent } from './cli/cli.component';
import { IdeasComponent } from './ideas/ideas.component';
import { MusicComponent } from './music/music.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'chess', component: ChessComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'cli', component: CLIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
