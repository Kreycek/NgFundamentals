import { Injectable  } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { map, pipe } from "rxjs";
import { EventService } from "./shared/event.service";

@Injectable()

export class EventResolver implements Resolve<any>{

    constructor(private eventService: EventService) { }
    resolve(route: ActivatedRouteSnapshot) {   
       console.log('EventResolveService',route)
        return this.eventService.getEvent(route.params['id']).pipe()
    }
}