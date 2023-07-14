import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  SettingComponent
} from './setting/setting.component';
import {
  GalleryComponent
} from './gallery/gallery.component';
import {
  PricingComponent
} from './pricing/pricing.component';
import {
  BannerComponent
} from './banner/banner.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


const routes: Routes = [

  {
    path: 'setting',
    component: SettingComponent,
    data: {
      title: 'Setting',
    }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: {
      title: 'Gallery',
    }
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      title: 'Pricing',
    }
  },
  {
    path: 'banner',
    component: BannerComponent,
    data: {
      title: 'Banners',
    },
  },
  {
    path: 'banner',
    component: BannerComponent,
    data: {
      title: 'Banners',
    },
  },
  {
    path: 'blog-page',
    component: BlogPageComponent,
    data: {
      title: 'Blog Page',
    },
  },
  {
    path: 'blank-page',
    component: BlankPageComponent,
    data: {
      title: 'Blank Page',
    },
  },
  {
    path: 'blog-page',
    component: BlogPageComponent,
    data: {
      title: 'Blog Page',
    },
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
    data: {
      title: 'Coming Soon',
    },
  },
  {
    path: 'error-page',
    component: ErrorPageComponent,
    data: {
      title: '404',
    },
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    data: {
      title: 'Maintenance',
    },
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
    data: {
      title: 'Terms & Conditions',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
