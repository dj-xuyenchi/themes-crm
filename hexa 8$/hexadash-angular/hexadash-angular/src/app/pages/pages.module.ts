
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';


import { SettingComponent } from './setting/setting.component';
import { AccountSettingComponent } from './setting/account-setting';
import { EditProfileComponent } from './setting/edit-profile';
import { NotificationComponent } from './setting/notification';
import { PasswordSettingComponent } from './setting/password-setting';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { BannerComponent } from './banner/banner.component';
import { SliderBannerComponent } from './banner/slider-banner';
import { SocialProfileComponent } from './setting/social-profile';

import {register} from 'swiper/element/bundle';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
register();

const antdModule = [
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzPaginationModule,
    NzDividerModule,
    NzButtonModule,
    NzListModule,
    NzTableModule,
    NzRadioModule,
    NzRateModule,
    NzTabsModule,
    NzTagModule,
    NzFormModule,
    NzDatePickerModule,
    NzSelectModule,
    NzSwitchModule,
    NzUploadModule,
    NzToolTipModule,
    NzModalModule,
    NzMessageModule,
    NzInputModule,
    AngularSvgIconModule,
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        PagesRoutingModule,
        ...antdModule
    ],
    declarations: [
        SettingComponent,
        AccountSettingComponent,
        EditProfileComponent,
        NotificationComponent,
        PasswordSettingComponent,
        SocialProfileComponent,
        GalleryComponent,
        PricingComponent,
        BannerComponent,
        SliderBannerComponent,
        BlankPageComponent,
        BlogPageComponent,
        MaintenanceComponent,
        ErrorPageComponent,
        ComingSoonComponent,
        TermsConditionsComponent
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PagesModule {}
