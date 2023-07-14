import app from '../../config/configApp';
import Unicon from 'vue-unicons';
import * as unicons from 'vue-unicons/dist/icons';

const icons: any[] = [];
Object.values(unicons).map((icon: any) => icons.push(icon));

Unicon.add(icons);

app.use(Unicon);
