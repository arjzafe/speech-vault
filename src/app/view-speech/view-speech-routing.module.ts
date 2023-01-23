import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSpeechComponent } from './view-speech.component';

const routes: Routes = [
  {
    path: '',
    component: ViewSpeechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSpeechRoutingModule { }
