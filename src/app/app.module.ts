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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { JapanComponent } from './japan/japan.component';
import { MinecraftComponent } from './minecraft/minecraft.component'; // import HttpClientModule
import { CLIComponent } from './cli/cli.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UnfoundUrlComponent } from './unfound-url/unfound-url.component';

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
    JapanComponent,
    MinecraftComponent,
    CLIComponent,
    UnfoundUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
