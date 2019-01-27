import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';

const appRoutes: Routes = [
  { path: 'leads', component: LeadsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent
  ],  
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
