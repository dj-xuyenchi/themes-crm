import app from './config/configApp';
import router from './router/index';
import store from './vuex/store';
import 'ant-design-vue/dist/antd.css';
import './assets/main.css';
// Vue 3rd party plugins
import '@/core/plugins/ant-design';
import '@/core/plugins/unicons';
import '@/core/plugins/apexcharts';
import '@/core/plugins/fonts';
import '@/core/plugins/ckEditor';
import '@/core/plugins/maps';
import '@/core/components/custom';
import '@/core/components/style';

app.use(store);
app.use(router);
app.mount('#app');
