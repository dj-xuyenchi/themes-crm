<template>
  <KnowledgeDetailsWrap>
    <div class="knowledge-details">
      <h2 class="knowledge-details__title">Switch between accounts</h2>
      <div class="knowledge-details__single--block">
        <h4>
          <a>Configuration</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet….
        </p>
        <a class="btn-more">Read More</a>
      </div>
      <div class="knowledge-details__single--block">
        <h4>
          <a>Research and experiments</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus.
        </p>
        <div class="knowledge-details-img">
          <img
            :src="
              require(`../../../../../static/img/knowledgebase/wp-research.png`)
            "
            alt="StrikingDash"
          />
        </div>
      </div>
      <div class="knowledge-details__single--block">
        <div class="knowledge-details-collapse">
          <a-collapse v-model:activeKey="activeKey">
            <a-collapse-panel class="knowledge-details-collapse__title" key="1">
              <template #header>
                <h4>Measuring elevation</h4>
              </template>
              <div class="knowledge-details-collapse__text">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet….
                </p>
                <a class="btn-more">Read More</a>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
      <div class="knowledge-details__single--block">
        <div class="knowledge-details-collapse">
          <a-collapse v-model:activeKey="activeKeyOthers">
            <a-collapse-panel class="knowledge-details-collapse__title" key="1">
              <template #header>
                <h4>Measuring elevation</h4>
              </template>
              <div class="knowledge-details-collapse__text">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet….
                </p>
                <a class="btn-more">Read More</a>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
      <span class="knowledge-details-date-meta">
        <span class="title">Last updated:</span>
        <span class="date">June 7, 2019</span>
      </span>
      <div class="knowledge-details-cta">
        <h4 class="knowledge-details-cta__text">Was this article helpful?</h4>
        <div class="knowledge-details-cta__actions">
          <sdButton outlined type="success">
            <unicon name="smile" width="14"></unicon>
            Yes
          </sdButton>
          <sdButton outlined type="warning">
            <unicon name="frown" width="14"></unicon>
            No
          </sdButton>
        </div>
      </div>
      <div class="knowledge-details__bottom">
        <div class="knowledge-details__bottom--left">
          <span>Still need help?</span>
          <a>Submit a Request</a>
        </div>
        <div class="knowledge-details__bottom--right">
          <ul class="soical-share">
            <li>
              <span>Share this article:</span>
            </li>
            <li>
              <a>
                <font-awesome-icon :icon="faFacebookF" size="1x" />
              </a>
            </li>
            <li>
              <a>
                <font-awesome-icon :icon="faTwitter" size="1x" />
              </a>
            </li>
            <li>
              <a>
                <font-awesome-icon :icon="faPinterest" size="1x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="knowledge-details-pagination">
        <ul>
          <li class="page-next">
            <a>
              <span class="pagintaion-label">
                <font-awesome-icon icon="angle-left" size="1x" />
                <span>Previous article</span>
              </span>
              <h5 class="knowledge-details-title">
                Stop getting emails from lorem
              </h5>
            </a>
          </li>
          <li class="page-previous">
            <a>
              <span class="pagintaion-label">
                <span>Next article</span>
                <font-awesome-icon icon="angle-right" size="1x" />
              </span>
              <h5 class="knowledge-details-title">
                Use threads to organize discussions
              </h5>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="related-article-list">
      <h4 class="related-article-list__title">Related articles</h4>
      <ul class="related-article">
        <li>
          <a class="related-article__single">
            <span class="article-icon">
              <font-awesome-icon icon="file" size="1x" />
            </span>
            <h5 class="related-article__title">
              Installing lorem multi vendor marketplace
            </h5>
          </a>
        </li>
        <li>
          <a class="related-article__single">
            <span class="article-icon">
              <font-awesome-icon icon="file" size="1x" />
            </span>
            <h5 class="related-article__title">Copyright and trademarks</h5>
          </a>
        </li>
        <li>
          <a class="related-article__single">
            <span class="article-icon">
              <font-awesome-icon icon="file" size="1x" />
            </span>
            <h5 class="related-article__title">
              Stop getting emails from lorem
            </h5>
          </a>
        </li>
      </ul>
    </div>
    <div class="ninjadash_comment-form">
      <h4 class="ninjadash_comment-form__title">Leave comment</h4>
      <a-form name="comment" :model="formState" layout="vertical">
        <a-row :gutter="20">
          <a-col :sm="12" :xs="24">
            <a-form-item label="Name" name="name">
              <a-input v-model:value="formState.name" />
            </a-form-item>
          </a-col>
          <a-col :sm="12" :xs="24">
            <a-form-item label="Email Address" name="email">
              <a-input v-model:value="formState.email" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24">
            <a-form-item label="Comment" name="comment">
              <a-textarea placeholder="Basic usage" :rows="4" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24">
            <sdButton
              html-type="submit"
              class="btn-submit"
              size="lg"
              type="primary"
              raised
              key="submit"
            >
              Submit Comment
            </sdButton>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </KnowledgeDetailsWrap>
</template>

<script>
import { reactive, ref, watch, defineComponent } from "vue";
import { KnowledgeDetailsWrap } from "../../style";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default defineComponent({
  name: "SingleKnowledge",
  components: {
    KnowledgeDetailsWrap,
  },
  setup() {
    const activeKey = ref(["1"]);
    const activeKeyOthers = ref(["1"]);
    const formState = reactive({
      name: "",
      email: "",
      comment: "",
    });
    watch(activeKey, (val) => {
      console.log("activeKey", val);
    });
    return {
      activeKey,
      activeKeyOthers,
      formState,
      faFacebookF,
      faTwitter,
      faPinterest,
    };
  },
});
</script>
