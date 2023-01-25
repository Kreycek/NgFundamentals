import { Injectable  } from "@angular/core";
import { Resolve } from "@angular/router";
import { map, pipe } from "rxjs";

import { EventService } from "../shared/event.service";

@Injectable()

export class EventListResolver implements Resolve<any>{

    constructor(private eventService: EventService) { }
    resolve() {   

        this.eventService.getEvents().subscribe((resr)=>{
            console.log("resultado " , resr);
        })
      
        return this.eventService.getEvents().pipe()
    }
}