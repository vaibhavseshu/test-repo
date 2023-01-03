import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [{path:'path1',component:TemplateformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
