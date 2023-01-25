import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IEvent } from "./shared/event.model";

@Component({

    selector:'event-thumbail',
    template:`

    <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]=getStartTimeClass() [ngSwitch]="event?.time">
                Time: {{event?.time}}           
                <span *ngSwitchCase="'8:00 am'">Early Start</span>
                <span *ngSwitchCase="'10:00 am'">Late Start</span>
                <span *ngSwitchDefault>Normal Start</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div [hidden]="!event?.location">
                <span>Location:{{event?.location?.address}}</span>
               
                <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
                <br>
                <button class="btn btn-primary" [routerLink]="[event?.id]">Click Me!</button>
            </div>
            
    </div>
    
    `,
    styles:[`
    .pad-left {margin-left:10px;}
    .well div {color:bbb;}
    .thumbnail {min-height:210px;}
    .green {color: #003300 !important;}
    .bold {font-weight:bold;}
    .formatar {font-size:20px;}
    `]
})

export class EventThumbnailComponent{
 @Input() event:IEvent| undefined;

 getStartTimeClass(){
     const isEarlyStart= this.event && this.event.time==='8:00 am';
     return {green: isEarlyStart, bold: isEarlyStart, formatar: isEarlyStart};
 }

}