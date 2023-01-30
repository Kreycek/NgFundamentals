import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AuthService } from "src/app/user/auth.service"
import { DurationPipe } from "../shared/duration.pipe"
import { ISession } from "../shared/event.model"
import { VoterService } from "../shared/voter.service"
import { SessionListComponent } from "./session-list.component"

describe("SessionListComponentAAA", ()=> {    
    let mockAuthService:any,
        mockVoterService:any,
        fixture:ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEL: DebugElement           

        beforeEach(()=>{
            component = new SessionListComponent(mockAuthService, mockVoterService);    
                TestBed.configureTestingModule({
                    declarations:[
                        SessionListComponent,
                        DurationPipe
                    ],
                    providers:[
                        {
                            provide: AuthService,
                            useValue: mockAuthService
                        },
                        {
                            provide: VoterService,
                            useValue: mockVoterService
                        }
                    ]                    
                });
                fixture=TestBed.createComponent(SessionListComponent);
                component = fixture.componentInstance;
                debugEL=fixture.debugElement;
                element=fixture.nativeElement;
            })

            describe('initial display',()=>{
              it('Should ',()=> {             
                component.sessions = <ISession[]> [
                        {
                            name:'Session 1', 
                            id:3, 
                            presenter:'Joe',
                            duration:1, 
                            level:'beginner', 
                            abstract:'abstract'
                        }
                    ]

                    component.filterBy='all';
                    component.sortBy='name';
                    component.eventId=4;
                     component.ngOnChanges();
                    fixture.detectChanges();
                })
            })
        })

       
