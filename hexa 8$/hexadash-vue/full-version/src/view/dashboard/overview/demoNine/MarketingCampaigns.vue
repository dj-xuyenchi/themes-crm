<template>
  <BorderLessHeading>
    <sdCards title="Marketing Campaigns">
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li
              :class="
                marketingCampaigns === 'today'
                  ? 'ninjadash-active'
                  : 'ninjadash-year'
              "
            >
              <router-link
                @click="(event) => handleChangeLocation('today', event)"
                to="#"
              >
                Today
              </router-link>
            </li>
            <li
              :class="
                marketingCampaigns === 'week'
                  ? 'ninjadash-active'
                  : 'ninjadash-week'
              "
            >
              <router-link
                @click="(event) => handleChangeLocation('week', event)"
                to="#"
              >
                Week
              </router-link>
            </li>
            <li
              :class="
                marketingCampaigns === 'month'
                  ? 'ninjadash-active'
                  : 'ninjadash-month'
              "
            >
              <router-link
                @click="(event) => handleChangeLocation('month', event)"
                to="#"
              >
                Month
              </router-link>
            </li>
          </ul>
        </div>
      </template>
      <TableDefaultStyle>
        <MarketingCampaignStyle>
          <div class="table-responsive">
            <a-table
              :data-source="dataSource"
              :columns="columns"
              :pagination="false"
              :showHeader="false"
            />
          </div>
        </MarketingCampaignStyle>
      </TableDefaultStyle>
    </sdCards>
  </BorderLessHeading>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
import { MarketingCampaignStyle } from "./Style";
import { BorderLessHeading, TableDefaultStyle } from "../../../styled";
const campaignData = {
  today: [
    {
      id: 1,
      title: "Microsoft Company",
      amount: "1045,520",
      percent: 90,
      icon: "static/img/icon/microsoft.svg",
    },
    {
      id: 2,
      title: "WordPress",
      amount: "2000,520",
      percent: 80,
      icon: "static/img/icon/wordpress.svg",
    },
    {
      id: 3,
      title: "Adidas Brand",
      amount: "1520,950",
      percent: 50,
      icon: "static/img/icon/adidas.svg",
    },
    {
      id: 4,
      title: "Slack",
      amount: "7045,154",
      percent: 60,
      icon: "static/img/icon/Slack.svg",
    },
    {
      id: 5,
      title: "Adobe CC",
      amount: "1252,220",
      percent: 60,
      icon: "static/img/icon/adobe.svg",
    },
  ],
  week: [
    {
      id: 2,
      title: "WordPress",
      amount: "2000,520",
      percent: 90,
      icon: "static/img/icon/wordpress.svg",
    },
    {
      id: 1,
      title: "Microsoft Company",
      amount: "1045,520",
      percent: 80,
      icon: "static/img/icon/microsoft.svg",
    },
    {
      id: 4,
      title: "Slack",
      amount: "7045,154",
      percent: 60,
      icon: "static/img/icon/Slack.svg",
    },
    {
      id: 3,
      title: "Adidas Brand",
      amount: "1520,950",
      percent: 50,
      icon: "static/img/icon/adidas.svg",
    },
    {
      id: 5,
      title: "Adobe CC",
      amount: "1252,220",
      percent: 60,
      icon: "static/img/icon/adobe.svg",
    },
  ],
  month: [
    {
      id: 4,
      title: "Slack",
      amount: "7045,154",
      percent: 80,
      icon: "static/img/icon/Slack.svg",
    },
    {
      id: 5,
      title: "Adobe CC",
      amount: "1252,220",
      percent: 70,
      icon: "static/img/icon/adobe.svg",
    },
    {
      id: 2,
      title: "WordPress",
      amount: "2000,520",
      percent: 60,
      icon: "static/img/icon/wordpress.svg",
    },
    {
      id: 1,
      title: "Microsoft Company",
      amount: "1045,520",
      percent: 80,
      icon: "static/img/icon/microsoft.svg",
    },
    {
      id: 3,
      title: "Adidas Brand",
      amount: "1520,950",
      percent: 50,
      icon: "static/img/icon/adidas.svg",
    },
  ],
};
const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "",
    dataIndex: "percent",
    key: "percent",
  },
  {
    title: "",
    dataIndex: "progress",
    key: "progress",
  },
];
export default defineComponent({
  components: { BorderLessHeading, TableDefaultStyle, MarketingCampaignStyle },
  setup() {
    const marketingCampaigns = ref("today");

    const handleChangeLocation = (value, e) => {
      e.preventDefault();
      marketingCampaigns.value = value;
    };

    const dataSource = computed(() =>
      campaignData[marketingCampaigns.value].map((value) => {
        const { title, amount, percent, icon, id } = value;
        return {
          key: id,
          name: (
            <div class="ninjadash-info-element align-center-v">
              <img src={require(`@/${icon}`)} alt="" />
              <span class="ninjadash-info-element__text">{title}</span>
            </div>
          ),
          amount: `$${amount}`,
          percent: `${percent}%`,
          progress: (
            <a-progress
              stroke-Width={10}
              type="circle"
              showInfo={false}
              width={25}
              percent={percent}
            />
          ),
        };
      })
    );

    return {
      handleChangeLocation,
      marketingCampaigns,
      dataSource,
      columns,
    };
  },
});
</script>
