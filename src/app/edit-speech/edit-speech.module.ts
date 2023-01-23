import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSpeechRoutingModule } from './edit-speech-routing.module';
import { EditSpeechComponent } from './edit-speech.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    EditSpeechComponent
  ],
  imports: [
    CommonModule,
    EditSpeechRoutingModule,
    SharedModule
  ]
})
export class EditSpeechModule { }
