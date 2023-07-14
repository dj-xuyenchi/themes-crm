<template>
  <div>
    <sdPageHeader title="All Article" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <GeneralKnowledgeTop />
      <KnowledgebaseArticleWrap>
        <div class="knowledgebase-article-container theme-2">
          <div class="ninjadash_paginaion">
            <ul>
              <li>
                <router-link
                  class="active"
                  to="/page/knowledgebase/base/plugins"
                >
                  Doc Home
                </router-link>
              </li>
              <li>
                <span>Plugins</span>
              </li>
            </ul>
          </div>
          <ArticleListWrap>
            <div class="ninjadash_articlelist">
              <div class="ninjadash_articlelist__single">
                <div class="ninjadash_articlelist__single--left">
                  <h2 class="ninjadash_article-category-title">
                    Introduction to Plugin
                  </h2>
                </div>
                <div class="ninjadash_articlelist__single--right">
                  <div class="ninjadash_article-category-links">
                    <ul>
                      <li>
                        <router-link to="/page/knowledgebase/single/1">
                          Log in and out of plugins view your success and other
                          stats
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Log in and out of Plugins</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                      <li>
                        <a-collapse v-model:activeKey="activeKey" accordion>
                          <a-collapse-panel
                            key="0"
                            header="Switch between accounts"
                          >
                            <ul>
                              <li>
                                <router-link to="#"
                                  >Log in and out of Plugins</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Reactivate your account</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                            </ul>
                          </a-collapse-panel>
                        </a-collapse>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ninjadash_articlelist__single">
                <div class="ninjadash_articlelist__single--left">
                  <h2 class="ninjadash_article-category-title">
                    Productivity tools for your Plugin admin
                  </h2>
                </div>
                <div class="ninjadash_articlelist__single--right">
                  <div class="ninjadash_article-category-links">
                    <ul>
                      <li>
                        <router-link to="/page/knowledgebase/single/1">
                          Log in and out of plugins view your success and other
                          stats
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Log in and out of Plugins</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                      <li>
                        <a-collapse v-model:activeKey="activeKey" accordion>
                          <a-collapse-panel
                            key="1"
                            header="Switch between accounts"
                          >
                            <ul>
                              <li>
                                <router-link to="#"
                                  >Log in and out of Plugins</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Reactivate your account</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                            </ul>
                          </a-collapse-panel>
                        </a-collapse>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ninjadash_articlelist__single">
                <div class="ninjadash_articlelist__single--left">
                  <h2 class="ninjadash_article-category-title">
                    Manage your account
                  </h2>
                </div>
                <div class="ninjadash_articlelist__single--right">
                  <div class="ninjadash_article-category-links">
                    <ul>
                      <li>
                        <router-link to="/page/knowledgebase/single/1">
                          Log in and out of plugins view your success and other
                          stats
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Log in and out of Plugins</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                      <li>
                        <a-collapse v-model:activeKey="activeKey" accordion>
                          <a-collapse-panel
                            key="2"
                            header="Switch between accounts"
                          >
                            <ul>
                              <li>
                                <router-link to="#"
                                  >Log in and out of Plugins</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Reactivate your account</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                            </ul>
                          </a-collapse-panel>
                        </a-collapse>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ninjadash_articlelist__single">
                <div class="ninjadash_articlelist__single--left">
                  <h2 class="ninjadash_article-category-title">
                    Manage your account
                  </h2>
                </div>
                <div class="ninjadash_articlelist__single--right">
                  <div class="ninjadash_article-category-links">
                    <ul>
                      <li>
                        <router-link to="/page/knowledgebase/single/1">
                          Log in and out of plugins view your success and other
                          stats
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Log in and out of Plugins</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                      <li>
                        <a-collapse v-model:activeKey="activeKey" accordion>
                          <a-collapse-panel
                            key="3"
                            header="Switch between accounts"
                          >
                            <ul>
                              <li>
                                <router-link to="#"
                                  >Log in and out of Plugins</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Reactivate your account</router-link
                                >
                              </li>
                              <li>
                                <router-link to="#"
                                  >Change your email</router-link
                                >
                              </li>
                            </ul>
                          </a-collapse-panel>
                        </a-collapse>
                      </li>
                      <li>
                        <router-link to="/page/knowledgebase/single/1"
                          >Switch between accounts</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <CtaWrap>
              <div class="ninjadash_knowledgebase-cta">
                <h2 class="ninjadash_knowledgebase-cta__title">
                  Still no luck? We can help!
                </h2>
                <p>Contact us and we’ll get back to you as soon as possible.</p>
                <sdButton class="btn-rqSubmit" type="primary">
                  Submit a Request
                </sdButton>
              </div>
            </CtaWrap>
          </ArticleListWrap>
        </div>
      </KnowledgebaseArticleWrap>
    </Main>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { Main } from "../../styled";
import GeneralKnowledgeTop from "./overview/GeneralKnowledgeTop";
import { KnowledgebaseArticleWrap, ArticleListWrap, CtaWrap } from "./style";
export default defineComponent({
  name: "AllArticle",
  components: {
    Main,
    GeneralKnowledgeTop,
    KnowledgebaseArticleWrap,
    ArticleListWrap,
    CtaWrap,
  },
  setup() {
    const activeKey = ref([]);
    return {
      activeKey,
    };
  },
});
</script>
