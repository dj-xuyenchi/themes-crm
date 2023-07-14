import app from '../../config/configApp';
import mitt from 'mitt';
import { VueMasonryPlugin } from 'vue-masonry/src/masonry.plugin.js';
const emitter = mitt();

app.config.globalProperties.emitter = emitter;
app.use(VueMasonryPlugin);
