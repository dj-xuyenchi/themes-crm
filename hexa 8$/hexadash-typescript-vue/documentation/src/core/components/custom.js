import app from '../../config/configApp';
import Cards from '../../components/cards/frame/CardsFrame.vue';
import BtnGroup from '../../components/buttons/ButtonGroup.vue';
import Button from '../../components/buttons/Buttons.vue';
import CalendarButton from '../../components/buttons/CalendarButton.vue';
import ExportButton from '../../components/buttons/ExportButton.vue';
import ShareButton from '../../components/buttons/ShareButton.vue';
import { PageHeader } from '../../components/pageHeaders/PageHeaders.vue';
import Heading from '../../components/heading/Heading';
import Dropdown from '../../components/dropdown/Dropdown';

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
} from "@/components/charts/googleChart.vue";

[
  Heading,
  Cards,
  {
    name: 'Button',
    ...Button,
  },
  {
    name: 'BtnGroup',
    ...BtnGroup,
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
  CalendarButton,
  ExportButton,
  ShareButton,
  { name: 'PageHeader', ...PageHeader },
  Dropdown,
].map((c) => {
  app.component(`sd${c.name}`, c);
});
