<template>
  <div>
    <sdPageHeader title="Knowledgebase" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <KnowledgeBaseTop />
      <KnowledgebaseArticleWrap>
        <div class="knowledgebase-article-container">
          <ArticleTabWrap class="ninjadash_article-tab">
            <div class="ninjadash_article-tab__menu">
              <nav>
                <ul>
                  <li>
                    <router-link to="/page/knowledgebase/base/plugins"
                      >Plugins</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/page/knowledgebase/base/themes"
                      >Themes</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/page/knowledgebase/base/extensions"
                      >Extensions</router-link
                    >
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <router-view></router-view>
            </div>
          </ArticleTabWrap>
          <PopularArticleWrap>
            <div
              class="ninjadash_popular-article ninjadash_popular-article-container"
            >
              <h2 class="ninjadash_popular-article__title">Popular articles</h2>
              <div
                v-masonry="containerId"
                transition-duration="0.3s"
                item-selector=".item"
                class="ant-masonry"
              >
                <div class="ninjadash_popular-article__box">
                  <a-row>
                    <a-col
                      :md="8"
                      :sm="12"
                      :xs="24"
                      v-masonry-tile
                      class="item"
                      v-for="article in articles"
                      :key="article.id"
                    >
                      <div
                        :class="`ninjadash_popular-article__single theme-${article.type}`"
                      >
                        <h4 class="single-article-title">
                          {{ article.title }}
                        </h4>
                        <p>{{ article.text }}</p>
                        <router-link
                          class="btn-link"
                          to="/page/knowledgebase/single/1"
                        >
                          Read more
                          <ArrowRightOutlined />
                        </router-link>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </PopularArticleWrap>
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
        </div>
      </KnowledgebaseArticleWrap>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../styled";
import { ArrowRightOutlined } from "@ant-design/icons-vue";

import KnowledgeBaseTop from "./overview/knowledgebase/KnowledgeTop";
import {
  KnowledgebaseArticleWrap,
  ArticleTabWrap,
  PopularArticleWrap,
  CtaWrap,
} from "./style";
import articles from "../../../demoData/article.json";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "KnowledgeBase",
  components: {
    Main,
    KnowledgeBaseTop,
    KnowledgebaseArticleWrap,
    ArticleTabWrap,
    PopularArticleWrap,
    CtaWrap,
    ArrowRightOutlined,
  },
  setup() {
    return {
      containerId: ref(0),
      articles,
    };
  },
});
</script>
