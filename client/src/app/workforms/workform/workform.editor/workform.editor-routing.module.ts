import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { WorkformEditorComponent } from './workform.editor.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: 'new', component: WorkformEditorComponent, data: { title: marker('New Workform') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class WorkformEditorRoutingModule {}
