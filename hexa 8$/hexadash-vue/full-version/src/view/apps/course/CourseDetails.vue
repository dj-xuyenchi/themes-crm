<template>
  <CourseDetailsWrap>
    <sdPageHeader
      title="Course"
      :routes="pageRoutes"
      class="ninjadash-page-header-main"
    ></sdPageHeader>

    <Main>
      <a-row :gutter="25">
        <a-col
          :lg="{ span: 12, order: 1 }"
          :sm="{ span: 24, order: 2 }"
          :xs="{ span: 24, order: 2 }"
        >
          <div class="ninjadash-course-details-wrap">
            <div class="ninjadash-course-content">
              <h2 class="ninjadash-course-content-top-title">
                UI/UX Design Masters Course
              </h2>
              <div class="ninjadash-course-info">
                <p>
                  Many support queries and technical questions will already be
                  answered in supporting documentation such as and comments from
                  previous buyers. Anim pariatur cliche reprehenderit, enim
                  eiusmod
                </p>
              </div>
              <h2 class="ninjadash-course-content__title">About Instructor</h2>
              <div class="ninjadash-course-instructor">
                <img
                  :src="require(`../../../static/img/users/14.jpg`)"
                  alt="ninjadash course"
                />
                <div class="ninjadash-course-instructor__info">
                  <h5 class="ninjadash-course-instructor__name">
                    David Warner
                  </h5>
                  <span class="ninjadash-course-instructor__designation"
                    >Senior UI/UX Designer at Dribble, Top Rated Freelancer at
                    Upwork
                  </span>
                </div>
              </div>
              <h2 class="ninjadash-course-content__title">About This Course</h2>
              <p>
                User interface design or user interface engineering is the
                design of user interfaces for machines and software, such as
                computers, home appliances, mobile devices, and other electronic
                devices, with the focus on maximizing usability and the user
                experience.
              </p>
              <p class="mb-0">
                User interface design or user interface engineering is the
                design of user interfaces for machines and software, such as
                computers, home appliances, mobile devices, and other electronic
                devices, with the focus on maximizing.
              </p>
              <h2 class="ninjadash-course-content__title">
                What You Will Learn
              </h2>
              <ul class="ninjadash-course-content__list">
                <li>Basic to Advance knowledge of UI/UX Design</li>
                <li>UI/UX Design Fundamental</li>
                <li>Colour Theory</li>
                <li>Typography</li>
                <li>Design Systems</li>
                <li>Alignment</li>
                <li>User Research</li>
                <li>User Flow</li>
              </ul>
              <h2 class="ninjadash-course-content__title">Course content</h2>
              <div class="ninjadash-course-content__lectures">
                <CollapseStyleWrap>
                  <a-collapse :bordered="false" v-model:activeKey="activeKey1">
                    <template #expandIcon="{ isActive }">
                      <unicon
                        :name="isActive ? 'minus' : 'plus'"
                        :width="14"
                      ></unicon>
                    </template>
                    <a-collapse-panel
                      v-for="lecture in lectures"
                      :header="`${lecture.title}`"
                      :key="lecture.id"
                    >
                      <ModalVideo />
                      <ul>
                        <li
                          v-for="(singleClass, index) in lecture.classes"
                          :key="index"
                        >
                          <router-link
                            class="ninjadash-course-content__lecture--single js-modal-btn"
                            to="#"
                            :data-video-id="
                              index % 2 ? 'L61p2uyiMSo' : 'XJS_UYNq4No'
                            "
                          >
                            <unicon name="play"></unicon>

                            <span
                              class="ninjadash-course-content__lecture--title"
                              >{{ singleClass.classTitle }}</span
                            >
                            <div
                              class="ninjadash-course-content__lecture--extra"
                            >
                              <p>Preview</p>
                              <span
                                class="ninjadash-course-content__lecture--duration"
                                >5:00</span
                              >
                            </div>
                          </router-link>
                        </li>
                      </ul>
                    </a-collapse-panel>
                  </a-collapse>
                </CollapseStyleWrap>
              </div>
              <h2 class="ninjadash-course-content__title">FAQ</h2>
              <div class="ninjadash-course-content__faqs">
                <CollapseStyleWrap>
                  <a-collapse :bordered="false" v-model:activeKey="activeKey2">
                    <template #expandIcon="{ isActive }">
                      <unicon
                        :name="isActive ? 'minus' : 'plus'"
                        :width="14"
                      ></unicon>
                    </template>
                    <a-collapse-panel
                      header="How long does it take to download updates?"
                      key="1"
                    >
                      <p>
                        Many support queries and technical questions will
                        already be answered in supporting documentation such as
                        FAQ&rsquo;s and comments from previous buyers. Anim
                        pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck
                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                      </p>
                    </a-collapse-panel>
                    <a-collapse-panel
                      header="How to use SCSS variables to build custom color?"
                      key="2"
                    >
                      <p>
                        Many support queries and technical questions will
                        already be answered in supporting documentation such as
                        FAQ&rsquo;s and comments from previous buyers. Anim
                        pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck
                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                      </p>
                    </a-collapse-panel>
                    <a-collapse-panel
                      header="How long does it take to download updates?"
                      key="3"
                    >
                      <p>
                        Many support queries and technical questions will
                        already be answered in supporting documentation such as
                        FAQ&rsquo;s and comments from previous buyers. Anim
                        pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck
                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                      </p>
                    </a-collapse-panel>
                    <a-collapse-panel header="What is the flex layout?" key="4">
                      <p>
                        Many support queries and technical questions will
                        already be answered in supporting documentation such as
                        FAQ&rsquo;s and comments from previous buyers. Anim
                        pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck
                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                      </p>
                    </a-collapse-panel>
                    <a-collapse-panel
                      header="How long does it take to download updates?"
                      key="5"
                    >
                      <p>
                        Many support queries and technical questions will
                        already be answered in supporting documentation such as
                        FAQ&rsquo;s and comments from previous buyers. Anim
                        pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck
                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                      </p>
                    </a-collapse-panel>
                    <a-collapse-panel
                      header="Where to buy this UI dashboard?"
                      key="6"
                    >
                      <p>
                        Many support queries and technical questions will
                        already be answered in supporting documentation such as
                        FAQ&rsquo;s and comments from previous buyers. Anim
                        pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck
                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                      </p>
                    </a-collapse-panel>
                    <a-collapse-panel
                      header="How long does it take to download updates?"
                      key="7"
                    >
                      <p>
                        Many support queries and technical questions will
                        already be answered in supporting documentation such as
                        FAQ&rsquo;s and comments from previous buyers. Anim
                        pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck
                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                      </p>
                    </a-collapse-panel>
                  </a-collapse>
                </CollapseStyleWrap>
              </div>
            </div>
          </div>
        </a-col>
        <a-col
          :lg="{ span: 12, order: 2 }"
          :sm="{ span: 24, order: 1 }"
          :xs="{ span: 24, order: 1 }"
        >
          <div class="ninjadash-course-infobox">
            <div class="ninjadash-course-infobox__video">
              <iframe
                height="315"
                src="https://www.youtube.com/embed/dBd1j6x2HOo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <ul class="ninjadash-course-meta">
              <li class="ninjadash-course-meta__item">
                <span class="ninjadash-course-meta__item--icon bg-primary"
                  ><unicon name="book-alt"></unicon
                ></span>
                <span class="ninjadash-course-meta__item--text"
                  >35 Lectures</span
                >
              </li>
              <li class="ninjadash-course-meta__item">
                <span class="ninjadash-course-meta__item--icon bg-secondary"
                  ><unicon name="clock"></unicon
                ></span>
                <span class="ninjadash-course-meta__item--text">15 Hours</span>
              </li>
              <li class="ninjadash-course-meta__item">
                <span class="ninjadash-course-meta__item--icon bg-success"
                  ><unicon name="award"></unicon
                ></span>
                <span class="ninjadash-course-meta__item--text"
                  >Certificate</span
                >
              </li>
              <li class="ninjadash-course-meta__item">
                <span class="ninjadash-course-meta__item--icon bg-warning"
                  ><unicon name="sync"></unicon
                ></span>
                <span class="ninjadash-course-meta__item--text"
                  >Lifetime access</span
                >
              </li>
            </ul>
            <div class="ninjadash-course-infobox__action">
              <span class="ninjadash-course-infobox__price">$250</span>
              <sdButton size="default" type="primary"
                >Start This Course</sdButton
              >
            </div>
          </div>
        </a-col>
      </a-row>
    </Main>
  </CourseDetailsWrap>
</template>
<script>
import { defineComponent, ref } from "vue";
import { CourseDetailsWrap } from "./Style";
import { Main, CollapseStyleWrap } from "../../styled";
import ModalVideo from "../../../components/utilities/ModalVideo.vue";

const pageRoutes = [
  {
    path: "index",
    breadcrumbName: "Dashboard",
  },
  {
    path: "course",
    breadcrumbName: "Course Details",
  },
];

const lectures = [
  {
    id: "1",
    title: "Getting Started",
    classes: [
      {
        id: "1",
        classTitle: "Course Introduction",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "2",
        classTitle: "Demand of UI/UX Design",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "3",
        classTitle: "Tools",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
    ],
  },
  {
    id: "2",
    title: "User Interface Vs User Experience",
    classes: [
      {
        id: "1",
        classTitle: "Course Introduction",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "2",
        classTitle: "Demand of UI/UX Design",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "3",
        classTitle: "Tools",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
    ],
  },
  {
    id: "3",
    title: "Design Fundamental",
    classes: [
      {
        id: "1",
        classTitle: "Course Introduction",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "2",
        classTitle: "Demand of UI/UX Design",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "3",
        classTitle: "Tools",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
    ],
  },
  {
    id: "4",
    title: "Colour Theory",
    classes: [
      {
        id: "1",
        classTitle: "Course Introduction",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "2",
        classTitle: "Demand of UI/UX Design",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "3",
        classTitle: "Tools",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
    ],
  },
  {
    id: "5",
    title: "Typography",
    classes: [
      {
        id: "1",
        classTitle: "Course Introduction",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "2",
        classTitle: "Demand of UI/UX Design",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "3",
        classTitle: "Tools",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
    ],
  },
  {
    id: "6",
    title: "Live Project 01",
    classes: [
      {
        id: "1",
        classTitle: "Course Introduction",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "2",
        classTitle: "Demand of UI/UX Design",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "3",
        classTitle: "Tools",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
    ],
  },
  {
    id: "7",
    title: "Live Project 02",
    classes: [
      {
        id: "1",
        classTitle: "Course Introduction",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "2",
        classTitle: "Demand of UI/UX Design",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
      {
        id: "3",
        classTitle: "Tools",
        videoId: "L61p2uyiMSo",
        duration: "5",
      },
    ],
  },
];

export default defineComponent({
  components: { Main, CourseDetailsWrap, CollapseStyleWrap, ModalVideo },
  setup() {
    const activeKey1 = ref([1]);
    const activeKey2 = ref([1]);
    return {
      pageRoutes,
      lectures,
      activeKey1,
      activeKey2,
    };
  },
});
</script>
