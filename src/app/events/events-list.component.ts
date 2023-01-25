
import {Component,Injectable, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router';

import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component(
    {
        selector:"event-list",
        templateUrl:"events-list.component.html",
        styles:['h2 { color: #7CFC00; }']
    }
)
export class EventsListComponent implements OnInit {
    
    events:IEvent[] ;

    a={}
    b={}

    constructor(        
       
        private route: ActivatedRoute
        ) {     }

    ngOnInit() {
        // this._es.getEvents().subscribe(reponse=> {
        //     this.events=reponse;
        // });
        
        
        this.events = this.route.snapshot.data['events']
        console.log('teste',this.events);
    }

    handleEventClicked(data:any) {
        console.log('Received', data);
    }

   
}