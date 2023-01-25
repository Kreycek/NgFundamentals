import { Injectable  } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";
import { EventService } from "../shared/event.service";

@Injectable()

export class TesteResolver implements Resolve<any>{

    constructor(private eventService: EventService) { }
    resolve() {  
        console.log('LLLLLLLLLLLLLL'); 
        return this.eventService.getEventsTeste()
    }
}