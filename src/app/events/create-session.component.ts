import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "./shared/event.model";

@Component({
 selector:'create-session',
 templateUrl:'./create-session.component.html',
 styles:[`
    em {float:right; color:#E05C65; padding-left:10px;} 
    .error input {background-color:#E3C3E5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :ms-input-placeholder {color:#999;}
    .error textarea {background-color:#E3C3E5;}

 `]
})

export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession=new EventEmitter();
    @Output() cancelADDSession=new EventEmitter();
    newSessionForm: FormGroup;
    name:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;

    ngOnInit() {

        this.name=new FormControl('',Validators.required)
        this.presenter=new FormControl('',Validators.required)
        this.duration=new FormControl('',Validators.required)
        this.level=new FormControl('',Validators.required)
        this.abstract=new FormControl('',[Validators.required, this.restrictedWords(['foo','jane'])])

        this.newSessionForm=new FormGroup({

            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })
    }

    saveSession(formValues:any) {

        const session:ISession={
            id:0,
            name:formValues.name,
            duration:+formValues.duration,
            level:formValues.level,
            presenter:formValues.presenter,
            abstract:formValues.abstract,
            voters:[]
        }

        this.saveNewSession.emit(session);
            console.log(formValues);
    }

    private restrictedWords(words:Array<string>) 
    {
        return (control:FormControl) : {[key:string]:any} => {

            if(!words) return {};

            const invalidWords=words.map(w=>control.value.includes(w) ? w :null).filter(w=>w!=null);

            return invalidWords && invalidWords.length> 0 ? {"restrictedWords": invalidWords.join(' ')} : {}
        }
    }

    cancel() {
        this.cancelADDSession.emit();
    }

    // private restrictedWords(control:FormControl) : {[key:string]:any}
    // {
    //     return (control.value.includes('foo') ? {'restrictedWords':'foo'} : {});
    // }
}