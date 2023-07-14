import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppsRoutingModule } from './apps-routing.module';
import { QuillModule } from 'ngx-quill';

import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { AppsService } from '../shared/services/apps.service';
import { TableService } from '../shared/services/table.service';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { ChatComponent } from './chat/chat.component';
import { TodoListComponent } from './todo/todo.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ContactGridComponent } from './contacts/contacts-grid/contact-grid.component';
import { ContactListComponent } from './contacts/contacts-list/contact-list.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { ReadEmailComponent } from './email/read-email/read-email.component';
import { InboxSidebar } from './email/inbox/sidebar.component';
import { headerDetailsComponent } from './projects/project-details/header';
import { ProgressDetailsComponent } from './projects/project-details/progress';
import { AboutProjectComponent } from './projects/project-details/about-project';
import { UsersComponent } from './projects/project-details/users-project';
import {TaskActivitiesComponent} from './projects/project-details/task-activities';
import {TabComponent} from './projects/project-details/tab.component';
import { FileComponent } from './projects/project-details/file';

/* Chat Components */
import { ChatAsideComponent } from './chat/components/aside';
import { ChatContentsComponent } from './chat/components/contents';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PerfectScrollbarModule } from 'ngx-om-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-om-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-om-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const antdModule = [
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzRateModule,
    NzBadgeModule,
    NzProgressModule,
    NzRadioModule,
    NzTableModule,
    NzDropDownModule,
    NzTimelineModule,
    NzTabsModule,
    NzTagModule,
    NzListModule,
    NzCalendarModule,
    NzToolTipModule,
    NzFormModule,
    NzModalModule,
    NzSelectModule,
    NzUploadModule,
    NzInputModule,
    NzPaginationModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzMessageModule,
    NzSkeletonModule,
    EditorModule,
    AngularSvgIconModule.forRoot(),
    DragDropModule,
    PerfectScrollbarModule,
    FormsModule
]

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AppsRoutingModule,
        QuillModule.forRoot(),
        ...antdModule,
    ],
    exports: [
      FileComponent
    ],
    declarations: [
        ChatComponent,
        TodoListComponent,
        ProjectListComponent,
        ProjectDetailsComponent,
        ContactGridComponent,
        ContactListComponent,
        InboxComponent,
        ReadEmailComponent,
        TruncatePipe,
        ChatAsideComponent,
        ChatContentsComponent,
        InboxSidebar,
        headerDetailsComponent,
        ProgressDetailsComponent,
        AboutProjectComponent,
        UsersComponent,
        TaskActivitiesComponent,
        TabComponent,
        FileComponent,
        ChatContentsComponent
    ],
    providers: [
        ThemeConstantService,
        AppsService,
        TableService,
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})

export class AppsModule {}
