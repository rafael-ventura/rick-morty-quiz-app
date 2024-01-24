import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizContainerComponent} from "./quiz-mechanics/quiz-container/quiz-container.component";
import {HomeComponent} from "./quiz-mechanics/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quiz', component: QuizContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
