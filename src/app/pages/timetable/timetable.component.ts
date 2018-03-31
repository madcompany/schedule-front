//Module
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
//Models
import * as config from '../../config/lecture.config';
import { OptionInterface, University, Subject, Timetable, TimeBlock } from '../../models/lecture.model';
//Services

import { HelperService } from "../../services/helper.service";
import { LectureService } from "../../services/lecture/lecture.service";

@Component({    
    templateUrl: './timetable.component.html'    
})
export class TimetableComponent {
    toppings = new FormControl();
    //대학교 리스트
    univList: Array<University> = [];
    //강의 리스트 
    lectureList: Array<Subject> = [];
    //제한 사항
    weekArray: Array<OptionInterface> = config.WeekArray;
    periodArray: Array<OptionInterface> = config.PeriodArray;
    //시간표블록 2차원 배열
    timetableBlock;
    //시간표 리스트
    timetableList: Array<any> = [];

    constructor(
        public helpService: HelperService,
        public lectureService: LectureService
    ){        
        //this.timetableBlock = new TimeBlock();
        //console.log(this.timetableBlock.setValue());

        this.getUnivList();
    }

    private getUnivList(){
        this.lectureService.getUnivList(result => {
            this.univList = result.univList;
            console.log(this.univList);
        }, error => {
            this.univList = [];
            this.helpService.openSnackBar(error.msg);
        })
    }

    private getLectureList(){
        let param = {};
        this.lectureService.getLectureList(param, result => {

        }, error => {

        })
    }

    public makeTimetableBlock(){
        let block = [];
        for(let i = 1; i <=8; i++){
            for(let j = 1; j <= 5; j++){
                block[j][i] = {};
            }
        }
        return block;
    }
}
