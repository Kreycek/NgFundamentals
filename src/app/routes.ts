import { Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event.component";
import { Error404Component } from "./errors/404.component";
import { CreateSessionComponent } from "./events/create-session.component";


import {   
    EventDetailsComponent,
    
    EventListResolver,
    EventResolver,
    EventsListComponent,
    TesteResolver
  } from './events/index'

export const appRoutes:Routes=[
  {path: 'events', component: EventsListComponent, resolve:{ events:EventListResolver }}, 
  //{path: 'events', component: EventsListComponent, resolve:{ events2:TesteResolver }},
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events/:id', component: EventDetailsComponent, resolve:{ event:EventResolver }},
  {path: '404', component: Error404Component},
  {path:'', redirectTo:'/events', pathMatch:'full'},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path:'user', loadChildren: () => import('./user/user.module').then(x => x.userModule) }
]

 
