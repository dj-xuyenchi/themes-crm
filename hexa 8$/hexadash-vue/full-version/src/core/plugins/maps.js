import app from '../../config/configApp';
import { LMap, LTileLayer, LMarker, LControlLayers } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import CKEditor from '@ckeditor/ckeditor5-vue';

app.use(CKEditor);
app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-control-layer', LControlLayers);
