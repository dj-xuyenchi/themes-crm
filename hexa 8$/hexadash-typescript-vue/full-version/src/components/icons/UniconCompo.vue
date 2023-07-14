<script setup lang="ts">
import * as unicons from 'vue-unicons/dist/icons';
import { Icon } from './IconStyled';

interface Unicon {
  name: string;
}
</script>

<template>
  <a-row :gutter="15">
    <a-col v-for="icon of (Object.values(unicons) as Unicon[])" :xl="6" :md="12" :xs="24" :key="icon.name">
      <Icon
        v-if="
          icon.name !== 'blackberry' &&
          icon.name !== 'css3' &&
          icon.name !== 'gitlab-alt' &&
          icon.name !== 'squre-shape' &&
          icon.name !== 'right-indent' &&
          icon.name !== 'covid-19'
        "
        class="icon-single"
      >
        <unicon :name="icon.name" :width="14"></unicon>
        <span> {{ icon.name }}</span>
      </Icon>
    </a-col>
  </a-row>
</template>
