import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoOneDashboardComponent } from './demo-one/demo-one.component';
import { DemoTwoDashboardComponent } from './demo-two/demo-two.component';

const routes: Routes = [
    {
        path: 'demo-one',
        component: DemoOneDashboardComponent,
        data: {
            title: 'Demo One ',
        }
    },
    {
        path: 'demo-two',
        component: DemoTwoDashboardComponent,
        data: {
            title: 'Demo Two',
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {

}
