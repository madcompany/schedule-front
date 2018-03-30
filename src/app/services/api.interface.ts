import { RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

//Third party call interface
export interface API {
    get(rest_url: string, header?: string): Observable<any>;
    post(rest_url: string, parameter: any, header?: string): Observable<any>;
    put(rest_url: string, parameter: any, header?: string): Observable<any>;
    delete(rest_url: string, header?: string): Observable<any>;
    defaultHeader(): RequestOptions;
}