import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Injectable  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { Toastr, TOASTR_TOKEN } from './common/index';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { 
    EventsAppComponent,
    EventDetailsComponent,
    
    EventListResolver,
    EventThumbnailComponent,
    EventsListComponent,
    EventService,
    TesteResolver,
    EventResolver
  } from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { CreateEventComponent } from './create-event.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CreateSessionComponent } from './events/create-session.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { HttpClientModule } from '@angular/common/http';
import { VoterService } from './events/shared/voter.service';
import { upVoteComponent } from './events/event-details/upvote.component';
import { LocationValidator } from './events/shared/location-validator.directive';

const toastr:Toastr= window['toastr'];
const jquery= window['$'];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules}),   
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    TesteComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    upVoteComponent,
    LocationValidator
  ],  
  providers: [
    EventService,
    EventListResolver,
    TesteResolver,
    EventResolver,
    {provide:TOASTR_TOKEN, useValue:toastr},
       
    AuthService
  ],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {

  if(component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;

}
