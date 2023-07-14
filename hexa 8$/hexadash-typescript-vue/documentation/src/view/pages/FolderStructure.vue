<template>
  <sdPageHeader
    class="ninjadash-page-header-main"
    title="Folder Structure"
    :routes="PageRoutes"
  />
  <Main>
    <DocumentationStyleWrap>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards headless>
            <SiteMapWrap>
              <div class="ninjadash-sitemap">
                <ul class="list-unstyled mb-0">
                  <li class="p-0 ninjadash-sitemap__parent-title">
                    <router-link
                      to="javascript: void(0);"
                      class="fw-medium fs-14"
                      >HexaDash</router-link
                    >
                  </li>
                  <li>
                    <div class="ninjadash-sitemap__first-list">
                      <div class="ninjadash-sitemap__list-wrap">
                        <router-link
                          to="javascript: void(0);"
                          class="fw-medium text-primary"
                          ><i class="ri-folder-2-line me-1 align-bottom"></i
                          >src</router-link
                        >
                      </div>
                      <ul class="ninjadash-sitemap__second-list list-unstyled">
                        <li>
                          <router-link
                            to="javascript: void(0);"
                            class="fw-medium text-primary"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >componenets</router-link
                          >
                          <ul
                            class="ninjadash-sitemap__second-list list-unstyled"
                          >
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >alerts</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >autoComplete</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >banners</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >buttons</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >cards</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >checkbox</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >color-palette</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >comments</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >datePicker</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >drawer</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >dropdown</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >header</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >maps</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >modals</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >note</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >page-headers</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >popup</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >pricing</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >slider</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >social-media</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >steps</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >table</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >tabs</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >tags</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >tasklist</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >todo</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >config</router-link
                          >
                          <ul
                            class="ninjadash-sitemap__second-list list-unstyled"
                          >
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >api</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >dataService</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >icon</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >map</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >theme</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >auth0.js</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >config.js</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >view</router-link
                          >
                          <ul
                            class="ninjadash-sitemap__second-list list-unstyled"
                          >
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >apps</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >charts</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >crud</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >dashboard</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >form</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >icons</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >pages</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >table</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >ui-elements</router-link
                              >
                            </li>

                            <li>
                              <router-link to="javascript: void(0);"
                                ><i
                                  class="ri-folder-2-line me-1 align-bottom"
                                ></i
                                >widgets</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >styled.js</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >demoData</router-link
                          >
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >i18n</router-link
                          >
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >layout</router-link
                          >
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >vuex</router-link
                          >
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >routes</router-link
                          >
                          <ul
                            class="ninjadash-sitemap__second-list list-unstyled"
                          >
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >Admin</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >auth.js</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >assets</router-link
                          >
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-folder-2-line me-1 align-bottom"></i
                            >utility</router-link
                          >
                          <ul
                            class="ninjadash-sitemap__second-list list-unstyled"
                          >
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >localStorageControl.js</router-link
                              >
                            </li>
                            <li>
                              <router-link to="javascript: void(0);"
                                ><i class="ri-file-2-line me-1 align-bottom"></i
                                >utility.js</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-file-2-line me-1 align-bottom"></i
                            >App.js</router-link
                          >
                        </li>
                        <li>
                          <router-link to="javascript: void(0);"
                            ><i class="ri-file-2-line me-1 align-bottom"></i
                            >main.js</router-link
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="ninjadash-sitemap__first-list">
                      <div class="ninjadash-sitemap__list-wrap">
                        <router-link
                          to="javascript: void(0);"
                          class="fw-medium text-primary"
                          ><i class="ri-file-2-line me-1 align-bottom"></i
                          >.env</router-link
                        >
                      </div>
                    </div>
                    <div class="ninjadash-sitemap__first-list">
                      <div class="ninjadash-sitemap__list-wrap">
                        <router-link
                          to="javascript: void(0);"
                          class="fw-medium text-primary"
                          ><i class="ri-folder-2-line me-1 align-bottom"></i
                          >.gitignore</router-link
                        >
                      </div>
                    </div>
                    <div class="ninjadash-sitemap__first-list">
                      <div class="ninjadash-sitemap__list-wrap">
                        <router-link
                          to="javascript: void(0);"
                          class="fw-medium text-primary"
                          ><i class="ri-folder-2-line me-1 align-bottom"></i
                          >vite.config.ts</router-link
                        >
                      </div>
                    </div>
                    <div class="ninjadash-sitemap__first-list">
                      <div class="ninjadash-sitemap__list-wrap">
                        <router-link
                          to="javascript: void(0);"
                          class="fw-medium text-primary"
                          ><i class="ri-folder-2-line me-1 align-bottom"></i
                          >tsconfig.json</router-link
                        >
                      </div>
                    </div>
                    <div class="ninjadash-sitemap__first-list">
                      <div class="ninjadash-sitemap__list-wrap">
                        <router-link
                          to="javascript: void(0);"
                          class="fw-medium text-primary"
                          ><i class="ri-folder-2-line me-1 align-bottom"></i
                          >package.json</router-link
                        >
                      </div>
                    </div>
                    <div class="ninjadash-sitemap__first-list">
                      <div class="ninjadash-sitemap__list-wrap">
                        <router-link
                          to="javascript: void(0);"
                          class="fw-medium text-primary"
                          ><i class="ri-folder-2-line me-1 align-bottom"></i
                          >README.md</router-link
                        >
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SiteMapWrap>
          </sdCards>
        </a-col>
      </a-row>
    </DocumentationStyleWrap>
  </Main>
</template>

<script>
import { defineComponent } from "vue";
import { Main } from "../styled";
import { DocumentationStyleWrap, SiteMapWrap } from "./style";

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "Folder Structure",
  },
];

export default defineComponent({
  components: { Main, DocumentationStyleWrap, SiteMapWrap },
  setup() {
    return {
      PageRoutes,
    };
  },
});
</script>
