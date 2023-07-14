<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { NinjadashTopDropdown } from './auth-info-style';
</script>

<template>
  <div class="ninjadash-nav-actions__item ninjadash-nav-actions__message">
    <sdPopover placement="bottomLeft" action="click">
      <template v-slot:content>
        <NinjadashTopDropdown class="ninjadash-top-dropdown">
          <sdHeading class="ninjadash-top-dropdown__title" as="h5">
            <span class="title-text">Messages</span>
            <a-badge class="badge-success" count="3" />
          </sdHeading>
          <div class="ninjadash-top-dropdown-menu">
            <perfect-scrollbar
              :options="{
                wheelSpeed: 1,
                swipeEasing: true,
                suppressScrollX: true,
              }"
            >
              <ul class="ninjadash-top-dropdown__nav">
                <li>
                  <a to="#">
                    <figure class="ninjadash-top-dropdown__content">
                      <img :src="'/src/assets/img/avatar/NoPath.png'" alt="" />
                      <figcaption>
                        <sdHeading as="h5"> Software <span class="color-success">3 hrs ago </span> </sdHeading>
                        <div>
                          <span class="ninjadash-top-dropdownText">Lorem ipsum dolor amet cosec...</span>
                          <span>
                            <a-badge class="badge-success" count="3" />
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a to="#">
                    <figure class="ninjadash-top-dropdown__content">
                      <img :src="'/src/assets/img/avatar/NoPath.png'" alt="" />
                      <figcaption>
                        <sdHeading as="h5"> Software <span class="color-success">3 hrs ago</span> </sdHeading>
                        <div>
                          <span class="ninjadash-top-dropdownText">Lorem ipsum dolor amet cosec...</span>
                          <span>
                            <a-badge class="badge-success" count="3" />
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a to="#">
                    <figure class="ninjadash-top-dropdown__content">
                      <img :src="'/src/assets/img/avatar/NoPath.png'" alt="" />
                      <figcaption>
                        <sdHeading as="h5"> Software <span class="color-success">3 hrs ago</span> </sdHeading>
                        <div>
                          <span class="ninjadash-top-dropdownText">Lorem ipsum dolor amet cosec...</span>
                          <span>
                            <a-badge class="badge-success" count="3" />
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a to="#">
                    <figure class="ninjadash-top-dropdown__content">
                      <img :src="'/src/assets/img/avatar/NoPath.png'" alt="" />
                      <figcaption>
                        <sdHeading as="h5"> Software <span class="color-success">3 hrs ago</span> </sdHeading>
                        <div>
                          <span class="ninjadash-top-dropdownText">Lorem ipsum dolor amet cosec...</span>
                          <span>
                            <a-badge class="badge-success" count="3" />
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a to="#">
                    <figure class="ninjadash-top-dropdown__content">
                      <img :src="'/src/assets/img/avatar/NoPath.png'" alt="" />
                      <figcaption>
                        <sdHeading as="h5"> Software <span class="color-success">3 hrs ago</span> </sdHeading>
                        <div>
                          <span class="ninjadash-top-dropdownText">Lorem ipsum dolor amet cosec...</span>
                          <span>
                            <a-badge class="badge-success" count="3" />
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <ul />
              </ul>
            </perfect-scrollbar>
          </div>
          <router-link class="btn-seeAll" to="#"> See all messages </router-link>
        </NinjadashTopDropdown>
      </template>
      <a-badge dot :offset="[-8, -5]" status="success">
        <a to="#" class="ninjadash-nav-action-link">
          <img :src="'/src/assets/img/icon/message2.svg'" />
        </a>
      </a-badge>
    </sdPopover>
  </div>
</template>

<style scoped>
.ps {
  height: 200px;
}
</style>
