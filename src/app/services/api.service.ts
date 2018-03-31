import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API } from "./api.interface";
import { Observable } from "rxjs/Observable";


@Injectable()
export class ApiService implements API {

    private API_ID_TOKEN_KEY = 'id_token';
    private API_HEADER_KEY = 'x-api-key';    

    //private API_URL = "schedule-api.makemusic.kr";
    private API_URL = "http://localhost:8080";

    constructor(
        private http: Http

    ) { }

    get(rest_url: string, header?: string) {
        return this.http.get(this.API_URL + rest_url, this.defaultHeader()).map(res => res.json());
    }

    post(rest_url: string, parameter: any, header?: string) {
        return this.http.post(this.API_URL + rest_url, this.paramterConversion(parameter), this.defaultHeader()).map(res => res.json());
    }

    put(rest_url: string, parameter: any, header?: string) {

        return this.http.put(this.API_URL + rest_url, this.paramterConversion(parameter), this.defaultHeader()).map(res => res.json());
    }

    delete(rest_url: string, header?: string) {
        return this.http.delete(this.API_URL + rest_url, this.defaultHeader()).map(res => res.json());
    }

    // 유저의 고유 API 토큰 저장
    public setUserToken(token: string): void {
        localStorage.setItem(this.API_ID_TOKEN_KEY, token);
    }

    // 유저의 고유 API 토큰 가져오기
    public getUserToken(): string {
        return localStorage.getItem(this.API_ID_TOKEN_KEY) || '';
    }



    public getAPIKey() {
        return this.API_HEADER_KEY;
    }

    //API 통신시 기본 Header 세팅
    public defaultHeader(options: Object = {}): RequestOptions {

        let headerGroup = {};

        let headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'x-requested-with Content-Type');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        //headers.append(this.API_HEADER_KEY, 'ADMIN');
        /*
        if (this.getUserToken()) {
            headers.append('Authorization', this.getUserToken());
        }
        */

        headerGroup['headers'] = headers;

        if (options['excel'] == true) {
            headerGroup['responseType'] = ResponseContentType.Blob
        }

        return new RequestOptions(headerGroup);
    }

    //파라미터 POST 배열 GET 방식으로 변경
    public paramterConversion(paramter) {

        return Object.keys(paramter).map((key) => key + '=' + encodeURIComponent(paramter[key])).join('&');
    }


}