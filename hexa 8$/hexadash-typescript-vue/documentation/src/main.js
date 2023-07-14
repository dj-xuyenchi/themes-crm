import app from './config/configApp';
import router from './routes/protectedRoute';
import store from '@/vuex/store';
import './static/css/style.css';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

// Vue 3rd party plugins
import '@/core/plugins/ant-design';
import '@/core/plugins/fonts';
import '@/core/plugins/unicons';
import './core/plugins/apexcharts';
import '@/core/components/custom';
// import '@/core/plugins/prismEditor';


app.config.productionTip = false;
app.use(store);
app.use(router);
app.mount('#app');
