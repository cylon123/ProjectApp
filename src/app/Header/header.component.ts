import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit{
    collapsed = true;
    @Output() emitter = new EventEmitter<string>(); 
    OnClickRecipe(feature : string){
        this.emitter.emit(feature);
    }
    ngOnInit(){
        console.log("Hello");
    }
}