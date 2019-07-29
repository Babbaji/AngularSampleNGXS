import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHARED_COMPONENTS, SHARED_PIPES} from './shared.index';

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES
  ]
})
export class SharedModule { }
