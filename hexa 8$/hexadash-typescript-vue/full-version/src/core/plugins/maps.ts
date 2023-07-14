import app from '../../config/configApp';
import { LMap, LTileLayer, LMarker, LControlLayers } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-control-layer', LControlLayers);
