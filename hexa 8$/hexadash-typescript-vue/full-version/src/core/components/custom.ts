import app from '@/config/configApp';
import Cards from '@/components/cards/frame/CardsFrame.vue';
import Button from '@/components/buttons/Buttons.vue';
import CalendarButton from '../../components/buttons/CalendarButton.vue';
import ExportButton from '../../components/buttons/ExportButton.vue';
import ShareButton from '../../components/buttons/ShareButton.vue';
import Dropdown from '@/components/dropdown/Dropdown.vue';
import Heading from '@/components/heading/Heading.vue';
import Popover from '@/components/popup/Popup.vue';
import Modal from '@/components/modals/Modals.vue';
import AutoComplete from '@/components/autoComplete/autoComplete.vue';
import { PageHeader } from '@/components/pageHeaders/PageHeaders.vue';
import CreateProject from '../../views/apps/project/overview/CreateProject.vue';
import FeatherIcons from '@/components/utilities/featherIcons.vue';
import Alerts from '../../components/alerts/Alerts.vue';
import BtnGroup from '../../components/buttons/ButtonGroup.vue';
import Cascader from '../../components/cascader/Cascader.vue';
import Drawer from '../../components/drawer/Drawer.vue';
import {
  GoogleBasicBarChart,
  GoogleMaterialBarChart,
  GoogleStackedChart,
  GoogleCustomColorChart,
  GoogleComboChart,
  GoogleLineChart,
  GoogleMultiLineChart,
  GoogleBasicPieChart,
  Google3dPieChart,
  BubbleChart,
} from '../../components/charts/GoogleChart.vue';

const components = [
  Cards,
  Heading,
  Dropdown,
  Popover,
  AutoComplete,
  Modal,
  CreateProject,
  FeatherIcons,
  {
    ...GoogleMaterialBarChart,
    name: 'GoogleMaterialBarChart',
  },
  {
    ...GoogleBasicBarChart,
    name: 'GoogleBasicBarChart',
  },
  { ...GoogleStackedChart, name: 'GoogleStackedChart' },
  { ...GoogleCustomColorChart, name: 'GoogleCustomColorChart' },
  { ...GoogleComboChart, name: 'GoogleComboChart' },
  { ...GoogleLineChart, name: 'GoogleLineChart' },
  { ...GoogleMultiLineChart, name: 'GoogleMultiLineChart' },
  { ...GoogleBasicPieChart, name: 'GoogleBasicPieChart' },
  { ...Google3dPieChart, name: 'Google3dPieChart' },
  { ...BubbleChart, name: 'BubbleChart' },
  { ...PageHeader, name: 'PageHeader' },
  {
    ...BtnGroup,
    name: 'BtnGroup',
  },
  { ...Button },
  Alerts,
  Cascader,
  Drawer,
  CalendarButton,
  ExportButton,
  ShareButton,
];

components.forEach((c) => {
  app.component(`sd${c.name}`, c);
});
