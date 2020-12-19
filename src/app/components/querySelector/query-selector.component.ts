import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'query-selector',
    templateUrl: './query-selector.component.html',
  styleUrls: []
})
export class QuerySelectorComponent  implements OnInit{
    @Input() titleString: string; 
    @Input() queryData: {id:any,title:any}[]; 
    @Input() selectedData: any; 
    @Output() onQuerySelect: EventEmitter<any> = new EventEmitter();
    
    constructor() {

    }
    
    ngOnInit(){
        
    }
    selected(event){
        
        this.selectedData = event.target.value;
        this.onQuerySelect.emit(this.selectedData);
    }
    
}
