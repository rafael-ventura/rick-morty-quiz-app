import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {FlexModule} from "@angular/flex-layout";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    QuizContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FlexModule,
    RouterLink
  ]
})
export class QuizMechanicsModule { }
