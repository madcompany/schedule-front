//Module
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; //폼 
//Models
import * as config from '../../config/lecture.config';
import { OptionInterface, University, Subject, Timetable, Filter } from '../../models/lecture.model';
//Services

import { HelperService } from "../../services/helper.service";
import { LectureService } from "../../services/lecture/lecture.service";

@Component({    
    templateUrl: './timetable.component.html'    
})
export class TimetableComponent {    
    submitLoading: boolean = false;
    //대학교 리스트
    univList: Array<University> = [];
    //강의 리스트 
    subjectList: Array<Subject> = [];
    //제한 사항
    weekArray: Array<OptionInterface> = config.WeekArray;
    periodArray: Array<OptionInterface> = config.PeriodArray;
    //시간표블록 2차원 배열
    timeBlock = config.Timeblock;
    //시간표 리스트
    timetableList: Array<any> = [];
    filter: Filter;
    selectGrade: number = 0;

    @ViewChild('searchForm') searchForm: NgForm;

    constructor(
        public helpService: HelperService,
        public lectureService: LectureService
    ){        
        
        //초기화
        this.onInit();
        
    }

    private getUnivList(){
        this.lectureService.getUnivList(result => {
            this.univList = result.univList;            
        }, error => {
            this.univList = [];
            this.helpService.openSnackBar(error.msg);
        });
    }

    private getSubjectList(){
        
        this.lectureService.getSubjectList(this.filter, result => {
            this.subjectList = result.subjectList;
            this.filter.subject_idx = []; //초기화
        }, error => {
            this.subjectList = [];
            this.helpService.openSnackBar(error.msg);
        });
    }

    public updateFilter(form: NgForm){        

        if(!this.checkGrade()) return false;

        if(form.valid == true){
            if(this.submitLoading == false ){
                this.submitLoading = true;
                this.timetableList = [];//초기화

                this.lectureService.getTimeTable(this.filter, result => {
                    this.timetableList = result.timetableList;
                    this.submitLoading = false;
                    console.log(this.timetableList);
                }, error => {
                    this.timetableList = [];
                    this.submitLoading = false;
                    this.helpService.openSnackBar(error.msg);
                });
                
            }else{
                this.helpService.openSnackBar('검색중입니다. ');
                return false;
            }

        }else{
            this.helpService.openSnackBar('강의를 선택 하십시오. ');
            return false;
        }

    }

    public checkSubject(value){
        
        if(value.length > 0){

            this.selectGrade = 0;
            this.filter.subject_idx = [];

            for(let i = 0 ; i < value.length; i++){                
                this.selectGrade += value[i].grade;
                this.filter.subject_idx.push(value[i].subject_idx);
            }
            if(this.selectGrade > 21){
                this.helpService.openSnackBar('21학점 이하로 입력 하십시오. ')
            }
        }
        
    }

    public checkGrade(){
        if(this.selectGrade < 18){
            this.helpService.openSnackBar('18학점 이상 입력 하십시오. ');
            return false;
        }if(this.selectGrade > 21){
            this.helpService.openSnackBar('21학점 이하로 입력 하십시오. ')
            return false;
        }else{
            return true;
        }
        
    }

    public onInit(){
        this.filter = {
            univ_idx: 1,
            subjectList: [],
            subject_idx: [],
            week: [],
            period: []
        }
        this.selectGrade = 0;
        this.timetableList = [];

        this.getUnivList();
        this.getSubjectList();
    }

    public onChoice(){
        if(confirm('해당 적용하시겠습니까?')){
            this.helpService.openSnackBar('시간표가 적용되었습니다. ');
            this.onInit();
        }
    }

    public onDelete(index){        
        if(confirm('해당 시간표를 삭제하시겠습니까?')){
            this.timetableList.splice(index, 1);    
            this.helpService.openSnackBar('시간표가 삭제되었습니다. ');
        }        
    }

}
