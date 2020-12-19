import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable} from 'rxjs';

import { RegionsService } from '../../services/regions.service';
import { SelectionList } from '../../models/model'
import { Countries } from '../../models/model';
import { Store } from '@ngrx/store';
import { RootReducerState, getCountryListing } from '../../../reducers';
import { RegionCountryListAction } from '../../../actions/user-action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    regionTitle:String='Select Region';
    regionList: SelectionList[] = [{ id: '', title: 'Select' }, { id: 'Asia', title: 'Asia' }, { id: 'Europe', title: 'Europe' }];
    selectedRegion:any='';
    
    countryTitle: String = 'Select Country';
    countryList: any = [{ id: '', title: 'Select' }];
    selectedCountry: any = '';
    countryArrayList:any[]=[];
    constructor(private regionsService: RegionsService, private store:Store<RootReducerState>) { 
       
    }

    
    ngOnInit() {
      
     
    }
  
    resetData(){
        this.countryList= [{ id: '', title: 'Select' }];
        this.selectedCountry= '';
        this.countryArrayList= [];
    }
    onRegionSelect(value){
        if (value!=''){
            this.selectedRegion = value;
            this.countryList = [{ id: '', title: 'Select' }];
            this.selectedCountry = '';
            this.getCountries(this.selectedRegion);
        }else{
            this.resetData();
        }
    }
  
    onCountrySelect(value) {
        this.selectedCountry = value;
        console.log("Contry changed to " + this.selectedCountry);
        
    }
    
    getCountries(region){
        this.regionsService.getCountryByRegion(region).subscribe((countryData) => {
            //console.log(countryData)
            //this.store.dispatch(new RegionCountryListAction({ region, countryData }));
            this.countryList = [...this.countryList, ...countryData];
            //console.log(this.countryList)
        });
        // this.store.select(getCountryListing).subscribe((data) => {
        //     if (typeof data[region] ==''){
        //         this.countryList = [...this.countryList, ...data[region]];
        //     }else{
                
        //     }
        
        //     console.log("statecheck", data);
        // })
        //console.log(this.countryList)
    }

}
