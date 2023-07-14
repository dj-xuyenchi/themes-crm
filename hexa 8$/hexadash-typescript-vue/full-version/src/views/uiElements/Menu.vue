<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Menu"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="24" :xs="24">
          <sdCards title="Top Navigation">
            <a-menu v-model="current" mode="horizontal">
              <a-menu-item key="mail">
                <MailOutlined />
                Navigation One
              </a-menu-item>
              <a-menu-item key="app" disabled>
                <AppstoreOutlined />
                Navigation Two
              </a-menu-item>
              <a-sub-menu>
                <template #title>
                  <span class="submenu-title-wrapper">
                    <setting-outlined />
                    Navigation Three - Submenu
                  </span>
                </template>
                <a-menu-item-group title="Item 1">
                  <a-menu-item key="setting:1">Option 1</a-menu-item>
                  <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                  <a-menu-item key="setting:3">Option 3</a-menu-item>
                  <a-menu-item key="setting:4">Option 4</a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-menu-item key="alipay">
                <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </a-menu-item>
            </a-menu>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Vertical Menu">
            <a-menu style="width: 256px" mode="vertical">
              <a-menu-item key="1">
                <MailOutlined />
                Navigation One
              </a-menu-item>
              <a-menu-item key="2">
                <CalendarOutlined />
                Navigation Two
              </a-menu-item>
              <a-sub-menu key="sub1">
                <template v-slot:title>
                  <span><AppstoreOutlined /><span>Navigation Three</span></span>
                </template>
                <a-menu-item key="3"> Option 3 </a-menu-item>
                <a-menu-item key="4"> Option 4 </a-menu-item>
                <a-sub-menu key="sub1-2" title="Submenu">
                  <a-menu-item key="5"> Option 5 </a-menu-item>
                  <a-menu-item key="6"> Option 6 </a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <template v-slot:title>
                  <span><SettingOutlined /><span>Navigation Four</span></span>
                </template>
                <a-menu-item key="7"> Option 7 </a-menu-item>
                <a-menu-item key="8"> Option 8 </a-menu-item>
                <a-menu-item key="9"> Option 9 </a-menu-item>
                <a-menu-item key="10"> Option 10 </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Vertical Menu">
            <a-menu
              class="ninjadash-vertical_menu"
              mode="inline"
              :open-keys="openKeys"
              style="width: 256px"
              @openChange="onOpenChange"
            >
              <a-sub-menu key="sub1">
                <template v-slot:title>
                  <span><MailOutlined /><span>Navigation One</span></span>
                </template>
                <a-menu-item key="1"> Option 1 </a-menu-item>
                <a-menu-item key="2"> Option 2 </a-menu-item>
                <a-menu-item key="3"> Option 3 </a-menu-item>
                <a-menu-item key="4"> Option 4 </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <template v-slot:title>
                  <span><AppstoreOutlined /><span>Navigation Two</span></span>
                </template>
                <a-menu-item key="5"> Option 5 </a-menu-item>
                <a-menu-item key="6"> Option 6 </a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                  <a-menu-item key="7"> Option 7 </a-menu-item>
                  <a-menu-item key="8"> Option 8 </a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <template v-slot:title>
                  <span><SettingOutlined /><span>Navigation Three</span></span>
                </template>
                <a-menu-item key="9"> Option 9 </a-menu-item>
                <a-menu-item key="10"> Option 10 </a-menu-item>
                <a-menu-item key="11"> Option 11 </a-menu-item>
                <a-menu-item key="12"> Option 12 </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { MailOutlined, AppstoreOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons-vue';
import { Main } from '../styled';

let current = ['mail'];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const openKeys = ['sub1'];

const onOpenChange = (openKey: any) => {
  const latestOpenKey = openKey.find((key: any) => openKeys.indexOf(key) === -1);
  if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    openKey = openKeys;
  } else {
    openKey = latestOpenKey ? [latestOpenKey] : [];
  }
};
</script>
