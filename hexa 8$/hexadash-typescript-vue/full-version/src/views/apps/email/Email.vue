<script setup lang="ts">
import EmailNavbar from './overview/Navbar.vue';
import ComposeMail from './overview/Compose.vue';
import { EmailWrapper, MailSideBar } from './overview/style';
import { Main } from '../../styled';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const pageRoutes = [
  {
    path: '#',
    breadcrumbName: 'Mail',
  },
  {
    path: 'inbox',
    breadcrumbName: 'Inbox',
  },
];

const path = ref(useRoute().matched[1].path);
const responsive = ref(0);
const collapsed = ref(false);
const isMailEditorOpen = ref(false);
const pageTitle = computed(() => (useRoute().matched[1] ? useRoute().matched[1].name : 'Inbox'));
const toggleMailComposer = () => {
  isMailEditorOpen.value = !isMailEditorOpen.value;
};

const closeMailCompose = () => {
  isMailEditorOpen.value = false;
};

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};

function updateSize() {
  const width = window.innerWidth;
  responsive.value = width;
}
onMounted(() => {
  updateSize();
  window.addEventListener('resize', updateSize);
});
</script>

<template>
  <sdPageHeader :title="pageTitle" class="ninjadash-page-header-main" :routes="pageRoutes"> </sdPageHeader>
  <ComposeMail v-if="isMailEditorOpen" :close="closeMailCompose" />
  <Main>
    <!-- {{ params }} -->
    <EmailWrapper>
      <a-row class="justify-content-center" :gutter="25">
        <a-col class="trigger-col" :xxl="5" :xl="7" :lg="8" :xs="24">
          <sdButton
            v-if="responsive <= 991"
            type="white"
            class="mail-sidebar-trigger ant-btn-link"
            :style="{ marginTop: 0 }"
            @click="toggleCollapsed()"
          >
            <unicon v-if="collapsed" name="align-left"></unicon>
            <unicon v-else name="align-right"></unicon>
          </sdButton>
          <div v-if="responsive > 991" class="mail-sideabr">
            <sdCards headless>
              <div class="mail-sidebar-top">
                <sdButton @click="toggleMailComposer" shape="round" type="primary" size="default" block>
                  <unicon name="plus" width="18"></unicon> <span>Compose</span>
                </sdButton>
              </div>

              <div class="mail-sidebar-bottom">
                <EmailNavbar :path="path + '/'" />
              </div>
            </sdCards>
          </div>
          <MailSideBar v-else :class="collapsed ? 'mail-sideabr show' : 'mail-sideabr hide'">
            <sdCards headless>
              <sdButton
                type="link"
                class="mail-sidebar-trigger trigger-close"
                :style="{ marginTop: 0 }"
                @click="toggleCollapsed"
              >
                <unicon name="times" width="18"></unicon>
              </sdButton>
              <div class="mail-sidebar-top">
                <sdButton @click="toggleMailComposer" shape="round" type="primary" size="default" block>
                  + Compose
                </sdButton>
              </div>

              <div class="mail-sidebar-bottom">
                <EmailNavbar :path="path + '/'" :toggleCollapsed="toggleCollapsed" />
              </div>
            </sdCards>
          </MailSideBar>
        </a-col>

        <a-col :xxl="19" :xl="17" :lg="16"> <router-view></router-view> </a-col>
      </a-row>
    </EmailWrapper>
  </Main>
</template>
