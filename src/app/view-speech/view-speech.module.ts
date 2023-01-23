import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSpeechRoutingModule } from './view-speech-routing.module';
import { ViewSpeechComponent } from './view-speech.component';
import { SharedModule } from '@app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    ViewSpeechComponent
  ],
  imports: [
    CommonModule,
    ViewSpeechRoutingModule,
    SharedModule,
    NgScrollbarModule
  ]
})
export class ViewSpeechModule { }
