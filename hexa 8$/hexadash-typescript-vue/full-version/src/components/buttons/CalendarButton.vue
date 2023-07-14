<template>
  <CustomDropDown id="dropdownParent">
    <div
      v-if="isVisible"
      class="ninjadash-range-calendar"
      placement="bottomRight"
      title="Search by Calendar"
      action="click"
    >
      <v-calendar :columns="1" is-expanded v-model="range" is-range />
    </div>
    <sdButton @click="handleVisible" size="sm" type="white">
      <unicon name="calendar-alt" width="14"></unicon>
      <span>Calendar</span>
    </sdButton>
  </CustomDropDown>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue';
import { CustomDropDown } from './styled';

export default defineComponent({
  name: 'CalendarButton',
  components: {
    CustomDropDown,
  },
  setup() {
    const range = {
      start: new Date(2021, 0, 1),
      end: new Date(2021, 0, 5),
    };
    const isVisible = ref(false);
    const handleVisible = () => {
      isVisible.value = !isVisible.value;
    };

    onMounted(() => {
      document.body.addEventListener('click', (e: any) => {
        if (e.target.closest('#dropdownParent')) {
          return false;
        } else {
          isVisible.value = false;
        }
      });
    });

    return {
      handleVisible,
      isVisible,
      range,
    };
  },
});
</script>

<style>
.ant-page-header-heading {
  overflow: visible;
}
</style>
