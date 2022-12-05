import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { TermComponent } from './term/term.component';
const routes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'terms', component: TermComponent },
  { path: ' ', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }