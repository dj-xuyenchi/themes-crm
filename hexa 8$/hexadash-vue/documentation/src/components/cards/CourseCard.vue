<template>
  <a-col :xxl="6" :lg="8" :md="12" :xs="24">
    <CourseCardWrap class="ninjadash-course-card-single">
      <a-card :bordered="false">
        <div class="ninjadash-course-card-thumbnail">
          <img
            :src="require(`../../static/img/courses/${courseData.thumbnail}`)"
            alt="ninjaDash"
          />
        </div>
        <div class="ninjadash-course-card-content">
          <h4 class="ninjadash-course-card-title">
            <router-link :to="`/app/learning/courseDetails/${courseData.id}`">{{
              courseData.title
            }}</router-link>
          </h4>
          <div class="ninjadash-course-card-author">
            <img
              :src="require(`../../static/img/avatar/${courseData.authorImg}`)"
              alt="ninjaDash"
            />
            <span class="ninjadash-course-card-author__name">{{
              courseData.author
            }}</span>
          </div>
          <div class="ninjadash-course-card-meta">
            <div class="ninjadash-course-card-meta__left">
              <span class="ninjadash-course-card-meta__pricing"
                >${{ courseData.price }}</span
              >
            </div>
            <ul class="ninjadash-course-card-meta__right">
              <li class="bg-secondary">
                <unicon name="book-alt"></unicon>
                <span>{{ courseData.lectures }} Lectures</span>
              </li>
              <li class="bg-primary">
                <unicon name="clock"></unicon>
                <span>{{ courseData.duration }} Hrs</span>
              </li>
            </ul>
          </div>
        </div>
      </a-card>
    </CourseCardWrap>
  </a-col>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import vueTypes from "vue-types";
import { CourseCardWrap } from "./style";

const CourseCard = defineComponent({
  components: { CourseCardWrap },
  props: {
    courseData: vueTypes.object,
  },
});

export default CourseCard;
</script>
