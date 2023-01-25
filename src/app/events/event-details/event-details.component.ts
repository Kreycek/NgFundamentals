import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared/event.model";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
        .container {padding-left:20px; padding-right: 20px;}
        .event-image: { height: 300px; }
        a {cursor:pointer}
        
    `]
})

export class EventDetailsComponent implements OnInit {

    event:IEvent;
    addMode:boolean;
    filterBy: string='all';
    sortBy:string='votes';

        constructor(public eventService:EventService, public route:ActivatedRoute ) {
            
        }

        ngOnInit() {
            
            this.route.params.forEach((params:Params)=>{
                console.log('SnapShot',this.route.snapshot)
              this.event=this.route.snapshot.data['event']
            })
            
            // this.route.data.forEach((data)=>{
            //     this.event=data['events']
            // })

            //this.event=this.eventService.getEvent(+this.route.snapshot.params['id']);
        }

        addSession() {
            this.addMode=true;
        }

        saveNewSession(session:ISession) {
            const nextId=Math.max.apply(null, this.event.sessions.map(s=>s.id));
            session.id=nextId;  
            this.event.sessions.push(session);           
            this.eventService.updateEvent(this.event);
            this.addMode=false;
        }

        cancelADDSession(){
            this.addMode=false;
        }
    }