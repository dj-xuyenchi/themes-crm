<script setup lang="ts">
import { ref } from 'vue';

const openSearch = ref(false);
const openSearchBar = (e: Event) => {
  e.preventDefault();
  openSearch.value = true;
};
const closeSearchBar = (e: Event) => {
  e.preventDefault();
  openSearch.value = false;
};
</script>

<template>
  <div
    :class="
      openSearch
        ? 'ninjadash-nav-actions__item ninjadash-nav-actions__searchbar show'
        : 'ninjadash-nav-actions__item ninjadash-nav-actions__searchbar'
    "
  >
    <div class="ninjadash-searchbar">
      <a-form name="ninjadash-search">
        <a-form-item>
          <a-input placeholder="Search Here" />
        </a-form-item>
      </a-form>
    </div>
    <router-link to="#" @click="(e: Event) => openSearchBar(e)" class="ninjadash-search-icon"
      ><unicon name="search"></unicon
    ></router-link>
    <router-link to="#" @click="(e: Event) => closeSearchBar(e)" class="ninjadash-close-icon">
      <unicon name="times"></unicon>
    </router-link>
  </div>
</template>
