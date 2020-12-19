export const REGION_LIST='region list action';
export const REGION_COUNTRY_LIST='country list action';
export const REGION_COUNTRY_DETAIL = 'country detail action';


export class RegionListAction{
    readonly type = REGION_LIST;
    constructor(public payload ?:{data:any}){
        
    }
    
}


export class RegionCountryListAction{
    readonly type = REGION_COUNTRY_LIST;
    constructor(public payload ?:any){
        
    }
    
}

export class RegionCountryDetailAction {
    readonly type = REGION_COUNTRY_DETAIL;
    constructor(public payload?: any) {

    }
}