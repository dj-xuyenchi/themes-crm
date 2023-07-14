<template>
  <sdPageHeader
    class="ninjadash-page-header-main"
    title="Installation"
    :routes="PageRoutes"
  />
  <Main>
    <DocumentationStyleWrap>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards headless>
            <div class="ninjadash-template-documentation">
              <p class="mb-5">
                Welcome to HexaDash! This template will help you to build modern applications for
                the web, mobile, or desktop.
                <br />
                For getting started with this application you needs two things as
                Prerequisites.
              </p>
              <h2>Prerequisites</h2>
              <p>
                Before you begin, make sure your development environment
                includes Node and an npm package manager.
              </p>
              <h3>Node.js</h3>
              <ul>
                <li class="mb-0">
                  Download latest version of node.js from nodejs.org.
                </li>
                <li class="mb-0">Install Node.js using downloaded file</li>
                <li>
                  To check your node version, run <code>node -v</code> in a
                  terminal/console window.
                </li>
              </ul>
              <h3>Npm package manager</h3>
              <p>
                Vue CLI, and Vue apps depend on features and functionality
                provided by libraries that are available as npm packages. To
                download and install npm packages, you must have an npm package
                manager. This Quick Start uses the npm client command line
                interface, which is installed with Node.js by default. To check
                that you have the npm client installed, run npm -v in a
                terminal/console window.
              </p>
              <p>
                In addition, for better understanding on how to install Vue JS application, we suggest you to go through the
                official documentation of VueJs from
                <strong class="text-primary">https://vuejs.org/</strong>
              </p>
              <h2>Downloaded Files</h2>
              <p>
                After extract the main zip file, go to HexaDash folder and you
                will get three seperate project folder there. Use one which fits
                your needs.
              </p>
              <h2>Installation</h2>
              <ul>
                <li>
                  For starter we need to setup node js, go to
                  https://nodejs.org/en/download/ & download appropriate version
                  for your os.
                </li>
                <li>After download setup nodejs</li>
                <li>Run yarn install, wait a bit</li>
                <li>
                  Now run yarn serve, it should open up http://localhost:8080 on
                  your browser
                </li>
              </ul>
              <sdAlert closable message="" type="warning">
                <template #description>
                  Make sure you are not running any other vue project in local
                  if so then use new generated port from terminal with label
                  called app running at:
                </template>
              </sdAlert>
              <sdAlert closable message="" type="success">
                <template #description>
                  <h4>
                    Some Common solution if you do not run project successfully
                  </h4>
                  <!-- <p>Use Latest Version of node.js</p> -->
                  <p>
                    Remove node_module and package-lock.json file and again do
                    <strong>npm install</strong>
                  </p>
                  <p>
                    You can again download theme from themeforst and then again
                    run
                  </p>
                  <p>
                    Then also if you don't solve issue you can generate a
                    ticket.
                  </p>
                </template>
              </sdAlert>

              <h2>Build Application</h2>
              <p class="mb-0">Change Sub-routes path from .env file</p>
              <prism-editor
                :readonly="true"
                class="my-editor height-100"
                v-model="setPath"
                :highlight="highlighter"
              ></prism-editor>
              <p class="mb-0">
                Build you application for host on server using below command:
              </p>
              <code>yarn build</code>
              <p class="mb-0">
                Wait a bit, it will Compile, optimize, minify and uglify all
                source files
              </p>
              <p class="mb-0">
                It will create one dist file in your theme folder. Make zip of
                dist folder. so here you are ready to upload your theme on
                server.
              </p>
              <sdAlert closable message="" type="info">
                <template #description
                  ><p>
                    If you’re using <strong>Apache HTTP Server</strong> , you
                    need to create a <strong>.htaccess</strong> file in the
                    public folder by pastng below code
                  </p></template
                >
              </sdAlert>
              <prism-editor
                :readonly="false"
                class="my-editor height-100"
                v-model="htaccess"
                :highlight="highlighter"
              ></prism-editor>
              <code> </code>
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </DocumentationStyleWrap>
  </Main>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Main } from "../styled";
import { DocumentationStyleWrap } from "./style";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "installation",
  },
];

export default defineComponent({
  components: { Main, DocumentationStyleWrap, PrismEditor },
  setup() {
    const setPath = ref(`VUE_APP_SUB_ROUTE="/YOUR/PATH`);
    const htaccess = ref(`<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /your/path/
  RewriteRule ^/your/path/index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /your/path/index.html [L]
  Header set Cache-Control "max-age=0,no-store"
</IfModule>`);

    return {
      setPath,
      PageRoutes,
      htaccess,
    };
  },

  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
