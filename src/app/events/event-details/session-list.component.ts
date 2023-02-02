import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AuthService } from "src/app/user/auth.service";
import { ISession } from "../shared/event.model";
import { VoterService } from "../shared/voter.service";

@Component({
   selector:'session-list',
   templateUrl:'session-list.component.html' 
})

export class SessionListComponent implements OnChanges {
        @Input() sessions:ISession[];
        @Input() filterBy:string;
        @Input() sortBy:string;
        @Input() eventId: number;
        visibleSession:ISession[];

        constructor(public auth:AuthService, public voterService: VoterService) {

        }    


        toggleVote(session:ISession) {
            if(this.userHasVoted(session)) {
                this.voterService.deleteVoter(1,session,this.auth.currentUser.userName)
            }
            else {
                this.voterService.addVoter(1,session,this.auth.currentUser.userName)
            }

            if(this.sortBy==='votes'){
                this.visibleSession.sort(sortByVotesDesc)
            }
        }

        userHasVoted(session:ISession) : boolean {
            return this.voterService.userHasVoted(session,this.auth.currentUser.userName)
        }

        ngOnChanges(): void {
            if(this.sessions) {           
                this.filterSessions(this.filterBy);
                this.sortBy=== 'name' ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByVotesDesc)
            }
        }

      
        filterSessions(filter:string) {       
                if(filter==='' || filter==="all") {            
                    this.visibleSession=this.sessions.slice(0);
                }
                else {
                
                    this.visibleSession=this.sessions.filter(x=>{
                        return x.level.toLocaleLowerCase()===filter.toLocaleLowerCase();
                    })
                }
            }   
        }

        function sortByNameAsc(s1:ISession, s2: ISession){
            if(s1.name>s2.name) {
                return 1;
            }
            else if(s1.name===s2.name) return 0;
            else return 1;
        }


        function sortByVotesDesc(s1:ISession, s2: ISession){
            return s2.voters?.length - s1.voters?.length;
        }

