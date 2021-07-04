import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersComponentModule) }]),
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutComponentModule) }]),

  Shell.childRoutes([{ path: 'workflows', loadChildren: () => import('./workflows/workflows.module').then((m) => m.WorkflowsComponentModule) }]),
  Shell.childRoutes([{ path: 'workflow', loadChildren: () => import('./workflows/workflow/workflow.editor/workflow.editor.module').then((m) => m.WorkflowEditorModule) }], true),

  Shell.childRoutes([{ path: 'workforms', loadChildren: () => import('./workforms/workforms.module').then((m) => m.WorkformsComponentModule) }]),
  Shell.childRoutes([{ path: 'workform', loadChildren: () => import('./workforms/workform/workform.editor/workform.editor.module').then((m) => m.WorkformEditorModule) }], true),

  Shell.childRoutes([{ path: 'forms', loadChildren: () => import('./forms/forms.module').then((m) => m.FormsComponentModule) }]),
  Shell.childRoutes([{ path: 'requests', loadChildren: () => import('./requests/requests.module').then((m) => m.RequestsComponentModule) }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
