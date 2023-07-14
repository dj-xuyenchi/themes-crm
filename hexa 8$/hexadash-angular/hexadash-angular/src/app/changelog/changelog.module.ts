import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ChangelogRoutingModule } from './changelog-routing.module';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ChangeLogComponent } from './changelog/changelog.component';
import { DemoComponentsShareModule } from '../components/demo-components-share/demo-components-share.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChangelogRoutingModule,
        NzCardModule,
        DemoComponentsShareModule,
        NzCollapseModule,
        NzSkeletonModule
    ],
    declarations: [
      ChangeLogComponent,
    ],
    providers: [
        ThemeConstantService
    ]
})

export class ChangelogModule {}
