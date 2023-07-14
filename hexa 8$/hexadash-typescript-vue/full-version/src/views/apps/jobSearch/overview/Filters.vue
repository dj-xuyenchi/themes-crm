<script setup lang="tsx">
import { ref } from 'vue';
import Slider from '@/components/slider/Slider.vue';
import { Sidebar, SidebarSingle } from '../Style';

const optionsJobTypes = [
  {
    label: (
      <>
        Freelance <span class="brand-count">25</span>
      </>
    ),
    value: 'freelance',
  },
  {
    label: (
      <>
        Full Time <span class="brand-count">25</span>
      </>
    ),
    value: 'full',
  },
  {
    label: (
      <>
        Part Time <span class="brand-count">25</span>
      </>
    ),
    value: 'part',
  },
  {
    label: (
      <>
        Internship <span class="brand-count">25</span>
      </>
    ),
    value: 'internship',
  },
  {
    label: (
      <>
        Contract <span class="brand-count">25</span>
      </>
    ),
    value: 'contract',
  },
  {
    label: (
      <>
        Temporary <span class="brand-count">25</span>
      </>
    ),
    value: 'temporary',
  },
];

const industry = [
  {
    label: (
      <>
        Designer Graphics <span class="brand-count">25</span>
      </>
    ),
    value: 'Graphics',
  },
  {
    label: (
      <>
        Development <span class="brand-count">25</span>
      </>
    ),
    value: 'Development',
  },
  {
    label: (
      <>
        Management <span class="brand-count">25</span>
      </>
    ),
    value: 'Management',
  },
  {
    label: (
      <>
        Finance <span class="brand-count">25</span>
      </>
    ),
    value: 'Finance',
  },
  {
    label: (
      <>
        Banking <span class="brand-count">25</span>
      </>
    ),
    value: 'Banking',
  },
  {
    label: (
      <>
        Customer Support <span class="brand-count">25</span>
      </>
    ),
    value: 'Customer Support',
  },
];

const salary = [
  {
    label: (
      <>
        Hourly <span class="brand-count">25</span>
      </>
    ),
    value: 'Hourly',
  },
  {
    label: (
      <>
        Weekly <span class="brand-count">25</span>
      </>
    ),
    value: 'Weekly',
  },
  {
    label: (
      <>
        Monthly <span class="brand-count">25</span>
      </>
    ),
    value: 'Monthly',
  },
  {
    label: (
      <>
        Yearly <span class="brand-count">25</span>
      </>
    ),
    value: 'Yearly',
  },
];

const datePosted = [
  {
    label: (
      <>
        Last Hour <span class="brand-count">25</span>
      </>
    ),
    value: 'last',
  },
  {
    label: (
      <>
        Last 24 hours <span class="brand-count">25</span>
      </>
    ),
    value: '24h',
  },
  {
    label: (
      <>
        7 days <span class="brand-count">25</span>
      </>
    ),
    value: '7d',
  },
  {
    label: (
      <>
        14 days <span class="brand-count">25</span>
      </>
    ),
    value: '14d',
  },
  {
    label: (
      <>
        30 days <span class="brand-count">25</span>
      </>
    ),
    value: '30d',
  },
  {
    label: (
      <>
        All <span class="brand-count">25</span>
      </>
    ),
    value: 'all',
  },
];

const min = ref(10);
const max = ref(100);
const optionsValue = ref('freelance');
let current = ref(30);
const onChange = (value: any) => {
  current.value = value;
};
</script>

<template>
  <Sidebar>
    <sdCards>
      <template #title>
        <div class="filter-title">
          <unicon name="sliders-v-alt" width="14"></unicon>
          <span>Filters</span>
        </div>
      </template>
      <SidebarSingle class="mb-30">
        <sdHeading as="h5">Distance</sdHeading>
        <p class="price-range-text">Within {{ current }} miles of <strong>New York, NY</strong></p>
        <Slider @onChange="onChange" :min="min" :max="max" :defaultValue="current" />
        <p class="price-range-value">
          <span>{{ min }} miles</span> <span>{{ max }} miles</span>
        </p>
      </SidebarSingle>

      <SidebarSingle class="mb-30">
        <sdHeading as="h5">Job Types</sdHeading>
        <a-checkbox-group :options="optionsJobTypes" />

        <div class="sidebar-single__action">
          <router-link class="btn-seeMore" to="#"> See more </router-link>
        </div>
      </SidebarSingle>

      <SidebarSingle class="mb-30">
        <sdHeading as="h5">Industry</sdHeading>
        <a-checkbox-group :options="industry" />

        <div class="sidebar-single__action">
          <router-link class="btn-seeMore" to="#"> See more </router-link>
        </div>
      </SidebarSingle>
      <SidebarSingle class="mb-30">
        <sdHeading as="h5">Salary</sdHeading>
        <a-checkbox-group :options="salary" />

        <div class="sidebar-single__action">
          <router-link class="btn-seeMore" to="#"> See more </router-link>
        </div>
      </SidebarSingle>
      <SidebarSingle class="mb-30">
        <sdHeading as="h5">Date Posted</sdHeading>
        <a-checkbox-group :options="datePosted" />
      </SidebarSingle>
    </sdCards>
  </Sidebar>
</template>
