<template>
    <a-menu
        :open-keys="openKeys"
        v-model:selectedKeys="selectedKeys"
        :mode="mode"
        :theme="darkMode ? 'dark' : 'light'"
        class="scroll-menu"
        @openChange="onOpenChange"
        @click="onClick"
    >
        <a-menu-item @click="toggleCollapsed" key="overview">
            <template #icon>
                <unicon name="circle"></unicon>
            </template>
            <router-link to="/overview"> Overview </router-link>
        </a-menu-item>

        <a-sub-menu key="dev">
            <template #icon>
                <unicon name="setting"></unicon>
            </template>
            <template #title>Development</template>
            <a-menu-item @click="toggleCollapsed" key="installation">
                <router-link to="/dev/installation"> Installation </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="folder-structure">
                <router-link to="/dev/folder-structure">
                    Folder Structure
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="new-page">
                <router-link to="/dev/new-page"> New Page </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="theme-config">
                <router-link to="/dev/theme-config">
                    Theme Configuration
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="routing">
                <router-link to="/dev/routing"> Routing </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="navigation">
                <router-link to="/dev/navigation"> Navigation </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="multi-lang">
                <router-link to="/dev/multi-lang"> Multi language </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="vuex">
                <router-link to="/dev/vuex"> Vuex </router-link>
            </a-menu-item>
        </a-sub-menu>

        <NavTitle class="ninjadash-sidebar-nav-title">Integration</NavTitle>
        <a-menu-item @click="toggleCollapsed" key="axios">
            <template #icon>
                <unicon name="server"></unicon>
            </template>
            <router-link to="/axios"> Axios Integration </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="auth0">
            <template #icon>
                <unicon name="server"></unicon>
            </template>
            <router-link to="/auth0"> Auth0 Configure </router-link>
        </a-menu-item>
        <NavTitle class="ninjadash-sidebar-nav-title">Components</NavTitle>

        <a-sub-menu key="table">
            <template #icon>
                <unicon name="table"></unicon>
            </template>
            <template #title>Table</template>
            <a-menu-item @click="toggleCollapsed" key="basic">
                <router-link to="/table/basic"> Basic Table </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="data">
                <router-link to="/table/data"> Data Table </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="charts">
            <template #icon>
                <unicon name="chart-bar"></unicon>
            </template>
            <template #title>Charts</template>
            <a-menu-item @click="toggleCollapsed" key="chart-js">
                <router-link to="/charts/chart-js"> ChartJs </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="google-chart">
                <router-link to="/charts/google-chart">
                    Google Chart
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="apexchart">
            <template #icon>
                <unicon name="chart"></unicon>
            </template>
            <template #title>Apex Charts</template>
            <a-menu-item @click="toggleCollapsed" key="columnChart">
                <router-link to="/apexchart/column-chart">
                    Column Charts
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="lineChart">
                <router-link to="/apexchart/line-chart">
                    Line Charts
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="areaChart">
                <router-link to="/apexchart/area-chart">
                    Area Charts
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="barChart">
                <router-link to="/apexchart/bar-chart">
                    Bar Charts
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="pieChart">
                <router-link to="/apexchart/pie-chart">
                    Pie Charts
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="radialbarChart">
                <router-link to="/apexchart/radialbar-chart">
                    Radialbar Charts
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="radarChart">
                <router-link to="/apexchart/radar-charts">
                    Radar Charts
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-menu-item @click="toggleCollapsed" key="credit">
            <template #icon>
                <unicon name="circle"></unicon>
            </template>
            <router-link to="/credit"> Credits </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script>
import {
    computed,
    reactive,
    ref,
    toRefs,
    watch,
    watchEffect,
    defineComponent,
} from 'vue';
import VueTypes from 'vue-types';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { NavTitle } from './style';

export default defineComponent({
    name: 'AsideItems',
    props: {
        toggleCollapsed: VueTypes.func,
        events: VueTypes.object,
    },
    components: {
        NavTitle,
    },
    setup(props) {
        const store = useStore();
        const darkMode = computed(() => store.state.themeLayout.data);
        const mode = ref('inline');
        const { events } = toRefs(props);
        const {
            onRtlChange,
            onLtrChange,
            modeChangeDark,
            modeChangeLight,
            modeChangeTopNav,
            modeChangeSideNav,
        } = events.value;

        const router = computed(() => useRoute());
        const state = reactive({
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
            selectedKeys: ['home'],
            openKeys: ['dashboard'],
            preOpenKeys: ['dashboard'],
        });

        const onOpenChange = (keys) => {
            state.openKeys =
                keys[keys.length - 1] !== 'recharts'
                    ? [keys.length && keys[keys.length - 1]]
                    : keys;
        };

        const onClick = (item) => {
            if (item.keyPath.length === 1) state.openKeys = [];
        };

        watchEffect(() => {
            if (router.value.matched.length) {
                if (router.value.matched.length > 2) {
                    state.selectedKeys = [router.value.matched[2].name];
                    state.openKeys = [router.value.matched[1].name];
                    state.preOpenKeys = [router.value.matched[1].name];
                } else if (router.value.matched.length > 3) {
                    state.selectedKeys = [router.value.matched[3].name];
                    state.openKeys = [router.value.matched[1].name];
                    state.preOpenKeys = [router.value.matched[1].name];
                } else {
                    state.selectedKeys = [router.value.matched[1].name];
                    state.openKeys = [router.value.matched[1].name];
                    state.preOpenKeys = [router.value.matched[1].name];
                }
            }
        });

        watch(
            () => state.openKeys,
            (val, oldVal) => {
                state.preOpenKeys = oldVal;
            }
        );

        return {
            mode,
            ...toRefs(state),
            darkMode,
            onRtlChange,
            onLtrChange,
            modeChangeDark,
            modeChangeLight,
            modeChangeTopNav,
            modeChangeSideNav,
            onOpenChange,
            onClick,
        };
    },
});
</script>
