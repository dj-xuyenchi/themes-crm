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
              <img
                :src="require('../../../static/img/flag/english.png')"
                alt=""
              />
              <span>English</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('germany')" to="#">
              <img
                :src="require('../../../static/img/flag/germany.png')"
                alt=""
              />
              <span>Germany</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('spain')" to="#">
              <img
                :src="require('../../../static/img/flag/spain.png')"
                alt=""
              />
              <span>Spain</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('turky')" to="#">
              <img
                :src="require('../../../static/img/flag/turky.png')"
                alt=""
              />
              <span>Turky</span>
            </router-link>
          </NavAuth>
        </template>
        <a to="#" class="ninjadash-nav-action-link">
          <img :src="require(`../../../static/img/flag/${flag}.png`)" alt="" />
        </a>
      </sdDropdown>
    </div>

    <div class="ninjadash-nav-actions__item ninjadash-nav-actions__author">
      <sdPopover placement="bottomRight" action="click">
        <template v-slot:content>
          <UserDropDown>
            <div class="user-dropdown">
              <figure class="user-dropdown__info">
                <img
                  :src="require('../../../static/img/avatar/chat-auth.png')"
                  alt=""
                />
                <figcaption>
                  <sdHeading as="h5">Abdullah Bin Talha</sdHeading>
                  <p>UI Expert</p>
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
              <a @click="SignOut" class="user-dropdown__bottomAction" href="#">
                <LogoutOutlined /> Sign Out
              </a>
            </div>
          </UserDropDown>
        </template>
        <a to="#" class="ninjadash-nav-action-link">
          <a-avatar
            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
          />
          <span class="ninjadash-nav-actions__author--name">Md. Rafiq</span>
          <unicon name="angle-down"></unicon>
        </a>
      </sdPopover>
    </div>
  </InfoWraper>
</template>

<script>
import { InfoWraper, NavAuth, UserDropDown } from "./auth-info-style";
// import Support from "./Support";
import Settings from "./Settings";
import Notification from "./Notification";
import Message from "./Message";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { LogoutOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import SearchBar from "./Search.vue";

export default defineComponent({
  name: "AuthInfo",
  components: {
    InfoWraper,
    NavAuth,
    UserDropDown,
    // Support,
    Settings,
    Notification,
    Message,
    LogoutOutlined,
    SearchBar,
  },
  data() {
    return {
      flag: "english",
    };
  },
  setup() {
    const { dispatch } = useStore();
    const { push } = useRouter();
    const SignOut = (e) => {
      e.preventDefault();
      push("/auth/login");
      dispatch("logOut");
    };

    return {
      SignOut,
    };
  },
  methods: {
    onFlagChangeHandle: function (value) {
      this.flag = value;
    },
  },
});
</script>
