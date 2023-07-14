import app from '../../config/configApp';
import Unicon from 'vue-unicons';
import * as unicons from "vue-unicons/dist/icons";

const icons = [];
Object.values(unicons).map(icon => icons.push(icon));

Unicon.add(icons);

app.use(Unicon);
