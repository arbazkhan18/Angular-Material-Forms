import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';

const routes: Routes = [
  {
    path: 'TemplateForm',
    component: TemplateFormComponent,
    data: { title: 'ruck fules' }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

