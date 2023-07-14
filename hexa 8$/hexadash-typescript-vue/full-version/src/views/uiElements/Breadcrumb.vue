<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Breadcrumb"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb>
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a to="#">Application Center</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a to="#">Application List</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>
          <sdCards title="Other Router Integration">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb :routes="routes">
                <template v-slot:itemRender="{ route, routes, paths }">
                  <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{ route.breadcrumbName }}
                  </span>
                  <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                    {{ route.breadcrumbName }}
                  </router-link>
                </template>
              </a-breadcrumb>
              {{ $route.path }}
            </BreadcrumbWrapperStyle>
          </sdCards>
          <sdCards title="Bread crumbs with drop down menu">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb>
                <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a href="">General</a>
                  <template v-slot:overlay>
                    <a-menu>
                      <a-menu-item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"> General </a>
                      </a-menu-item>
                      <a-menu-item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"> Layout </a>
                      </a-menu-item>
                      <a-menu-item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"> Navigation </a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-breadcrumb-item>
                <a-breadcrumb-item>Button</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="With Icon">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb>
                <a-breadcrumb-item>
                  <unicon name="estate"></unicon>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a to="#">Application Center</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a to="#">
                    <span>Application List</span>
                  </a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>

          <sdCards title="Configuring the Separator">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb separator=">">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a to="#">Application Center</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a to="#">Application List</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>

          <sdCards title="Configuring the Separator">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb separator="">
                <a-breadcrumb-item>Location</a-breadcrumb-item>
                <a-breadcrumb-separator>:</a-breadcrumb-separator>
                <a-breadcrumb-item>
                  <a to="#">Application Center</a>
                </a-breadcrumb-item>
                <a-breadcrumb-separator />
                <a-breadcrumb-item>
                  <a to="#">Application List</a>
                </a-breadcrumb-item>
                <a-breadcrumb-separator />
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { BreadcrumbWrapperStyle } from './ui-elements-styled';

const basePath = '/components/breadcrumb';
const routes = [
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: 'first',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: 'second',
  },
];
</script>
