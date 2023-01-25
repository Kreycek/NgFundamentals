import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './events/shared/event.service';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  templateUrl:'create-event.component.html',
  styles:[`
  em {float:right; color:#E05C65; padding-left:10px;} 
  .error input {background-color:#E3C3E5;}
  .error ::-webkit-input-placeholder {color:#999;}
  .error ::-moz-placeholder {color:#999;}
  .error :-moz-placeholder {color:#999;}
  .error :ms-input-placeholder {color:#999;}
  `]
})
export class CreateEventComponent {
  title = 'Criar Evento';

  newEvent:any;
  public isDirty:boolean = true;
  event:any;

  constructor(private route: Router, private eventService:EventService) {
  }

  saveEvent(formvalues:any) {
    console.log('formvalues',formvalues);
    this.eventService.saveEvent(formvalues).subscribe((response)=>{
      this.isDirty=false;
      this.route.navigate(['/events'])
    });
   
    //
   
  }

  cancel() {
    this.route.navigate(['/events'])
  }

  ngOnInit() {
    this.event={
      name:'',
      date:'',
      time:'',
      price:0,
      location:{
        address:'',
        city:'',
        country:''
      },
      onlineUrl:'',
      imageUrl:''
    }
  }

  
}
