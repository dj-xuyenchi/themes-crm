<script lang="tsx">
import { GChart } from 'vue-google-charts';
import { defineComponent } from 'vue';

export const GoogleBasicBarChart = defineComponent({
  name: 'GoogleBasicBarChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'BarChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    title: {
      type: String,
      default: 'Chart',
    },
    chartArea: {
      type: String,
      default: '50%',
    },
  },
  setup(props) {
    const chartOptions: any = {
      title: props.title,
      width: props.width,
      height: props.height,
      chartArea: { width: props.chartArea },
      hAxis: {
        title: 'Total',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    };
    return {
      chartOptions,
    };
  },
  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} rootProps={{ 'data-testid': '1' }} />;
  },
});

export const BubbleChart = defineComponent({
  name: 'BubbleChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'BubbleChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    colors: {
      type: Array,
      default: () => {
        ['#b0120a', '#ffab91'];
      },
    },
  },
  setup(props) {
    const chartOptions: any = {
      width: props.width,
      height: props.height,
      colorAxis: { colors: props.colors },
    };
    return {
      chartOptions,
    };
  },
  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} />;
  },
});

export const GoogleMaterialBarChart = defineComponent({
  name: 'GoogleMaterialBarChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'ColumnChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    title: {
      type: String,
      default: 'Chart',
    },
    chartArea: {
      type: String,
      default: '50%',
    },
    subtitle: {
      type: String,
      default: 'Subtitle',
    },
  },
  setup(props) {
    const chartOptions: any = {
      chart: {
        title: props.title,
        subtitle: props.subtitle,
      },
      width: props.width,
      height: props.height,
      chartArea: { width: props.chartArea },
    };
    return {
      chartOptions,
    };
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ 'data-testid': '2' }}
        height={this.height}
      />
    );
  },
});

export const GoogleStackedChart = defineComponent({
  name: 'GoogleStackedChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'BarChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    title: {
      type: String,
      default: 'Chart',
    },
    chartArea: {
      type: String,
      default: '50%',
    },
  },
  setup(props) {
    const chartOptions: any = {
      chart: {
        title: props.title,
      },
      width: props.width,
      height: props.height,
      chartArea: { width: props.chartArea },
      isStacked: true,
      hAxis: {
        title: 'Total',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    };
    return {
      chartOptions,
    };
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ 'data-testid': '3' }}
        height={this.height}
      />
    );
  },
});

export const GoogleCustomColorChart = defineComponent({
  name: 'GoogleCustomColorChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'BarChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    title: {
      type: String,
      default: 'Chart',
    },
    chartArea: {
      type: String,
      default: '50%',
    },
    colors: Array,
  },
  setup(props) {
    const chartOptions: any = {
      title: props.title,
      width: props.width,
      height: props.height,
      colors: props.colors,
      chartArea: { width: props.chartArea },
      hAxis: {
        title: 'Total',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    };
    return {
      chartOptions,
    };
  },
  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} rootProps={{ 'data-testid': '4' }} />;
  },
});

export const GoogleComboChart = defineComponent({
  name: 'GoogleComboChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'ComboChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    title: {
      type: String,
      default: 'Chart',
    },
    chartArea: {
      type: String,
      default: '50%',
    },
    colors: Array,
  },
  setup(props) {
    const chartOptions: any = {
      title: props.title,
      width: props.width,
      height: props.height,
      colors: props.colors,
      chartArea: { width: props.chartArea },
      seriesType: 'bars',
      series: { 5: { type: 'line' } },
    };
    return {
      chartOptions,
    };
  },
  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} rootProps={{ 'data-testid': '5' }} />;
  },
});

export const GoogleLineChart = defineComponent({
  name: 'GoogleLineChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'LineChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
  },
  setup(props) {
    const chartOptions: any = {
      width: props.width,
      height: props.height,
      hAxis: {
        title: 'Time',
      },
      vAxis: {
        title: 'Popularity',
      },
    };
    return {
      chartOptions,
    };
  },
  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} rootProps={{ 'data-testid': '6' }} />;
  },
});

export const GoogleMultiLineChart = defineComponent({
  name: 'GoogleMultiLineChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'LineChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
  },
  setup(props) {
    const chartOptions: any = {
      width: props.width,
      height: props.height,
      hAxis: {
        title: 'Time',
      },
      vAxis: {
        title: 'Popularity',
      },
      series: {
        0: { curveType: 'function' },
        1: { curveType: 'function' },
      },
    };
    return {
      chartOptions,
    };
  },

  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} rootProps={{ 'data-testid': '7' }} />;
  },
});

export const GoogleBasicPieChart = defineComponent({
  name: 'GoogleBasicPieChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'PieChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    title: {
      type: String,
      default: 'My Daily Activities',
    },
    chartArea: {
      type: String,
      default: '50%',
    },
  },
  setup(props) {
    const chartOptions: any = {
      title: props.title,
      width: props.width,
      height: props.height,
      chartArea: { width: props.chartArea },
    };
    return {
      chartOptions,
    };
  },

  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} rootProps={{ 'data-testid': '9' }} />;
  },
});

export const Google3dPieChart = defineComponent({
  name: 'Google3dPieChart',
  components: {
    GChart,
  },
  props: {
    type: {
      type: String as any,
      default: 'PieChart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: Number,
      default: 300,
    },
    data: Array,
    title: {
      type: String,
      default: 'My Daily Activities',
    },
    chartArea: {
      type: String,
      default: '50%',
    },
  },
  setup(props) {
    const chartOptions: any = {
      title: props.title,
      width: props.width,
      height: props.height,
      is3D: true,
      chartArea: { width: props.chartArea },
    };
    return {
      chartOptions,
    };
  },

  render() {
    return <GChart type={this.type} data={this.data} options={this.chartOptions} rootProps={{ 'data-testid': '9' }} />;
  },
});

export default GoogleBasicBarChart;
</script>
