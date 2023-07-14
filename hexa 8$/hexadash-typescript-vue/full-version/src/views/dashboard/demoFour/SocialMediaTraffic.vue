<script setup lang="tsx">
import { computed } from 'vue';
import { SocialTrafficWrapper } from './Style';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';

const socialTraffic = [
  {
    id: 1,
    channel: 'Facebook',
    traffic: '38,536',
    type: 'primary',
    icon: 'facebook-f',
    session: '457',
    bounceRate: '60%',
    duration: '00:25:30',
  },
  {
    id: 2,
    channel: 'Instragram',
    traffic: '28,536',
    type: 'info',
    icon: 'twitter',
    session: '254',
    bounceRate: '25%',
    duration: '00:14:35',
  },
  {
    id: 4,
    channel: 'Twitter',
    traffic: '15,536',
    type: 'secondary',
    icon: 'instagram',
    session: '753',
    bounceRate: '58%',
    duration: '00:14:32',
  },
  {
    id: 5,
    channel: 'YouTube',
    traffic: '10,536',
    type: 'danger',
    icon: 'youtube',
    session: '895',
    bounceRate: '17%',
    duration: '00:19:24',
  },
];
const columns = [
  { title: 'Social Media', dataIndex: 'name', key: 'name' },
  {
    title: 'Traffic',
    dataIndex: 'traffic',
    key: 'traffic',
  },
  { title: 'Session', dataIndex: 'session', key: 'session' },
  { title: 'Bounce Rate', dataIndex: 'bounceRate', key: 'bounceRate' },
  {
    title: 'Avg. Session Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
];
const dataSource = computed(() => {
  return socialTraffic
    ? socialTraffic.map((value) => {
        const { channel, traffic, id, bounceRate, type, session, icon, duration } = value;
        return {
          key: id,
          name: (
            <div class="social-media-img  d-flex align-items-center">
              <span class={`social-media-icon bg-${type}-10 color-${type}`}>
                <unicon name={icon}></unicon>
              </span>
              <span class="social-media-title">{channel}</span>
            </div>
          ),
          traffic,
          session,
          bounceRate,
          duration,
        };
      })
    : 'Empty';
});
</script>

<template>
  <BorderLessHeading>
    <sdCards more title="Recent Seller">
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
      <TableDefaultStyle class="ninjadash-having-header-bg">
        <SocialTrafficWrapper>
          <div class="table-responsive">
            <a-table :data-source="dataSource" :columns="columns" :pagination="false" :showHeader="true" />
          </div>
        </SocialTrafficWrapper>
      </TableDefaultStyle>
    </sdCards>
  </BorderLessHeading>
</template>
