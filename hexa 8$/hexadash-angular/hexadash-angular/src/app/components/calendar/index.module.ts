import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCalendarBasicComponent } from './basic';
import { NzDemoCalendarCardComponent } from './card';
import { NzDemoCalendarNoticeCalendarComponent } from './notice-calendar';
import { NzDemoCalendarSelectComponent } from './select';
import { NzDemoCalendarEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCalendarEnComponent }
    ])
  ],
  declarations: [
		NzDemoCalendarBasicComponent,
		NzDemoCalendarCardComponent,
		NzDemoCalendarNoticeCalendarComponent,
		NzDemoCalendarSelectComponent,
		NzDemoCalendarEnComponent,

  ]
})
export class NzDemoCalendarModule {

}
