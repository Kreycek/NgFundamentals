import { SessionListComponent } from "./session-list.component";
import { ISession } from "../shared/event.model";

describe('SessionListComponet',()=>{

    let component: SessionListComponent;
    let mockAuthService: any, mockVoterService: any;

    beforeEach(()=>{
        component = new SessionListComponent(mockAuthService, mockVoterService);        
    })   

    describe('ngOnChanges',()=>{

        it('should sort the sessions correctly',()=>{

            component.sessions=<ISession[]>[
                {name:'session 1', level:'intermediate'},
                {name:'session 2', level:'intermediate'},
                {name:'session 3', level:'beginner'}
            ]
            component.filterBy='all';
            component.sortBy='name';
            component.eventId=3;
            component.ngOnChanges();

            console.log(component.visibleSession[2]);
    
            expect(component.visibleSession?.length).toBe(3);

            expect(component.visibleSession[2].name).toBe('session 3')
        })
        
    })

})