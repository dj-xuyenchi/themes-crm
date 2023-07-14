<script setup lang="ts">
import { BorderLessHeading } from '../../styled';
import { InboxListStyleWrap } from '../style';

const inboxData = [
  {
    id: 1,
    user: {
      fName: 'Shane',
      lName: 'Watson',
      msg: 'We are looking a full stack developer',
    },
    time: '9:00 AM',
    theme: '#00AAFF',
  },
  {
    id: 2,
    user: {
      fName: 'Chris',
      lName: 'Dohan',
      msg: 'Well done, great work ',
      img: 'assets/img/sellers/11.png',
    },
    time: '9:30 AM',
    theme: '#00AAFF',
  },
  {
    id: 3,
    user: {
      fName: 'Robert',
      lName: 'Clinton',
      msg: 'Tonight we are going to submit new...',
    },
    time: '9:30 AM',
    theme: '#8231D3',
  },
  {
    id: 4,
    user: {
      fName: 'Daniel',
      lName: 'White',
      msg: 'Please send me final file',
      img: 'assets/img/sellers/12.png',
    },
    time: '9:30 AM',
    theme: '#8231D3',
  },
  {
    id: 5,
    user: {
      fName: 'Black',
      lName: 'Smith',
      msg: 'Good luck Tom',
    },
    time: '9:30 AM',
    theme: '#5840FF',
  },
];
</script>

<template>
  <BorderLessHeading>
    <InboxListStyleWrap>
      <sdCards title="Inbox" more>
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
        <a-list class="demo-loadmore-list" itemLayout="horizontal" :data-source="inboxData">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta :description="item.user.msg">
                <template #avatar>
                  <a-avatar v-if="item.user.img" shape="square" :src="`/src/${item.user.img}`" />

                  <a-avatar v-else shape="square" :style="{ backgroundColor: item.theme }">
                    {{ item.user.fName[0] }}
                    {{ item.user.lName[0] }}
                  </a-avatar>
                </template>
                <template #title>
                  <router-link to="#"> {{ item.user.fName }} {{ item.user.lName }} </router-link>
                </template>
              </a-list-item-meta>

              <span class="ninjadash-mail-time">{{ item.time }}</span>
            </a-list-item>
          </template>
        </a-list>
      </sdCards>
    </InboxListStyleWrap>
  </BorderLessHeading>
</template>
