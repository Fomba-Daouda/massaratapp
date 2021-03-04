import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementComponent } from './element/element.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: 'element', component: ElementComponent},
  {path: 'element/:id', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ElementComponent,
                                  InfoComponent]
