import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { SpeechListItemComponent } from './components/speech-list-item/speech-list-item.component';
import { SpeechListComponent } from './components/speech-list/speech-list.component';
import { TruncateWordPipe } from './pipes/truncate-word.pipe';
import { RouterModule } from '@angular/router';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';
import { SpeechFormComponent } from './components/speech-form/speech-form.component';
import { ChipsInputComponent } from './components/chips-input/chips-input.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { ToastComponent } from './components/toast/toast.component';
import { KeywordBadgeComponent } from './components/keyword-badge/keyword-badge.component';
import { LayoutSidebarComponent } from './components/layout-sidebar/layout-sidebar.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    TruncateWordPipe,
    SearchComponent,
    SpeechListComponent,
    SpeechListItemComponent,
    LayoutFooterComponent,
    SpeechFormComponent,
    ChipsInputComponent,
    LayoutHeaderComponent,
    ToastComponent,
    KeywordBadgeComponent,
    LayoutSidebarComponent
  ],
  exports: [
    TruncateWordPipe,
    SearchComponent,
    SpeechListComponent,
    SpeechListItemComponent,
    LayoutFooterComponent,
    SpeechFormComponent,
    ChipsInputComponent,
    LayoutHeaderComponent,
    ToastComponent,
    KeywordBadgeComponent,
    LayoutSidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgScrollbarModule 
  ]
})
export class SharedModule { }
