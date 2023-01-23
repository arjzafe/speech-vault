import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'speeches',
    children: [
      {
        path: 'new',
        loadChildren: () => import('@app/new-speech/new-speech.module').then(m => m.NewSpeechModule)
      },
      {
        path: ':id',
        loadChildren: () => import('@app/view-speech/view-speech.module').then(m => m.ViewSpeechModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('@app/edit-speech/edit-speech.module').then(m => m.EditSpeechModule)
      },
      {
        path: 'share/:id',
        loadChildren: () => import('@app/share-speech/share-speech.module').then(m => m.ShareSpeechModule)
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
