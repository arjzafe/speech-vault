import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareSpeechComponent } from './share-speech.component';

const routes: Routes = [
  {
    path: '',
    component: ShareSpeechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareSpeechRoutingModule { }
