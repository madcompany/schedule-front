export interface University{
    univ_idx: number;
    univ_name: string;
}

export interface OptionInterface {
    key: number,
    value: string
}

export interface Subject {
    subject_idx: number;
    univ_idx: number;
    proferssor_idx: number;
    subject_name: string;
    subject_code: string;
    grade: number;
}

export interface Timetable {
    subject_idx: number;
    subject_detail_no?: number;
    week: number;
    period: string;
    univ_idx?: number;
    proferssor_idx?: number;
    subject_name?: number;
    subject_code?: string;
    grade?: number;
}

/**
 * 타임블록 초기화 함수
 */
export class TimeBlock {
    constructor() {
        
    }

    setValue(){
        return {
            1:{1:{},2:{},3:{},4:{},5:{}},
            2:{1:{},2:{},3:{},4:{},5:{}},
            3:{1:{},2:{},3:{},4:{},5:{}},
            4:{1:{},2:{},3:{},4:{},5:{}},
            5:{1:{},2:{},3:{},4:{},5:{}},
            6:{1:{},2:{},3:{},4:{},5:{}},
            7:{1:{},2:{},3:{},4:{},5:{}},   
            8:{1:{},2:{},3:{},4:{},5:{}},   
        }
    }
}