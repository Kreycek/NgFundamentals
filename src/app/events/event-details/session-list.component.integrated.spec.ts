import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { CollapsibleWellComponent } from "src/app/common"
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
            mockAuthService = {isAuthenticated:()=>{}}   
                TestBed.configureTestingModule({
                    declarations:[
                        SessionListComponent,
                        DurationPipe,
                        CollapsibleWellComponent,
                        
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
                            abstract:'abstract',
                            voters:['John','Bob']
                        }
                    ]

                    
                    component.filterBy='all';
                    component.sortBy='name';
                    component.eventId=4;
                    component.ngOnChanges();
                    fixture.detectChanges();
                    console.log('Jasmine',element.querySelectorAll('[well-title]'))
                    expect(element.querySelector('[well-title]')?.textContent).toContain("Session 1")
                    console.log('Jasime CSS',debugEL.query(By.css('[well-title]')).nativeElement.textContent)
                    expect(debugEL.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
                })
            })
        })

       
