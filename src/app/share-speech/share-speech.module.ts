import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareSpeechRoutingModule } from './share-speech-routing.module';
import { ShareSpeechComponent } from './share-speech.component';
import { SharedModule } from '@app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShareSpeechComponent
  ],
  imports: [
    CommonModule,
    ShareSpeechRoutingModule,
    SharedModule,
    NgScrollbarModule,
    ReactiveFormsModule
  ]
})
export class ShareSpeechModule { }
