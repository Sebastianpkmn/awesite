import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ButtonsComponent } from './buttons/buttons.component';
const routes: Routes = [

{path: 'about', component: AboutComponent},
{path: 'buttons', component: ButtonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
