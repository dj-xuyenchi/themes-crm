<template>
  <sdCards headless>
    <sdModal
      class="addEvent-modal"
      :footer="null"
      type="primary"
      title="Create Event"
      :visible="isVisible"
      :onCancel="handleCancel"
    >
      <AddNewEvent :onHandleAddEvent="addNew" :defaultValue="defaultValue" />
    </sdModal>
    <div class="calendar-header">
      <div class="calendar-header__left">
        <sdButton class="btn-today" type="light" outlined>
          <router-link to="./day">Today</router-link>
        </sdButton>
        <div class="calender-head__navigation">
          <sdButton
            @click="onDecrement"
            class="btn-navigate"
            type="light"
            outlined
          >
            <unicon name="angle-left"></unicon>
          </sdButton>
          <span class="date-label">
            {{
              `${dayjs()
                .add(currentMonth, "month")
                .format("MMM YYYY")} - ${dayjs()
                .add(currentMonth + 1, "month")
                .format("MMM YYYY")}`
            }}
          </span>
          <sdButton
            @click="onIncrement"
            class="btn-navigate"
            type="light"
            outlined
          >
            <unicon name="angle-right"></unicon>
          </sdButton>
        </div>
      </div>
      <div class="calendar-header__right">
        <ul>
          <li>
            <router-link to="./day">Day</router-link>
          </li>
          <li>
            <router-link to="./week">Week</router-link>
          </li>
          <li>
            <router-link to="./month">Month</router-link>
          </li>
          <li>
            <router-link to="./year">Year</router-link>
          </li>
        </ul>
        <router-link class="schedule-list" to="./schedule">
          <unicon name="list-ul"></unicon>
          Schedule
        </router-link>
      </div>
    </div>
    <div class="emptyData">There is No Event Available</div>
    <table class="table-event schedule-event" width="100%">
      <tbody ref="dataList">
        <template
          v-for="(date, index) in [...new Set(uniqueDate)]"
          :key="index + 1"
        >
          <tr
            v-if="
              dayjs(date).format('MM') >=
                dayjs().add(currentMonth, 'month').format('MM') &&
              dayjs(date).format('MM') <=
                dayjs()
                  .add(currentMonth + 1, 'month')
                  .format('MM')
            "
          >
            <td class="schedule-time">
              <span class="schedule-date">{{
                dayjs(date).format("DD MMM")
              }}</span>
              <span class="schedule-date-name">{{
                dayjs(date).format("ddd")
              }}</span>
            </td>
            <td class="schedule-time-data">
              <a-row
                v-for="(item, ind) in events.filter(
                  (item) => item.date[0] === date
                )"
                :key="ind + 1"
              >
                <a-col :xxl="6" :xl="8" :md="6" :sm="10" :xs="24">
                  <span :class="`bullet ${item.label}`" />
                  <span class="schedule-time">
                    {{ dayjs(item.time[0], "h:mm a").format("h a") }} -
                    {{ dayjs(item.time[0], "h:mm a").format("h:mm a") }}
                  </span>
                </a-col>
                <a-col :xxl="18" :xl="16" :md="18" :sm="14" :xs="24">
                  <span class="event-title">{{ item.title }}</span>
                </a-col>
              </a-row>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </sdCards>
</template>
<script>
import dayjs from "dayjs";
import { computed, onMounted, ref, watchEffect, defineComponent } from "vue";
import { useStore } from "vuex";
import AddNewEvent from "./AddNewEvent";
import "./style.css";

const ScheduleCalendar = defineComponent({
  name: "ScheduleCalendar",
  components: { AddNewEvent },
  setup() {
    const { state, dispatch } = useStore();
    const events = computed(() => state.calendar.events);
    const isVisible = computed(() => state.calendar.eventVisible);
    const currentMonth = ref(0);
    const defaultValue = ref(dayjs().format("YYYY-MM-DD"));
    const dataList = ref(null);

    watchEffect(() => {
      if (dataList.value) {
        setTimeout(() => {
          if (dataList.value.querySelector("tr") === null) {
            document.querySelector(".emptyData").style.display = "flex";
          } else {
            document.querySelector(".emptyData").style.display = "none";
          }
        }, 500);
      }
    });

    const onIncrement = () => {
      currentMonth.value = currentMonth.value + 1;
      setTimeout(() => {
        if (dataList.value.querySelector("tr") === null) {
          document.querySelector(".emptyData").style.display = "flex";
        } else {
          document.querySelector(".emptyData").style.display = "none";
        }
      }, 50);
    };

    const onDecrement = () => {
      currentMonth.value = currentMonth.value - 1;
      setTimeout(() => {
        if (dataList.value.querySelector("tr") === null) {
          document.querySelector(".emptyData").style.display = "flex";
        } else {
          document.querySelector(".emptyData").style.display = "none";
        }
      }, 50);
    };

    const handleCancel = () => {
      dispatch("eventVisible", false);
    };

    const addNew = (event) => {
      const arrayData = [];
      events.value.map((data) => {
        return arrayData.push(data.id);
      });
      const max = Math.max(...arrayData);
      dispatch("addNewEvents", [...events.value, { ...event, id: max + 1 }]);
      dispatch("eventVisible", false);
    };
    const uniqueDate = ref([]);
    onMounted(() => {
      events.value.map((event) => {
        uniqueDate.value.push(event.date[0]);
        return false;
      });
    });

    return {
      events,
      isVisible,
      currentMonth,
      defaultValue,
      onIncrement,
      onDecrement,
      handleCancel,
      addNew,
      dataList,
      dayjs,
      uniqueDate,
    };
  },
});

export default ScheduleCalendar;
</script>
