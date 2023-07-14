<script setup lang="ts">
import { NewsletterStyle } from './style';
</script>

<template>
  <NewsletterStyle>
    <div class="newsletter-content">
      <h4>Subscribe To Our Newsletter</h4>
      <p>We notify you once any post is published</p>
      <sdButton type="primary" size="sm">Subscribe</sdButton>
    </div>
    <div class="newsletter-shape">
      <img :src="'/src/assets/img/new-message.png'" alt="" />
    </div>
  </NewsletterStyle>
</template>
