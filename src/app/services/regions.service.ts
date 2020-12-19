import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})

export class RegionsService {

    private apiUrl = environment.apiUrl;
    private countryArrayList=[];
	constructor(private http: HttpClient) { }

    getCountryByRegion(region: string) {
        return this.http.get(`${this.apiUrl}/rest/v2/region/${region}`).pipe(map(country => {
            return this.someFunction(country);
                    }));
    }
    
    
    someFunction(countryData){
        
        let countriesData= countryData.map(country => {

            this.countryArrayList[`${country.alpha2Code}${country.numericCode}`] = {
                id: `${country.alpha2Code}${country.numericCode}`, 
                name: country.name,
                capital: country.capital,
                population: country.population,
                currencies: country.currencies,
                flag: country.flag
            }
            return { id: `${country.alpha2Code}${country.numericCode}`, title: country.name }
        });
        return countriesData;
        
    }
    getCountryDetail(countryCode){
        console.log(this.countryArrayList[countryCode],'rak');
        return this.countryArrayList[countryCode];
    }
}
