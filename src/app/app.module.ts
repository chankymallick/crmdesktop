import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { AddleadComponent } from './addlead/addlead.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule } from '@angular/forms';
import { Utility } from './Utility';
import { CallsComponent } from './calls/calls.component';

const appRoutes: Routes = [
  { path: 'leads', component: LeadsComponent },
  { path: 'addLead', component: AddleadComponent },
  { path: 'addUser', component: NewuserComponent },
  { path: 'addCalls', component: CallsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    AddleadComponent,
    NewuserComponent,
    CallsComponent 
  ],  
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
