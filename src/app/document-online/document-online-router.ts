import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path: '',
    component: ReadComponent,
  },

  {
    path: 'read/:id',
    component: GetComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentOnlineRouter { }
