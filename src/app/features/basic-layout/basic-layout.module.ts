import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicLayoutRoutingModule } from './basic-layout-routing.module';
import {BASIC_LAYOUT_COMPONENTS} from './basic-layout.index';

@NgModule({
  declarations: [ ...BASIC_LAYOUT_COMPONENTS ],
  imports: [
    CommonModule,
    BasicLayoutRoutingModule
  ]
})
export class BasicLayoutModule { }
