import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MusicComponent } from './music/music.component';
import { FooterComponent } from './footer/footer.component';
import { ChessComponent } from './chess/chess.component';
import { AnimeComponent } from './anime/anime.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NavComponent } from './nav/nav.component';
import { CLIComponent } from './cli/cli.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ButtonsComponent,
    MusicComponent,
    FooterComponent,
    ChessComponent,
    AnimeComponent,
    IdeasComponent,
    NavComponent,
    CLIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
