import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicLayoutComponent} from './basic-layout.component';
import {BASIC_LAYOUT_ROUTES} from '../../core/route-names';

const routes: Routes = [
  {
    path: '',
    redirectTo: BASIC_LAYOUT_ROUTES.home,
    pathMatch: 'full'
  },
  {
    path: BASIC_LAYOUT_ROUTES.home,
    component: BasicLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicLayoutRoutingModule {
}
