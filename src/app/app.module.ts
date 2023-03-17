import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MusicComponent } from './music/music.component';
import { FooterComponent } from './footer/footer.component';
import { AnimeComponent } from './anime/anime.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NavComponent } from './nav/nav.component';
import { CLIComponent } from './cli/cli.component';
import { SpamComponent } from './spam/spam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ButtonsComponent,
    MusicComponent,
    FooterComponent,
    AnimeComponent,
    IdeasComponent,
    NavComponent,
    CLIComponent,
    SpamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
