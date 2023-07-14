<template>
  <div>
    <sdPageHeader
      title="Firebase Integration"
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
                <h2>Firebase Integration</h2>
                <p class="highlighter mb-5">Basically Firebase use for:</p>
                <ul>
                  <li>Email and password authentication with Firebase.</li>
                  <li>
                    Social authentication with Facebook and Google, Twitter
                    etc..
                  </li>
                  <li>Manage Complete Database on Cloud</li>
                  <li>Hosting</li>
                  <li>Password recovery</li>
                  <li>Verification emails</li>
                  <li>
                    Storing and accessing the authentication state using the
                    browser's localStorage
                  </li>
                  <li>
                    There are also many other use of firebase that you can find
                    from reference which we have attach below.
                  </li>
                </ul>
                <p class="mb-0">
                  Recent versions of Node.js and NPM. You can install them from
                  their official website, React Cli installed (npm install -g
                  create-react-app)
                </p>
                <p class="highlighter">
                  Let's follow below step to secure your application
                </p>
                <h2>Step 1:</h2>
                <p class="mb-5">
                  <strong
                    >1. Setup firebase project in firebase console.</strong
                  >
                </p>
                <img
                  :src="require(`../../static/img/1.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10">Click on Get Started button</p>
                <p class="mb-5"><strong>2. Add new project</strong></p>
                <img
                  :src="require(`../../static/img/2.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10">Create new project</p>
                <img
                  :src="require(`../../static/img/3.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10">
                  Accept the controler-terms and click on Create Project
                </p>
                <p><strong>3. Go to Develop Authentication</strong></p>
                <p><strong>4. Get config object for your web app</strong></p>
                <h2>To get the config object for a Firebase Web App:</h2>
                <p class="mb-5">
                  Click the Settings icon, then select Project settings.
                </p>
                <img
                  :src="require(`../../static/img/24.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10"><strong>Go to the web app</strong></p>
                <img
                  :src="require(`../../static/img/19.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10">
                  In Your apps card, select the nickname of the app for which
                  you need a config object.
                </p>
                <img
                  :src="require(`../../static/img/20.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10">
                  Select Config from the Firebase SDK snippet pane.
                </p>
                <img
                  :src="require(`../../static/img/21.png`)"
                  alt="ninjadash
                dashboard"
                />
                <img
                  :src="require(`../../static/img/22.png`)"
                  alt="ninjadash
                dashboard"
                />
                <img
                  :src="require(`../../static/img/23.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10 mb-0">
                  Copy the config object snippet, then add it to your app's
                  HTML.
                </p>

                <p>Copy config add on config.txt</p>
                <p class="mb-5">
                  <strong
                    >5. Next, you'll need to enable Email authentication from
                    the authentication Sign-in method tab:</strong
                  >
                </p>
                <img
                  :src="require(`../../static/img/5.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10">6. Go to sign in method</p>
                <img
                  :src="require(`../../static/img/6.png`)"
                  alt="ninjadash
                dashboard"
                />
                <p class="mt-10">
                  Make disble toggle to enable, and save changes
                </p>
                <img
                  :src="require(`../../static/img/7.png`)"
                  alt="ninjadash
                dashboard"
                />
                <img
                  :src="require(`../../static/img/25.png`)"
                  alt="ninjadash dashboard"
                />
                <p class="mt-10">
                  7. Go to the authentication Users tab then click on the Add
                  user button and genarate email and password:
                </p>
                <img
                  :src="require(`../../static/img/8.png`)"
                  alt="ninjadash
                dashboard"
                />
                <img
                  :src="require(`../../static/img/11.png`)"
                  alt="ninjadash dashboard"
                />
                <h2 class="mt-35">Step 2:</h2>
                <p class="mb-0">
                  <strong>Installing Firebase in Vue</strong>
                </p>
                <prism-editor
                  :readonly="false"
                  class="my-editor height-100 mb-35"
                  v-model="fbInstall"
                  :highlight="highlighter"
                ></prism-editor>
                <p class="mb-0">
                  2. Here .env file. Add your firebase credential for using
                  HexaDash with firebase and restart your app. Don't change
                  defined variables.
                </p>
                <prism-editor
                  :readonly="false"
                  class="my-editor height-100 mb-35"
                  v-model="fbEnv"
                  :highlight="highlighter"
                ></prism-editor>
                <p class="mb-0">
                  This config file manage inside the src config database
                  firebase.js file
                </p>
                <prism-editor
                  :readonly="false"
                  class="my-editor height-100 mb-35"
                  v-model="configFb"
                  :highlight="highlighter"
                ></prism-editor>
                <p class="mb-5">
                  3. If you are using Application with Firebase and you might
                  get error from Firebase Database. Message like (FirebaseError
                  : Missing or insufficient permissions). The security rules
                  read/write set as false means no one has access to the
                  database.
                </p>
                <img
                  class="mb-35"
                  :src="require(`../../static/img/s4.png`)"
                  alt="ninjadash dashboard"
                />
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
    breadcrumbName: "Firebase Integration",
  },
];

export default defineComponent({
  name: "Firebase",
  components: {
    Main,
    DocumentationStyleWrap,
    PrismEditor,
  },
  setup() {
    const fbInstall = ref(`
  npm install firebase
         or
  yarn add firebase
    `);

    const fbEnv = ref(`
VUE_APP_FIREBASE_API_KEY = 'API_KEY'
VUE_APP_FIREBASE_AUTH_DOMAIN = 'AUTH_DOMAIN'
VUE_APP_FIREBASE_PROJECT_ID = 'PROJECT_ID'
VUE_APP_FIREBASE_STORAGE_BUCKET = 'STORAGE_BUCKET'
VUE_APP_FIREBASE_MESSAGING_SENDER_ID = 'SENDER_ID'
VUE_APP_FIREBASE_APP_ID = 'AP_ID'
VUE_APP_FIREBASE_MEASUREMENT_ID = 'MEASUREMENT_ID'
    `);

    const configFb = ref(`
{
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
}
    `);

    return {
      PageRoutes,
      fbInstall,
      fbEnv,
      configFb,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
