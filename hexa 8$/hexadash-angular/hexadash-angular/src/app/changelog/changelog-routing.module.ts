import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeLogComponent } from './changelog/changelog.component';

const routes: Routes = [
    {
        path: 'changelog',
        component: ChangeLogComponent,
        data: {
            title: 'Change Log'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChangelogRoutingModule { }
