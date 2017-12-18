import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './base/home';
import { JudgingComponent } from './judging/judging';
import { SettingsComponent } from './settings/settings';

const routes: Routes = [
  // General routing
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Routing of pages
  { path: 'judging/:type', component: JudgingComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
