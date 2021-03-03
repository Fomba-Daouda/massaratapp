import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementComponent } from './element/element.component';

const routes: Routes = [
  {path: 'element', component: ElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
