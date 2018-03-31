//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from "@angular/flex-layout";
//services
import { HelperService } from "./services/helper.service";
import { ApiService } from "./services/api.service";
import { LectureService } from "./services/lecture/lecture.service";
//components
import { AppComponent } from './app.component';
import { LectureComponent } from "./pages/lecture/lecture.component";
import { TimetableComponent } from "./pages/timetable/timetable.component";

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,  
  MatTableModule,  
  MatSnackBarModule
  
} from '@angular/material';

const appRoutes: Routes = [    
  { path: '', component:  TimetableComponent},
  { path: 'timetable', component:  TimetableComponent},
  { path: 'lecture', component: LectureComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    TimetableComponent,
    LectureComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    FlexLayoutModule
  ],  
  providers: [
    HelperService,
    ApiService,
    LectureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
