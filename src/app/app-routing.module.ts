import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimeComponent } from './anime/anime.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CLIComponent } from './cli/cli.component';
import { IdeasComponent } from './ideas/ideas.component';
import { MusicComponent } from './music/music.component';
import { JapanComponent } from './japan/japan.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { UnfoundUrlComponent } from './unfound-url/unfound-url.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'cli', component: CLIComponent },
  { path: '', component: AboutComponent },
  { path: 'japan', component: JapanComponent },
  { path: 'minecraft', component: MinecraftComponent },
  { path: '**', pathMatch: 'full', component: UnfoundUrlComponent }, //Wenn er nichts findet, geht es zu der about-seite
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
