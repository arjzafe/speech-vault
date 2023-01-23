import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSpeechComponent } from './edit-speech.component';

const routes: Routes = [
  {
    path: '',
    component: EditSpeechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSpeechRoutingModule { }
