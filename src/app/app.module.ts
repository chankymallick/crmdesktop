import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { AddleadComponent } from './addlead/addlead.component';

const appRoutes: Routes = [
  { path: 'leads', component: LeadsComponent },
  { path: 'addLead', component: AddleadComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    AddleadComponent
  ],  
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
