import {Injectable, OnInit} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from "@angular/material";

@Injectable()
export class HelperService {

    constructor(
        
        public snackBar: MatSnackBar
    ) {

    }


    //객체 Hard Copy
    public copyObject(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        } else {
            var copiedObj = obj.constructor();
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    copiedObj[prop] = this.copyObject(obj[prop]);
                }
            }
            return copiedObj;
        }
    }

    // 경고창
    public openSnackBar(massage: string, duration:number = 2000) {
        
        this.snackBar.open(massage, null, {duration: duration});
          
    }
}