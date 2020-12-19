import { Action } from '../actions';
import { REGION_COUNTRY_LIST, REGION_COUNTRY_DETAIL}  from '../actions/user-action';
export interface userReducerState{
    region:{}[]
    countries:any;
    selectedRegion:any;
    selectedCountry:any;
    countryDetail:any
}


const initialState={
    region: [{ id: '', title: 'Select' }, { id: 'Asia', title: 'Asia' }, { id: 'Europe', title: 'Europe' }],
    countries:[],
    selectedRegion:'',
    selectedCountry:'',
    countryDetail:[]
}

export function userReducer(state = initialState, action: Action){
    switch(action.type){
        case REGION_COUNTRY_LIST:{
            const data =action.payload;
            let updatedCountry = [...state.countries];
            console.log("before",updatedCountry);
            updatedCountry[data.region]=data.countryData;
            console.log("after", updatedCountry, data.region);
            //console.log("from reducer", state.countries, updatedCountry);
            return { ...state, countries: [...state.countries,...updatedCountry]};
        }
        
        case REGION_COUNTRY_DETAIL: {
            const data = action.payload.data;
            
            return { ...state };
        }
        
        default:{
            return state;
        }
    }
    
}

//selectors


export const getCountryList = (state: userReducerState) => state.countries;
