/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, EventEmitter, Input, Output}
from '@angular/core'

@Component({
    selector:'upvote',
    template:`
    <div class="votingWidgetContainer pointable " (click)=onClick()> 
        <div class="well votingWidget">
            <div class="votingButton">
                <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty" [style.color]="iconColor"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `,
    styleUrls:['upvote.component.css']
    })

export class upVoteComponent{


    @Input() set voted(val:boolean) {
        this.iconColor=val? 'red' : 'white';
    }
    @Input() count: number;
    @Output() vote = new EventEmitter();

    iconColor:string



        onClick() :void {

                this.vote.emit({});
            
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        constructor(){


            }

}