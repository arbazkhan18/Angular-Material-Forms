import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full' 
  },
  {
    path: 'TemplateForm',   component: TemplateFormComponent
  },
  {
    path: 'ReactiveForm',   component: ReactiveFormComponent
  },
  {
    path: 'LoginDialog',   component: LoginDialogComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
