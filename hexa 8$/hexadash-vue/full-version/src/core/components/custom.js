import app from '../../config/configApp';
import Cards from '../../components/cards/frame/CardsFrame.vue';
import FeatherIcons from '../../components/utilities/featherIcons.vue';
import Alerts from '../../components/alerts/Alerts.vue';
import BtnGroup from '../../components/buttons/ButtonGroup.vue';
import Button from '../../components/buttons/Buttons.vue';
import CalendarButton from '../../components/buttons/CalendarButton.vue';
import ExportButton from '../../components/buttons/ExportButton.vue';
import ShareButton from '../../components/buttons/ShareButton.vue';
import { PageHeader } from '../../components/pageHeaders/PageHeaders.vue';
import CreateProject from '../../view/apps/project/overview/CreateProject';
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
} from '../../components/charts/googleChart.vue';

import { ChartContainer } from '../../view/dashboard/style';
import Cascader from '../../components/cascader/Cascader';
import Heading from '../../components/heading/Heading';
import AutoComplete from '../../components/autoComplete/autoComplete';
import Dropdown from '../../components/dropdown/Dropdown';
import Popover from '../../components/popup/Popup';
import Modal from '../../components/modals/Modals';

[
  Heading,
  Cards,
  {
    name: 'ChartContainer',
    ...ChartContainer,
  },

  {
    name: 'GoogleMaterialBarChart',
    ...GoogleMaterialBarChart,
  },
  {
    name: 'GoogleBasicBarChart',
    ...GoogleBasicBarChart,
  },
  { name: 'GoogleStackedChart', ...GoogleStackedChart },
  { name: 'GoogleCustomColorChart', ...GoogleCustomColorChart },
  { name: 'GoogleComboChart', ...GoogleComboChart },
  { name: 'GoogleLineChart', ...GoogleLineChart },
  { name: 'GoogleMultiLineChart', ...GoogleMultiLineChart },
  { name: 'GoogleBasicPieChart', ...GoogleBasicPieChart },
  { name: 'Google3dPieChart', ...Google3dPieChart },
  { name: 'BubbleChart', ...BubbleChart },
  // {
  //   name: "ChartjsStackedChart",
  //   ...ChartjsStackedChart,
  // },
  Alerts,
  CreateProject,
  {
    name: 'Button',
    ...Button,
  },
  {
    name: 'BtnGroup',
    ...BtnGroup,
  },
  Drawer,
  CalendarButton,
  ExportButton,
  ShareButton,
  { name: 'PageHeader', ...PageHeader },
  Cascader,
  AutoComplete,
  Dropdown,
  Popover,
  FeatherIcons,
  Modal,
].map((c) => {
  app.component(`sd${c.name}`, c);
});
