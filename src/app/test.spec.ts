import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { of } from 'rxjs';
import { IEvent, ISession } from './events/shared/event.model';
import { VoterService } from './events/shared/voter.service'


describe('first tests', ()=>{

    let voterService: VoterService, mockHttp: any;

    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj('mockHttp',['delete', 'post'])
        voterService=new VoterService(mockHttp)
    });

    describe('deleteVoter', ()=>{
        it('should remove the voter from the list of voters', ()=>{
            const session={id:6, voters:['John','Joe']}
            mockHttp.delete.and.returnValue(of(false));
            voterService.deleteVoter(3,<ISession>session,"Joe")
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("John");
        })

        it('should call http.delete with the right URL', ()=>{
            const session={id:6, voters:['John','Joe']}
            mockHttp.delete.and.returnValue(of(false));
            voterService.deleteVoter(3,<ISession>session,"Joe");
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Joe');            
        })
    })

    describe('addVoter', ()=>{
        it('should call http.post with the right URL', ()=>{
            const session={id:6, voters:['John']}
            mockHttp.post.and.returnValue(of(false));
            voterService.addVoter(3,<ISession>session,"Joe");
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Joe', {}, jasmine.any(Object));
           
        })      
    })
})