import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { RegionsService } from '../../services/regions.service';
@Component({
  selector: 'country-detail',
    templateUrl: './country-detail.component.html',
  styleUrls: []
})
export class CountryDetailComponent implements OnInit, OnChanges{
    country:any='';
    @Input() selectedCountry: any; 
    constructor(public regionsService: RegionsService) {

    }
    ngOnInit() {
        
        this.country = this.regionsService.getCountryDetail(this.selectedCountry);
    }
    ngOnChanges(changes:SimpleChanges){
        
        this.country = this.regionsService.getCountryDetail(this.selectedCountry);
    }
    
    
    
}
