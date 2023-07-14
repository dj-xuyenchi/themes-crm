<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Avatar"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Basic">
            <AvatarWraperStyle :style="{ marginBottom: 10 }">
              <a-avatar :size="64"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar size="large"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar size="small"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
            </AvatarWraperStyle>
            <AvatarWraperStyle>
              <a-avatar shape="square" :size="64"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar shape="square" size="large"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar shape="square"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar shape="square" size="small"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
            </AvatarWraperStyle>
          </sdCards>
          <sdCards title="Autoset Font Size">
            <AvatarWraperStyle>
              <div>
                <a-avatar :style="{ backgroundColor: color, verticalAlign: 'middle' }" size="large">
                  {{ user }}
                </a-avatar>
                <sdButton
                  size="sm"
                  class="btn-outlined"
                  type="light"
                  :outlined="true"
                  :style="{
                    margin: '0 10px',
                    verticalAlign: 'middle',
                    color: '#ADB4D2',
                  }"
                  @click="changeUser"
                >
                  Change
                </sdButton>
              </div>
            </AvatarWraperStyle>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Type">
            <AvatarWraperStyle>
              <a-avatar
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar
                ><template #icon><UserOutlined /></template
              ></a-avatar>
              <a-avatar>U</a-avatar>
              <a-avatar>USER</a-avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <a-avatar :style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">U</a-avatar>
              <a-avatar :style="{ backgroundColor: '#01B81A' }"
                ><template #icon><UserOutlined /></template
              ></a-avatar>
            </AvatarWraperStyle>
          </sdCards>
          <sdCards title="with badge">
            <AvatarWraperStyle>
              <span :style="{ [!rtl ? 'marginRight' : 'marginLeft']: 10 }">
                <a-badge :count="1">
                  <a-avatar shape="square"
                    ><template #icon><UserOutlined /></template
                  ></a-avatar>
                </a-badge>
              </span>
              <span>
                <a-badge dot>
                  <a-avatar shape="square"
                    ><template #icon><UserOutlined /></template
                  ></a-avatar>
                </a-badge>
              </span>
            </AvatarWraperStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { UserOutlined } from '@ant-design/icons-vue';
import config from '../../config/config';
import { AvatarWraperStyle } from './ui-elements-styled';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const { theme }: any = config;
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const { state } = useStore();
const user = ref(UserList[0]);
const color = ref(ColorList[0]);
const rtl = computed(() => state.themeLayout.rtlData);

function changeUser() {
  const index = UserList.indexOf(user.value);
  user.value = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
  color.value = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
}
</script>
