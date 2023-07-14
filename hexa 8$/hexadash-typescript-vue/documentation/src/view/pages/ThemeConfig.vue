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
                                    <code>config/theme/themeVariable.ts</code>
                                    and customize the variables according to
                                    your necessity. HexaDash is based on Ant
                                    Design. For additional changes, here is the
                                    list of available variable for customization
                                    <a
                                        href="https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
                                        >https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less</a
                                    >.
                                    <strong
                                        >Using theme variables in the
                                        app.</strong
                                    >
                                </p>

                                <h2>Change font</h2>
                                <p>
                                    Simplest way to change font is to go to
                                    google fonts, select fonts, click embed copy
                                    the link. Now go to
                                    <code>public/index.html</code> and paste the
                                    link in head tag. Please remove the links of
                                    any unused fonts from the head.
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
                                    <code>src/config/config.ts</code> and just
                                    set the <strong>mainTemplate</strong> to
                                    <strong>blackMode</strong> and
                                    <strong>darkMode</strong> to
                                    <strong>true</strong>. Else set
                                    <strong>lightMode</strong> to keep the white
                                    background
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
                                    <code>src/config/config.ts</code> and just
                                    set the topMenu to true. Else set false to
                                    keep Navbar on Sidebar. You can update your
                                    menu item from
                                    <code>src/layout/TopMenuItems.vue</code> For
                                    Top Navbar and
                                    <code>src/layout/Aside.vue</code> for Side
                                    Navbar
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
                                    <code>src/layout/AdminLayout.vue</code>
                                    and change source of the logo image
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
                                    To change the layout to RTL set the
                                    <strong>rtl</strong> to
                                    <strong>true</strong> and change the
                                    <code>dir</code> to
                                    <strong>rtl</strong> from
                                    <code>index.html</code>
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
import { Main } from '../styled';
import { defineComponent, ref } from 'vue';

import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import { DocumentationStyleWrap } from './style';

const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Theme Configuration',
    },
];

export default defineComponent({
    name: 'BlankPage',
    components: {
        Main,
        PrismEditor,
        DocumentationStyleWrap,
    },
    setup() {
        const htmlPage = ref(`
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
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
