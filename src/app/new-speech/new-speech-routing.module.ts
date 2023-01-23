import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSpeechComponent } from './new-speech.component';

const routes: Routes = [
  {
    path: '',
    component: NewSpeechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSpeechRoutingModule { }
