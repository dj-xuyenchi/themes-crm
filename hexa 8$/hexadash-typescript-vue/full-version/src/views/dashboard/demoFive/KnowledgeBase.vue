<script setup lang="ts">
import { KnowledgeBaseCardWrap } from '../style';
</script>

<template>
  <sdCards headless>
    <KnowledgeBaseCardWrap>
      <figure class="ninjadash-knowledgebase-card">
        <img :src="'/src/assets/img/book-open.png'" alt="" />
        <figcaption class="ninjadash-knowledgebase-card__text">
          <h2 class="ninjadash-knowledgebase-card__title">Knowledge Base</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
          </p>
          <sdButton class="ninjadash-knowledgebase-card__action" block type="primary">Browse Article</sdButton>
        </figcaption>
      </figure>
    </KnowledgeBaseCardWrap>
  </sdCards>
</template>
