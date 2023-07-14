<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { RightAsideWrapper } from './style';
import GlightBox from '@/components/utilities/GlightBox.vue';

const { state, dispatch } = useStore();
const friends = computed(() => state.profile.friends);
const isLoading = computed(() => state.profile.isLoading);
const gallery = computed(() => state.gallery.data);
</script>

<template>
  <RightAsideWrapper>
    <sdCards title="Friends">
      <ul class="ff-widget">
        <template v-if="!isLoading">
          <li v-for="{ name, key, designation, status, img } in friends" :key="key">
            <div class="ff-info">
              <img :src="`/src/${img}`" alt="" />
              <p>
                {{ name }} <span>{{ designation }}</span>
              </p>
            </div>
            <sdButton
              :class="status ? 'btn-ff btn-following' : 'btn-ff'"
              @click="() => dispatch('profileFriendsChangeStatus', key)"
              :type="status ? 'primary' : 'white'"
            >
              <template v-if="!status">Follow</template>

              <template v-else>
                <unicon name="check"></unicon>
                Following
              </template>
            </sdButton>
          </li>
        </template>
        <p v-else>loading</p>
        <a to="#" class="btn-loadMore"> Load more friends </a>
      </ul>
    </sdCards>
    <sdCards title="Photos">
      <template #button>
        <router-link class="btn-seeAll" to="/page/gallery"> See All </router-link>
      </template>
      <div class="widget-photo-list">
        <a-row :gutter="10">
          <a-col
            v-for="({ img, id }, imageIndex) in gallery"
            :key="imageIndex"
            :xxl="8"
            :lg="12"
            :md="24"
            :sm="12"
            :xs="12"
          >
            <GlightBox v-if="id <= 6" type="image" :src="`/src/${img}`">
              <img style="width: 100%" :src="`/src/${img}`" alt="" />
            </GlightBox>
          </a-col>
        </a-row>
      </div>
    </sdCards>
    <sdCards title="Videos">
      <template #button>
        <a class="btn-seeAll" to="#"> See All </a>
      </template>
      <div class="widget-video-list">
        <a-row :gutter="10">
          <a-col v-for="{ img, id } in gallery" :key="id" :xxl="8" :lg="12" :md="24" :sm="12" :xs="12">
            <GlightBox type="video" src="https://vimeo.com/115041822" v-if="id <= 6" class="video">
              <img style="width: 100%" :src="`/src/${img}`" alt="" />
              <span>
                <unicon name="play"></unicon>
              </span>
            </GlightBox>
          </a-col>
        </a-row>
      </div>
    </sdCards>
  </RightAsideWrapper>
</template>
