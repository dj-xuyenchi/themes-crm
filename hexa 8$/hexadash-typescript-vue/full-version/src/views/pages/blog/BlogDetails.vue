<script setup lang="ts">
import { Main } from '../../styled';
import { onMounted, ref } from 'vue';
import cardData from '@/demoData/sampleCards.json';
import { BlogDetailsStyle } from './Style';

const pageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'details',
    breadcrumbName: 'Blog details',
  },
];

const BlogCardData = cardData.BlogCardData.slice(0, 9);

let shareLinks = ref(false);
function updateShareLinksStat() {
  if (window.pageYOffset >= 600) {
    shareLinks.value = true;
  } else {
    shareLinks.value = false;
  }
}
onMounted(() => {
  window.addEventListener('scroll', updateShareLinksStat);
});
</script>

<template>
  <sdPageHeader title="Blog Details" :routes="pageRoutes" class="ninjadash-page-header-main"></sdPageHeader>

  <Main>
    <a-row justify="center">
      <a-col :lg="15">
        <BlogDetailsStyle>
          <div class="ninjadash-blog-details">
            <div class="ninjadash-blog-featured-img">
              <img :src="`/src/assets/img/blogs/blog-details/1.png`" alt="ninjadash Blog" />
            </div>
            <div class="ninjadash-blog-content-box">
              <div class="ninjadash-blog-content">
                <h1 class="ninjadash-blog-title">Know More About Time Management System on your Daily Works</h1>
                <ul class="ninjadash-blog-meta">
                  <li class="ninjadash-blog-meta__author">
                    <img :src="`/src/assets/img/users/1.png`" alt="ninjadash blog author" />
                    <span class="ninjadash-blog-authorname">Charli Day</span>
                  </li>
                  <li class="ninjadash-blog-meta__date">01 July 2020</li>
                  <li class="ninjadash-blog-meta__category">
                    <router-link to="#">Development</router-link>
                  </li>
                  <li class="ninjadash-blog-meta__read-time">6 mins read</li>
                </ul>
                <p>
                  ”Time management” is the process of organizing and planning how to divide your time between specific
                  activities. Good time management enables you to work smarter – not harder – so that you get more done
                  in less time, even when time is tight and pressures are high. Failing to manage your time damages your
                  effectiveness and causes stress.
                </p>
                <p>
                  ”Time management” is the process of organizing and planning how to divide your time between specific
                  activities. Good time management enables you to work smarter – not harder – so that you get more done
                  enables you to work smarter.
                </p>
                <h2>What is Time Management?</h2>
                <p>
                  ”Time management” is the process of organizing and planning how to divide your time between specific
                  activities. Good time management enables you to work smarter – not harder – so that you get more done
                  in less time, even when time is tight and pressures are high. Failing to manage your time damages your
                  effectiveness and causes stress.
                </p>
                <img :src="`/src/assets/img/blogs/blog-details/2.png`" alt="ninjadash Blog" />
                <h3>How Can you Use your Time Properly?</h3>
                <p>
                  ”Time management” is the process of organizing and planning how to divide your time between specific
                  activities. Good time management enables you to work smarter – not harder – so that you get more done
                  in less time, even when time is tight and pressures are high
                </p>
                <blockquote>
                  <div class="ninjadash-blog-blockquote">
                    <p>
                      <img
                        class="ninjadash-blog-blockquote-icon-left"
                        :src="`/src/assets/img/icon/quote-left.png`"
                        alt="ninjadash blockquote"
                      />
                      Usability design is to improve the usability of a product, which is an important part to guide the
                      actual design. It can also be regarded. A month ago, I agreed to
                      <img
                        class="ninjadash-blog-blockquote-icon-right"
                        :src="`/src/assets/img/icon/quote-right.png`"
                        alt="ninjadash blockquote"
                      />
                    </p>
                    <span class="ninjadash-blog-quote-author"><strong>Daniel Brown,</strong>Founder of Company</span>
                  </div>
                </blockquote>
                <h4>Value of Time Management</h4>
                <p>
                  ”Time management” is the process of organizing and planning how to divide your time between specific
                  activities. Good time management enables you to work smarter.
                </p>
                <ul class="ninjadash-blog-list">
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--label">Trim transparent pixels on exports:</span>
                    <span class="ninjadash-blog-list__item--text"
                      >Usability design is to improve the usability of a product, which is an important.</span
                    >
                  </li>
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--label">Crash and bug fixes:</span>
                    <span class="ninjadash-blog-list__item--text"
                      >Usability design is to improve the usability of a product, which is an important part to
                      guide.</span
                    >
                  </li>
                </ul>
                <h5>How Can you Benefit from Time Management System?</h5>
                <p>
                  ”Time management” is the process of organizing and planning how to divide your time between specific
                  activities. Good time management enables you to work smarter.
                </p>
                <ul class="ninjadash-blog-list">
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--text">Only be run by an explicit user action</span>
                  </li>
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--text">Show UI in a single plugin-specific dialog</span>
                  </li>
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--text"
                      >Make a technology change (described in the next section) that avoided the privately-disclosed
                      vulnerabilities.</span
                    >
                  </li>
                </ul>
                <h5>Help Users Fill in Forms</h5>
                <p>
                  ”Time management” is the process of organizing and planning how to divide your time between specific
                  activities. Good time management enables you to work smarter..
                </p>
                <ul class="ninjadash-blog-list">
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--text">Only be run by an explicit user action</span>
                  </li>
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--text">Show UI in a single plugin-specific dialog</span>
                  </li>
                  <li class="ninjadash-blog-list__item">
                    <span class="ninjadash-blog-list__item--text"
                      >Make a technology change (described in the next section) that avoided the privately-disclosed
                      vulnerabilities.</span
                    >
                  </li>
                </ul>
              </div>
              <ul class="ninjadash-category-list">
                <li class="ninjadash-category-list__item">
                  <router-link to="#">Design Process</router-link>
                </li>
                <li class="ninjadash-category-list__item">
                  <router-link to="#">Prototype</router-link>
                </li>
                <li class="ninjadash-category-list__item">
                  <router-link to="#">Design Process</router-link>
                </li>
                <li class="ninjadash-category-list__item">
                  <router-link to="#">Prototype</router-link>
                </li>
              </ul>
              <ul class="ninjadash-social-links">
                <li>Share this article:</li>
                <li>
                  <router-link to="#" class="ninjadash-facebook">
                    <unicon name="facebook-f"></unicon>
                    <span>Share</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#" class="ninjadash-twitter">
                    <unicon name="twitter"></unicon>
                    <span>Tweet</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#" class="ninjadash-linkedin">
                    <unicon name="linkedin"></unicon>
                    <span>Share</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#" class="ninjadash-copy">
                    <unicon name="link-h"></unicon>
                    <span>Copy</span>
                  </router-link>
                </li>
              </ul>
              <div class="ninjadash-blog-author-box">
                <div class="ninjadash-blog-author-img">
                  <img :src="`/src/assets/img/users/1.png`" alt="ninjadash Blog" />
                </div>
                <div class="ninjadash-blog-author-info">
                  <span>Written By</span>
                  <span class="ninjadash-blog-author-name">Charli Day</span>
                  <p>
                    Charli Day is a British writer and social media manager specializing in dynamic branding, campaign
                    strategy and content engagement.
                  </p>
                </div>
              </div>
              <div :class="shareLinks ? 'ninjadash-share-links show' : 'ninjadash-share-links'">
                <span>Share</span>
                <ul>
                  <li>
                    <router-link to="#" class="ninjadash-facebook"><unicon name="facebook-f"></unicon> </router-link>
                  </li>
                  <li>
                    <router-link to="#" class="ninjadash-twitter"><unicon name="twitter"></unicon> </router-link>
                  </li>
                  <li>
                    <router-link to="#" class="ninjadash-linkedin"><unicon name="linkedin"></unicon> </router-link>
                  </li>
                  <li>
                    <router-link to="#" class="ninjadash-link"><unicon name="link-h"></unicon> </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </BlogDetailsStyle>
      </a-col>
    </a-row>
  </Main>
</template>
