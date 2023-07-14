<script lang="ts">
import { defineComponent } from 'vue';
import { Main } from '../styled';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import { TestimonialStyleWrapper } from './style';
import { useStore } from 'vuex';
import 'swiper/css';
import 'swiper/css/pagination';

export default defineComponent({
  name: 'Testimonials',
  components: {
    Main,
    Swiper,
    SwiperSlide,
    TestimonialStyleWrapper,
  },
  setup() {
    const store = useStore();
    let users = store.state.users.data;
    const paramsOne = {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    };
    const paramsTwo = {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    };
    const galleryParams = {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
    };
    const paramsThree = {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
    };
    return {
      store,
      users,
      paramsOne,
      paramsTwo,
      paramsThree,
      galleryParams,
      modules: [Navigation, Pagination],
    };
  },
});
</script>

<template>
  <div>
    <sdPageHeader title="Testimonials" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <TestimonialStyleWrapper>
            <sdCards headless>
              <div class="testimonial-block theme-1">
                <h2 class="testimonial-title">Testimonial 1</h2>
                <swiper
                  v-bind="paramsOne"
                  navigation
                  :pagination="{ clickable: true }"
                  :scrollbar="{ draggable: true }"
                >
                  <SwiperSlide v-for="(user, index) in users" :key="index + 1" class="testimonial-block__single">
                    <figure>
                      <img :src="`/src/${user.img}`" alt="" />
                      <figcaption>
                        <h2 class="client-name">{{ user.name }}</h2>
                        <p class="client-designation">{{ user.designation }}</p>
                        <p class="client-review">{{ user.content }}</p>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                </swiper>
              </div>
              <div class="testimonial-block theme-2">
                <h2 class="testimonial-title">Testimonial 2</h2>
                <Swiper v-bind="paramsTwo" navigation>
                  <SwiperSlide v-for="(user, index) in users" :key="index + 1" class="testimonial-block__single">
                    <span class="quotation">
                      <img :src="`/src/assets/img/icon/quote.png`" alt="" />
                    </span>
                    <div class="testimonial-block__author">
                      <img :src="`/src/${user.img}`" alt="" />
                      <div class="author-info">
                        <h2 class="client-name">{{ user.name }}</h2>
                        <p class="client-designation">{{ user.designation }}</p>
                      </div>
                    </div>
                    <div class="testimonial-block__review">
                      <p>
                        It is a long established fact that a reader will page when looking at its was layout. The point
                        of be distracted by the readable will page when looking at its was layout will page when
                        looking.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="testimonial-block theme-3">
                <h2 class="testimonial-title">Testimonial 3</h2>
                <div class="testimonial-wrapper">
                  <Swiper
                    v-bind="galleryParams"
                    :pagination="{
                      clickable: true,
                      renderBullet(index: any, customClass: any) {
                        const store = useStore();
                        let users = store.state.users.data;
                        return `<span class='${customClass} pagination-thumb'><img src='${`/src/${users[index].img}`}' alt='' /></span>`;
                      },
                    }"
                  >
                    <SwiperSlide v-for="(user, index) in users" :key="index + 1" class="testimonial-block__single">
                      <div class="testimonial-block__inner">
                        <div class="testimonial-block__review">
                          <p>
                            It is a long established fact that a reader will page when looking at its was layout. The
                            point of be distracted by the readable will page when looking at its was layout will page
                            when looking.
                          </p>
                        </div>
                        <div class="testimonial-block__author">
                          <div class="author-info">
                            <h2 class="author-name">{{ user.name }}</h2>
                            <p class="author-designation">
                              {{ user.designation }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div class="testimonial-block theme-4">
                <h2 class="testimonial-title">Testimonial 4</h2>
                <Swiper v-bind="paramsThree" navigation>
                  <SwiperSlide v-for="(user, index) in users" :key="index + 1" class="testimonial-block__single">
                    <div class="testimonial-block__inner">
                      <div class="testimonial-block__author">
                        <img :src="`/src/${user.img}`" alt="" />
                      </div>
                      <div class="testimonial-block__review">
                        <p>
                          It is a long established fact that a reader will page when looking at its was layout. The
                          point of be distracted by the readable will page when looking at its was layout will page when
                          looking.
                        </p>
                      </div>
                      <div class="author-info">
                        <h2 class="client-name">{{ user.name }}</h2>
                        <p class="client-designation">{{ user.designation }}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </sdCards>
          </TestimonialStyleWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>
