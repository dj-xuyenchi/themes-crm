<template>
  <div>
    <sdPageHeader
      title="Theme configuration"
      class="ninjadash-page-header-main"
      :routes="PageRoutes"
    >
    </sdPageHeader>
    <Main>
      <DocumentationStyleWrap>
        <a-row :gutter="25">
          <a-col :sm="24" :xs="24">
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <p>
                  For customizing theme go to
                  <code>config/theme/themeVariable.js</code> and customize the
                  variables according to your necessity. HexaDash is based on
                  Ant Design. For additional changes, here is the list of available
                  variable for customization
                  <a
                    href="https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
                    >https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less</a
                  >. <strong>Using theme variables in the app.</strong>
                </p>

                <h2>Change font</h2>
                <p>
                  Simplest way to change font is to go to google fonts, select
                  fonts, click embed copy the link. Now go to
                  <code>public/index.html</code> and paste the link in head tag.
                  Please remove the links of any unused fonts from the head.
                </p>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="htmlPage"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <h2>Changing Light & Dark Mode</h2>
                <p>
                  To change layout mode to dark, go to
                  <code>src/config/config.js</code> and just set the
                  <strong>mainTemplate</strong> to
                  <strong>blackMode</strong> and <strong>darkMode</strong> to
                  <strong>true</strong>. Else set <strong>lightMode</strong> to
                  keep the white background
                </p>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="themeColor"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>

            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <h2>Side Navbar & Top Navbar Layout</h2>
                <p>
                  To change the Navbar side to top, go to
                  <code>src/config/config.js</code> and just set the topMenu to
                  true. Else set false to keep Navbar on Sidebar. You can update
                  your menu item from <code>src/layout/TopMenu.js</code> For Top
                  Navbar and <code>src/layout/MenuItem.js</code> for Side Navbar
                </p>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="layoutChange"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <h2>Change Logo</h2>
                <p>
                  To change both dark and light logo, go to
                  <code>src/layout/withAdminLayout.js</code> and change source
                  of the logo image
                </p>

                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="logoChange"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <h2>RTL Setup</h2>
                <p>
                  To change the layout to RTL set the <strong>rtl</strong> to
                  <strong>true</strong> and change the <code>dir</code> to
                  <strong>rtl</strong> from <code>public/index.html</code>
                </p>

                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="rtlSupport"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
          </a-col>
        </a-row>
      </DocumentationStyleWrap>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { defineComponent, ref } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import { DocumentationStyleWrap } from "./style";

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "Theme Configuration",
  },
];

export default defineComponent({
  name: "BlankPage",
  components: {
    Main,
    PrismEditor,
    DocumentationStyleWrap,
  },
  setup() {
    const htmlPage = ref(`
<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <meta http-equiv="X-UA-Compatible" content="chrome=1" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    + <link
      href="YOUR_FONT"
      rel="stylesheet"
    />
`);

    const themeColor = ref(`
import { themeColor } from './theme/themeVariables';

const config = {
  topMenu: false,
  rtl: false,
  darkMode: false,
  mainTemplate: 'lightMode',
};

export default config;
`);

    const layoutChange = ref(`
import { themeColor } from './theme/themeVariables';

const config = {
  topMenu: false,
  rtl: false,
  mainTemplate: 'lightMode',
  themeColor,
};

export default config;
`);

    const logoChange = ref(`
<router-link
  :class="
    topMenu && innerWidth > 991
      ? 'ninjadash-logo top-menu'
      : 'ninjadash-logo'
  "
  to="/"
>
  <img
    :src="
      !darkMode
        ? require("../static/img/Logo_Dark.svg")
        : require("../static/img/Logo_White.svg")
    "
    alt="logo"
  />
</router-link>
`);

    const rtlSupport = ref(`
import { themeColor } from './theme/themeVariables';

const config = {
  topMenu: false,
  rtl: false,
  mainTemplate: 'lightMode',
  themeColor,
};

export default config;
`);

    return {
      htmlPage,
      PageRoutes,
      themeColor,
      layoutChange,
      logoChange,
      rtlSupport,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
