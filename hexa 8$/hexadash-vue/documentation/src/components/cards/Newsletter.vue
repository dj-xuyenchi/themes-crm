<template>
  <NewsletterStyle>
    <img :src="require('@/static/img/icon/message.svg')" alt="" />
    <figcaption>
      <h2>Subscribe To Our Newsletter</h2>
      <p>Sed ut perspiciatis unde omnis iste natussit</p>
    </figcaption>
  </NewsletterStyle>
</template>
<script>
import { defineComponent } from "vue";
import { NewsletterStyle } from "./style";

export default defineComponent({
  components: { NewsletterStyle },
  setup() {},
});
</script>
