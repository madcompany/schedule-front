import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({    
    templateUrl: './lecture.component.html',    
})
export class LectureComponent {
    
    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("app/data.json")
            .subscribe((data) => {
                setTimeout(() => {
                    this.data = data.json();
                }, 1000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }


}

