import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { WorkflowEditorComponent } from './workflow.editor.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: 'new', component: WorkflowEditorComponent, data: { title: marker('New Workflow') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class WorkflowsRoutingModule {}
