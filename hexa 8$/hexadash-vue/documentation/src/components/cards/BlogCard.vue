<template>
  <BlogCardStyleWrap>
    <figure :class="`ninjadash-blog ninjadash-blog-${theme}`">
      <div class="ninjadash-blog-thumb">
        <img
          class="ninjadash-blog__image"
          :src="require(`@/static/img/blogs/${item.img}`)"
          alt="ninjadash Blog"
        />
      </div>
      <figcaption>
        <div
          v-if="theme === 'style-1'"
          :class="`ninjadash-blog-meta ninjadash-blog-meta-theme-1`"
        >
          <span class="ninjadash-blog-meta__single ninjadash-date-meta"
            >01 July 2020</span
          >
        </div>

        <div
          v-else-if="theme === 'style-2'"
          class="ninjadash-blog-meta ninjadash-blog-meta-theme-2"
        >
          <span class="ninjadash-blog-meta__single ninjadash-category-meta"
            >Web Development</span
          >
          <span class="ninjadash-blog-meta__single ninjadash-date-meta"
            >01 July 2020</span
          >
        </div>

        <div v-else class="ninjadash-blog-meta ninjadash-blog-meta-theme-3">
          <span class="ninjadash-blog-meta__single ninjadash-date-meta"
            >01 July 2020</span
          >
          <span class="ninjadash-blog-meta__single ninjadash-category-meta"
            >Web Development</span
          >
          <span class="ninjadash-blog-meta__single ninjadash-time-meta"
            >6 mins read</span
          >
        </div>

        <h2 class="ninjadash-blog__title">
          <router-link to="#">{{ item.title }}</router-link>
        </h2>
        <p class="ninjadash-blog__text">{{ item.content }}</p>
        <div class="ninjadash-blog__bottom">
          <div class="ninjadash-blog__author">
            <img
              class="ninjadash-blog__author-img"
              :src="require('../../static/img/chat-author/t1.jpg')"
              alt=""
            />
            <span class="ninjadash-blog__author-name">Burns Marks</span>
          </div>
          <ul class="ninjadash-blog__meta">
            <li class="ninjadash-blog__meta--item">
              <span class="like">
                <unicon name="heart"></unicon>
                <span>70</span></span
              >
            </li>
            <li class="ninjadash-blog__meta--item">
              <span class="view">
                <unicon name="file-alt"></unicon>
                <span>120</span></span
              >
            </li>
          </ul>
        </div>
      </figcaption>
    </figure>
  </BlogCardStyleWrap>
</template>
<script>
import { defineComponent } from "vue";
import VueTypes from "vue-types";
import { BlogCardStyleWrap } from "./style";

export default defineComponent({
  components: { BlogCardStyleWrap },
  props: {
    item: VueTypes.object.def({
      id: 1,
      title: "Technology Change the World",
      content:
        "Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled",
      category: "Web Development",
      img: "1.png",
      author: "Machel Bold",
      authorImg: "1.png",
      postDate: "15 March 2021",
      favouriteBy: "15k",
      viewedBy: "20k",
    }),
    theme: VueTypes.string.def("style-1"),
  },
  setup() {},
});
</script>
