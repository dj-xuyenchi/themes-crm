<template>
  <sdCards headless>
    <KnowledgeBaseCardWrap>
      <figure class="ninjadash-knowledgebase-card">
        <img :src="require('@/static/img/book-open.png')" alt="" />
        <figcaption class="ninjadash-knowledgebase-card__text">
          <h2 class="ninjadash-knowledgebase-card__title">Knowledge Base</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration
          </p>
          <sdButton
            class="ninjadash-knowledgebase-card__action"
            block
            type="primary"
            >Browse Article</sdButton
          >
        </figcaption>
      </figure>
    </KnowledgeBaseCardWrap>
  </sdCards>
</template>
<script>
import { defineComponent } from "vue";
import { KnowledgeBaseCardWrap } from "../../style";

export default defineComponent({
  components: { KnowledgeBaseCardWrap },
  setup() {},
});
</script>
