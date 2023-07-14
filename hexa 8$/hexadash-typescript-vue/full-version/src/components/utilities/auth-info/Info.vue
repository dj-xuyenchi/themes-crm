<script setup lang="ts">
import { InfoWraper, NavAuth, UserDropDown } from './auth-info-style';
// import Support from "./Support";
import Settings from './Settings.vue';
import Notification from './Notification.vue';
import Message from './Message.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { LogoutOutlined } from '@ant-design/icons-vue';
import SearchBar from './Search.vue';

const flag: any = 'english';
const { dispatch } = useStore();
const { push } = useRouter();
const SignOut = (e: any) => {
  e.preventDefault();
  push('/auth/login');
  dispatch('logOut');
};

const onFlagChangeHandle = (value: any) => {
  flag.value = value;
};
</script>

<template>
  <InfoWraper>
    <SearchBar />
    <Message />
    <Notification />
    <Settings />
    <!-- <Support /> -->
    <div class="ninjadash-nav-actions__item ninjadash-nav-actions__language">
      <sdDropdown placement="bottomRight" :action="['click']">
        <template v-slot:overlay>
          <NavAuth>
            <router-link @click="() => onFlagChangeHandle('english')" to="#">
              <img :src="'/src/assets/img/flag/english.png'" alt="" />
              <span>English</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('germany')" to="#">
              <img :src="'/src/assets/img/flag/germany.png'" alt="" />
              <span>Germany</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('spain')" to="#">
              <img :src="'/src/assets/img/flag/spain.png'" alt="" />
              <span>Spain</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('turky')" to="#">
              <img :src="'/src/assets/img/flag/turky.png'" alt="" />
              <span>Turky</span>
            </router-link>
          </NavAuth>
        </template>
        <a to="#" class="ninjadash-nav-action-link">
          <img :src="`/src/assets/img/flag/${flag}.png`" alt="" />
        </a>
      </sdDropdown>
    </div>

    <div class="ninjadash-nav-actions__item ninjadash-nav-actions__author">
      <sdPopover placement="bottomRight" action="click">
        <template v-slot:content>
          <UserDropDown>
            <div class="user-dropdown">
              <figure class="user-dropdown__info">
                <img :src="'/src/assets/img/avatar/chat-auth.png'" alt="" />
                <figcaption>
                  <sdHeading as="h5">J. Watson</sdHeading>
                  <p>Support Engineer</p>
                </figcaption>
              </figure>
              <ul class="user-dropdown__links">
                <li>
                  <a to="#"> <unicon name="user"></unicon> Profile </a>
                </li>
                <li>
                  <a to="#"> <unicon name="setting"></unicon> Settings </a>
                </li>
                <li>
                  <a to="#"> <unicon name="dollar-sign"></unicon> Billing </a>
                </li>
                <li>
                  <a to="#"> <unicon name="users-alt"></unicon> Activity </a>
                </li>
                <li>
                  <a to="#"> <unicon name="bell"></unicon> Help </a>
                </li>
              </ul>
              <a @click="SignOut" class="user-dropdown__bottomAction" href="#"> <LogoutOutlined /> Sign Out </a>
            </div>
          </UserDropDown>
        </template>
        <a to="#" class="ninjadash-nav-action-link">
          <a-avatar :src="'/src/assets/img/avatar/chat-auth.png'" />
          <span class="ninjadash-nav-actions__author--name">Watson</span>
          <unicon name="angle-down"></unicon>
        </a>
      </sdPopover>
    </div>
  </InfoWraper>
</template>
