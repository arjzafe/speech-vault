import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSpeechRoutingModule } from './new-speech-routing.module';
import { NewSpeechComponent } from './new-speech.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    NewSpeechComponent
  ],
  imports: [
    CommonModule,
    NewSpeechRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NewSpeechModule { }
