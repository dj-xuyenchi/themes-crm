<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Notification"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <sdButton type="primary" size="sm" @click="openNotification"> Open the notification box </sdButton>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Custom style">
            <sdButton type="primary" size="sm" @click="openNotificationCustom"> Open the notification box </sdButton>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Custom Icon">
            <sdButton type="primary" size="sm" @click="openNotificationIcon"> Open the notification box </sdButton>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Notification with icon">
            <a-space class="ninjadash-action-btn-list">
              <sdButton type="success" size="sm" @click="() => openNotificationWithIcon('success')"> Success </sdButton>
              <sdButton type="info" size="sm" @click="() => openNotificationWithIcon('info')"> Info </sdButton>
              <sdButton type="warning" size="sm" @click="() => openNotificationWithIcon('warning')"> Warning </sdButton>
              <sdButton type="error" size="sm" @click="() => openNotificationWithIcon('error')"> Error </sdButton>
            </a-space>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Placement">
            <a-space class="ninjadash-action-btn-list">
              <sdButton type="primary" size="sm" @click="openNotificationPlacement('topLeft')">
                <RadiusUpleftOutlined />

                <span>topLeft</span>
              </sdButton>
              <sdButton type="primary" size="sm" @click="openNotificationPlacement('topRight')">
                <RadiusUprightOutlined />
                <span>topRight</span>
              </sdButton>
            </a-space>
            <a-divider />
            <a-space class="ninjadash-action-btn-list">
              <sdButton type="primary" size="sm" @click="openNotificationPlacement('bottomLeft')">
                <RadiusBottomleftOutlined />
                <span>bottomLeft</span>
              </sdButton>
              <sdButton type="primary" size="sm" @click="openNotificationPlacement('bottomRight')">
                <RadiusBottomrightOutlined />
                <span>bottomRight</span>
              </sdButton>
            </a-space>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="tsx">
import { Main } from '../styled';
import { notification } from 'ant-design-vue';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons-vue';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const openNotificationCustom = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: '600px',
      marginLeft: `${335 - 600}px`,
    },
  });
};
const openNotificationIcon = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <unicon name="smile" width="14" style="fill: #108ee9"></unicon>,
  });
};
const openNotificationWithIcon = (type: 'success' | 'info' | 'warning' | 'error') => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
const openNotificationPlacement = (placement: any) => {
  notification.open({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};
</script>
