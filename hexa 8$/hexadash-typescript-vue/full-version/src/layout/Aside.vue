<script setup lang="ts">
import { computed, reactive, ref, toRefs, watch, watchEffect, defineComponent } from 'vue';
//import type { PropType } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import versions from '../demoData/changelog.json';
import { NavTitle } from './style';

const props = defineProps({
  toggleCollapsed: {
    type: Function,
    required: true,
  },
  events: {
    type: Object,
    required: true,
  },
});

const store = useStore();
const darkMode = computed(() => store.state.themeLayout.data);
const mode = ref('inline');
const { events } = toRefs(props);
const { onRtlChange, onLtrChange, modeChangeDark, modeChangeLight, modeChangeTopNav, modeChangeSideNav } = events.value;

const router = computed(() => useRoute());
const state = reactive({
  rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
  selectedKeys: ['home'],
  openKeys: ['dashboard'],
  preOpenKeys: ['dashboard'],
});

const onOpenChange = (keys: any) => {
  state.openKeys = keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys;
};

const onClick = (item: { keyPath: any }) => {
  if (item.keyPath.length === 1) state.openKeys = [];
};

watchEffect(() => {
  if (router.value.matched.length) {
    if (router.value.matched.length > 2) {
      state.selectedKeys = [router.value.matched[2]?.name].filter((x) => x !== undefined) as string[];
      state.openKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.preOpenKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
    } else if (router.value.matched.length > 3) {
      state.selectedKeys = [router.value.matched[3]?.name].filter((x) => x !== undefined) as string[];
      state.openKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.preOpenKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
    } else {
      state.selectedKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.openKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.preOpenKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
    }
  }
});

watch(
  () => state.openKeys,
  (val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);
</script>

<template>
  <a-menu
    :open-keys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    :mode="mode"
    :theme="darkMode ? 'dark' : 'light'"
    class="scroll-menu"
    @openChange="onOpenChange"
    @click="onClick"
  >
    <a-sub-menu key="dashboard">
      <template #icon>
        <unicon name="create-dashboard"></unicon>
      </template>
      <template #title>Dashboard</template>
      <a-menu-item @click="toggleCollapsed" key="home-one">
        <router-link to="/demo-one"> Demo 1 </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="home-two">
        <router-link to="/demo-two"> Demo 2 </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="home-three">
        <router-link to="/demo-three"> Demo 3 </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="home-four">
        <router-link to="/demo-four"> Demo 4 </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="home-five">
        <router-link to="/demo-five"> Demo 5 </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="layout">
      <template #icon>
        <unicon name="window-section"></unicon>
      </template>
      <template #title>Layouts</template>
      <a-menu-item @click="toggleCollapsed" key="topMenu">
        <a
          @click="
            (e) => {
              e.preventDefault();
              toggleCollapsed();
              modeChangeTopNav();
            }
          "
          to="#"
        >
          Top Menu
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="sideMenu">
        <a
          @click="
            (e) => {
              e.preventDefault();
              toggleCollapsed();
              modeChangeSideNav();
            }
          "
          to="#"
        >
          Side Menu
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="rtl">
        <a
          @click="
            (e) => {
              e.preventDefault();
              toggleCollapsed();
              onRtlChange();
            }
          "
          to="#"
        >
          RTL
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="ltr">
        <a
          @click="
            (e) => {
              e.preventDefault();
              toggleCollapsed();
              onLtrChange();
            }
          "
          to="#"
        >
          LTR
        </a>
      </a-menu-item>
    </a-sub-menu>

    <a-menu-item @click="toggleCollapsed" key="changelog">
      <template #icon>
        <unicon name="arrow-growth"></unicon>
      </template>
      <router-link to="/changelog">
        Changelog
        <span class="badge badge-primary menuItem">{{ versions[0].version }}</span>
      </router-link>
    </a-menu-item>

    <NavTitle class="ninjadash-sidebar-nav-title">Applications</NavTitle>
    <a-sub-menu key="mail">
      <template #icon>
        <unicon name="envelope"></unicon>
      </template>
      <template #title>Email</template>
      <a-menu-item @click="toggleCollapsed" key="inbox">
        <router-link to="/app/mail/inbox"> Inbox </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="singleMail">
        <router-link to="/app/mail-single/1585118055048"> Read Email </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="chat">
      <template #icon>
        <unicon name="chat"></unicon>
      </template>
      <template #title>Chat</template>
      <a-menu-item @click="toggleCollapsed" key="privateSingle">
        <router-link to="/app/chat/private/rofiq@gmail.com"> Private </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="groupSingle">
        <router-link to="/app/chat/group/1"> Group </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="allSingle">
        <router-link to="/app/chat/all/rofiq@gmail.com"> All </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="ecommerce">
      <template #icon>
        <unicon name="shopping-cart"></unicon>
      </template>
      <template #title>eCommerce</template>
      <a-menu-item @click="toggleCollapsed" key="ecommerce-product">
        <router-link to="/app/ecommerce/product/grid"> Products </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="detail">
        <router-link to="/app/ecommerce/productDetails/5"> Product Detail </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="add-product">
        <router-link to="/app/ecommerce/add-product"> Product Add </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="edit-product">
        <router-link to="/app/ecommerce/edit-product"> Product Update </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="orders">
        <router-link to="/app/ecommerce/orders"> Orders </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="sellers">
        <router-link to="/app/ecommerce/sellers"> Sellers </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="invoice">
        <router-link to="/app/ecommerce/invoice"> Invoice </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="cart">
        <router-link to="/app/ecommerce/cart"> Cart </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="social">
      <template #icon>
        <unicon name="500px"></unicon>
      </template>
      <template #title>Social App</template>
      <a-menu-item @click="toggleCollapsed" key="overview">
        <router-link to="/app/social/profile/overview"> My Profile </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="timeline">
        <router-link to="/app/social/profile/timeline"> Timeline </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="activity">
        <router-link to="/app/social/profile/activity"> Activity </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="project">
      <template #icon>
        <unicon name="bag"></unicon>
      </template>
      <template #title>Projects</template>
      <a-menu-item @click="toggleCollapsed" key="project-grid">
        <router-link to="/app/project/project-grid"> Project Grid </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="project-list">
        <router-link to="/app/project/project-list"> Project List </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="createProject">
        <router-link to="/app/createProject/create-grid"> Project Create </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="projectDetails">
        <router-link to="/app/project/projectDetails/1"> Project Details </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="jobSearch">
      <template #icon>
        <unicon name="headphones"></unicon>
      </template>
      <template #title>Job Search</template>
      <a-menu-item @click="toggleCollapsed" key="grid">
        <router-link to="/app/jobSearch/grid"> Grid Style </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="list">
        <router-link to="/app/jobSearch/list"> List Style </router-link>
      </a-menu-item>
    </a-sub-menu>

    <NavTitle class="ninjadash-sidebar-nav-title">CRUD</NavTitle>
    <a-sub-menu key="axios">
      <template #icon>
        <unicon name="server"></unicon>
      </template>
      <template #title>Axios</template>
      <a-menu-item @click="toggleCollapsed" key="axios-view">
        <router-link to="/crud/axios-view"> View All </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="axios-add">
        <router-link to="/crud/axios-add"> Add New </router-link>
      </a-menu-item>
    </a-sub-menu>

    <NavTitle class="ninjadash-sidebar-nav-title">FEATURES</NavTitle>
    <a-sub-menu key="components">
      <template #icon>
        <unicon name="layer-group"></unicon>
      </template>
      <template #title>UI Elements</template>
      <a-menu-item @click="toggleCollapsed" key="alerts">
        <router-link to="/components/alerts"> Alerts </router-link>
      </a-menu-item>

      <a-menu-item @click="toggleCollapsed" key="avatar">
        <router-link to="/components/avatar"> Avatar </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="badge">
        <router-link to="/components/badge"> Badge </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="breadcrumb">
        <router-link to="/components/breadcrumb"> Breadcrumb </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="button">
        <router-link to="/components/button"> Buttons </router-link>
      </a-menu-item>

      <a-menu-item @click="toggleCollapsed" key="calendar">
        <router-link to="/components/calendar"> Calendar </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="cards">
        <router-link to="/components/cards"> Cards </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="carousel">
        <router-link to="/components/carousel"> Carousel </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="cascader">
        <router-link to="/components/cascader"> Cascader </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="checkbox">
        <router-link to="/components/checkbox"> Checkbox </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="collapse">
        <router-link to="/components/collapse"> Collapse </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="comments">
        <router-link to="/components/comments"> Comments </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="dash-base">
        <router-link to="/components/dash-base"> Dashboard Base </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="datePicker">
        <router-link to="/components/datePicker"> DatePicker </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="drag">
        <router-link to="/components/drag-drop"> Drag & Drop </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="drawer">
        <router-link to="/components/drawer"> Drawer </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="dropdown">
        <router-link to="/components/dropdown"> Dropdown </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="empty">
        <router-link to="/components/empty"> Empty </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="grids">
        <router-link to="/components/grid"> Grid </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="input">
        <router-link to="/components/input"> Input </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="list">
        <router-link to="/components/list"> List </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="menu">
        <router-link to="/components/menu"> Menu </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="message">
        <router-link to="/components/message"> Message </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="modal">
        <router-link to="/components/modal"> Modal </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="notification">
        <router-link to="/components/notification"> Notification </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="pageHeader">
        <router-link to="/components/pageHeader"> PageHeader </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="pagination">
        <router-link to="/components/pagination"> Pagination </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="popConfirm">
        <router-link to="/components/popConfirm"> PopConfirm </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="popover">
        <router-link to="/components/popover"> Popover </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="progressbar">
        <router-link to="/components/progressbar"> Progress Bar </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="radio">
        <router-link to="/components/radio"> Radio </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="rate">
        <router-link to="/components/rate"> Rate </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="result">
        <router-link to="/components/result"> Result </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="select">
        <router-link to="/components/select"> Select </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="skeleton">
        <router-link to="/components/skeleton"> Skeleton </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="slider">
        <router-link to="/components/slider"> Slider </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="spiner">
        <router-link to="/components/spiner"> Spiner </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="statistic">
        <router-link to="/components/statistic"> Statistic </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="steps">
        <router-link to="/components/steps"> Steps </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="switch">
        <router-link to="/components/switch"> Switch </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="tabs">
        <router-link to="/components/tabs"> Tabs </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="tags">
        <router-link to="/components/tags"> Tags </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="timeline">
        <router-link to="/components/timeline"> Timeline </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="time-picker">
        <router-link to="/components/time-picker"> TimePicker </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="tree-select">
        <router-link to="/components/tree-select"> Tree Select </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="upload">
        <router-link to="/components/upload"> Upload </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="charts">
      <template #icon>
        <unicon name="chart-bar"></unicon>
      </template>
      <template #title>Charts</template>
      <a-menu-item @click="toggleCollapsed" key="chart-js">
        <router-link to="/chart/chart-js"> Chart js </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="googleChart">
        <router-link to="/chart/google-chart"> Google Chart </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="apexchart">
      <template #icon>
        <unicon name="chart"></unicon>
      </template>
      <template #title>Apex Charts</template>
      <a-menu-item @click="toggleCollapsed" key="columnChart">
        <router-link to="/apexchart/column-chart"> Column Charts </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="lineChart">
        <router-link to="/apexchart/line-chart"> Line Charts </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="areaChart">
        <router-link to="/apexchart/area-chart"> Area Charts </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="barChart">
        <router-link to="/apexchart/bar-chart"> Bar Charts </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="pieChart">
        <router-link to="/apexchart/pie-chart"> Pie Charts </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="radialbarChart">
        <router-link to="/apexchart/radialbar-chart"> Radialbar Charts </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="radarChart">
        <router-link to="/apexchart/radar-charts"> Radar Charts </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="forms">
      <template #icon>
        <unicon name="compact-disc"></unicon>
      </template>
      <template #title>Forms</template>
      <a-menu-item @click="toggleCollapsed" key="formLayout">
        <router-link to="/forms/form-layout"> Form Layout </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="formElements">
        <router-link to="/forms/form-elements"> Form Elements </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="formComponents">
        <router-link to="/forms/form-components"> Form Components </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="formValidation">
        <router-link to="/forms/form-validation"> Form Validation </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="tables">
      <template #icon>
        <unicon name="table"></unicon>
      </template>
      <template #title>Table</template>
      <a-menu-item @click="toggleCollapsed" key="table">
        <router-link to="/tables/basic"> Basic Table </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="DataTable">
        <router-link to="/tables/dataTable"> Data Table </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="widgets">
      <template #icon>
        <unicon name="server"></unicon>
      </template>
      <template #title>Widgets</template>
      <a-menu-item @click="toggleCollapsed" key="widgetCharts">
        <router-link to="/widgets/chart"> Charts </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="widgetsCard">
        <router-link to="/widgets/card"> Card </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="widgetMixed">
        <router-link to="/widgets/mixed"> Mixed </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="wizard">
      <template #icon>
        <unicon name="square-full"></unicon>
      </template>
      <template #title>Wizard</template>
      <a-menu-item @click="toggleCollapsed" key="wizard1">
        <router-link to="/wizard/wizard1"> Wizard1 </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="icons">
      <template #icon>
        <unicon name="apps"></unicon>
      </template>
      <template #title>Icons</template>
      <a-menu-item @click="toggleCollapsed" key="unicons">
        <router-link to="/icons/unicons"> Unicons </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="featherIcons">
        <router-link to="/icons/featherIcons"> FeatherIcons </router-link>
      </a-menu-item>
      <!-- <a-menu-item @click="toggleCollapsed" key="antdIcons">
        <router-link to="/icons/antdIcons"> Ant Design Icons </router-link>
      </a-menu-item> -->
      <a-menu-item @click="toggleCollapsed" key="fa">
        <router-link to="/icons/fa"> FontAwesome Icons </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="maps">
      <template #icon>
        <unicon name="map"></unicon>
      </template>
      <template #title>Maps</template>
      <a-menu-item @click="toggleCollapsed" key="google">
        <router-link to="/maps/google"> Google Maps </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="leaflet">
        <router-link to="/maps/leaflet"> Leaflet </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="vector">
        <router-link to="/maps/vector"> Vector </router-link>
      </a-menu-item>
    </a-sub-menu>

    <NavTitle class="ninjadash-sidebar-nav-title">Pages</NavTitle>
    <a-sub-menu key="settings">
      <template #icon>
        <unicon name="setting"></unicon>
      </template>
      <template #title>Settings</template>
      <a-menu-item @click="toggleCollapsed" key="profile-settings">
        <router-link to="/page/profile-settings"> Settings </router-link>
      </a-menu-item>

      <a-menu-item @click="toggleCollapsed" key="set-profile">
        <router-link to="/page/profile-settings/profile"> Profile </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="set-account">
        <router-link to="/page/profile-settings/account"> Account </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="set-password">
        <router-link to="/page/profile-settings/password"> Password </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="set-social">
        <router-link to="/page/profile-settings/social"> Social </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="set-notification">
        <router-link to="/page/profile-settings/notification"> Notification </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item @click="toggleCollapsed" key="gallery">
      <template #icon>
        <unicon name="images"></unicon>
      </template>
      <router-link to="/page/gallery"> Gallery </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="pricing">
      <template #icon>
        <unicon name="usd-circle"></unicon>
      </template>
      <router-link to="/page/pricing"> Pricing </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="banners">
      <template #icon>
        <unicon name="presentation"></unicon>
      </template>
      <router-link to="/page/banners"> Banners </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="testimonials">
      <template #icon>
        <unicon name="book-open"></unicon>
      </template>
      <router-link to="/page/testimonials"> Testimonials </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="faq`s">
      <template #icon>
        <unicon name="question-circle"></unicon>
      </template>
      <router-link to="/page/faqs"> FAQs </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="search">
      <template #icon>
        <unicon name="search"></unicon>
      </template>
      <router-link to="/page/search"> Search </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="starter">
      <template #icon>
        <unicon name="circle"></unicon>
      </template>
      <router-link to="/starter"> Blank Page </router-link>
    </a-menu-item>
    <a-sub-menu key="blog">
      <template #icon>
        <unicon name="document-layout-left"></unicon>
      </template>
      <template #title>Blog</template>
      <a-menu-item @click="toggleCollapsed" key="blog1">
        <router-link to="/page/blog/blog1"> Blog One </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="blog2">
        <router-link to="/page/blog/blog2"> Blog Two </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="blog3">
        <router-link to="/page/blog/blog3"> Blog Three </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="details">
        <router-link to="/page/blog/details/1"> Blog Details </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item @click="toggleCollapsed" key="support">
      <template #icon>
        <unicon name="headphones"></unicon>
      </template>
      <router-link to="/page/support"> Support Center </router-link>
    </a-menu-item>

    <a-menu-item @click="toggleCollapsed" key="maintenance">
      <template #icon>
        <unicon name="airplay"></unicon>
      </template>
      <router-link to="/page/maintenance"> Maintenance </router-link>
    </a-menu-item>

    <a-menu-item @click="toggleCollapsed" key="404">
      <template #icon>
        <unicon name="info-circle"></unicon>
      </template>
      <router-link to="/page/404"> 404 </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="comingSoon">
      <template #icon>
        <unicon name="clock"></unicon>
      </template>
      <router-link to="/page/comingSoon"> Coming Soon </router-link>
    </a-menu-item>
    <a-menu-item @click="toggleCollapsed" key="termsConditions">
      <template #icon>
        <unicon name="file-shield-alt"></unicon>
      </template>
      <router-link to="/page/termsConditions"> Terms & Conditions </router-link>
    </a-menu-item>
  </a-menu>
</template>
