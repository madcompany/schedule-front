import {Injectable, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {HelperService} from '../helper.service';
import {ApiContentService} from "../api.content.service";
@Injectable()
export class LectureService extends ApiContentService{

    constructor(
        public apiService: ApiService,
        public helperService: HelperService
    ) {
        super(helperService);
    }

    public getUnivList(callback?, errorCallback?){        
       
        return this.apiService.get('/api/universitys' )
           .subscribe(
               data => {
                   if(data.status === true){
                       if( typeof callback == 'function'){
                           callback(data);
                       }
                   }else{
                       errorCallback(data);
                   }

               }, error => {
                   this.errorClear(error,errorCallback);
               }
        );
   }

    public getLectureList(param, callback?, errorCallback?){
        let url = this.apiService.paramterConversion(param);
       
        return this.apiService.get('/api/lectures?' + url)
           .subscribe(
               data => {
                   if(data.status === true){
                       if( typeof callback == 'function'){
                           callback(data);
                       }
                   }else{
                       errorCallback(data);
                   }

               }, error => {
                   this.errorClear(error,errorCallback);
               }
        );
   }

}