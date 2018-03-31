import {Router} from "@angular/router";
import {HelperService} from "./helper.service";

export class ApiContentService{

    constructor(        
        protected helper: HelperService
    ){

    }

    protected errorClear(error, errorCallback?){

        if(error._body && error.status > 0) {
    
            error = JSON.parse(error._body);
            
            if (typeof errorCallback === 'function') {
                errorCallback(error);
            }
        }
    }
}