<template>
  <ItemWraper>
    <date-range-picker
      class="PreviewArea"
      v-model="dateRange"
      showSelectionPreview
      direction="horizontal"
    ></date-range-picker>
  </ItemWraper>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
import { ItemWraper } from './style';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DateRangePickerOne',
  components: {
    DateRangePicker,
    ItemWraper,
  },
  data() {
    return {
      dateRange: {
        startDate: '2019-12-26',
        endDate: '2019-12-28',
      },
    };
  },
  methods: {
    dateFormat(classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date();
      }
      return classes;
    },
  },
});
</script>

<style scoped>
.slot {
  background-color: #aaa;
  padding: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text-black {
  color: #000;
}
</style>
