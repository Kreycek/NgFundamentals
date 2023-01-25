import { Component } from '@angular/core'
import { EventService } from '../events';
import { ISession } from '../events/shared/event.model';
import { AuthService } from '../user/auth.service';

@Component({
    selector:'nav-bar',
    templateUrl:'navbar.component.html',
    styles:[`
    
    .nav.navbar-nav {font-size:15px;}
    #searchForm {margin-right:100px;}
    li > a.active { color:#7CFC00; }
    @media (max-width: 1200px)
    
    `]
})

export class NavBarComponent {

    public searchTerm:string="";
    foundSessions: ISession[];
    constructor(public auth: AuthService, private eventService: EventService){

       
    }

    searchSessions(searchTerm:string) {

        console.log('teste');
        this.eventService.searchSessions(searchTerm).subscribe(sessions=>{
            this.foundSessions = sessions;

            console.log(this.foundSessions);
        })
    }
}