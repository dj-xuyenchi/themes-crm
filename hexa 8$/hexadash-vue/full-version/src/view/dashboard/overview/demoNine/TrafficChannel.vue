<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <sdCards title="Social Media Traffic" more>
        <template #more>
          <router-link to="#">
            <unicon name="print" width="16"></unicon>
            <span>Printer</span>
          </router-link>
          <router-link to="#">
            <unicon name="book-open" width="16"></unicon>
            <span>PDF</span>
          </router-link>
          <router-link to="#">
            <unicon name="file-alt" width="16"></unicon>
            <span>Google Sheets</span>
          </router-link>
          <router-link to="#">
            <unicon name="x" width="16"></unicon>
            <span>Excel (XLSX)</span>
          </router-link>
          <router-link to="#">
            <unicon name="file" width="16"></unicon>
            <span>CSV</span>
          </router-link>
        </template>
        <TrafficTableWrapper>
          <div class="table-bordered table-responsive">
            <a-table
              :columns="locationColumns"
              :data-source="locationData"
              :pagination="false"
              :showHeader="false"
            />
          </div>
        </TrafficTableWrapper>
      </sdCards>
    </BorderLessHeading>
  </div>
</template>
<script>
import { computed, defineComponent } from "vue";
import { TrafficTableWrapper } from "./Style";
import { BorderLessHeading } from "../../../styled";

const locationColumns = [
  {
    title: "",
    dataIndex: "channel",
    key: "channel",
    width: 200,
  },
  {
    title: "",
    dataIndex: "traffic",
    key: "traffic",
    width: 40,
  },
  {
    title: "",
    dataIndex: "percentage",
    key: "percentage",
  },
];

const trafficData = [
  {
    id: 1,
    channel: "Facebook",
    traffic: "38,536",
    percent: 90,
    progressType: "primary",
  },
  {
    id: 2,
    channel: "Instragram",
    traffic: "28,536",
    percent: 70,
    progressType: "info",
  },
  {
    id: 3,
    channel: "WhatsApp",
    traffic: "18,536",
    percent: 60,
    progressType: "success",
  },
  {
    id: 4,
    channel: "Twitter",
    traffic: "15,536",
    percent: 55,
    progressType: "secondary",
  },
  {
    id: 5,
    channel: "YouTube",
    traffic: "10,536",
    percent: 50,
    progressType: "warning",
  },
  {
    id: 6,
    channel: "LinkedIn",
    traffic: "9,536",
    percent: 45,
    progressType: "dark",
  },
];

export default defineComponent({
  components: {
    TrafficTableWrapper,
    BorderLessHeading,
  },
  setup() {
    const locationData = computed(() => {
      return trafficData.map(
        ({ id, channel, traffic, percent, progressType }) => {
          return {
            key: id,
            channel: <span class="ninjadash-social-channel">{channel}</span>,
            traffic: <span class="ninjadash-traffic">{traffic}</span>,
            percentage: (
              <a-progress
                percent={percent}
                strokeWidth={5}
                status="active"
                showInfo={false}
                class={`progress-dt progress-${progressType}`}
              />
            ),
          };
        }
      );
    });

    return {
      locationColumns,
      locationData,
    };
  },
});
</script>
