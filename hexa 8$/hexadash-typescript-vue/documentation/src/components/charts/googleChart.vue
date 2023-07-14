<script>
import { GChart } from "vue3-googl-chart";
import VueTypes from "vue-types";
import { defineComponent } from "vue";

export const GoogleBasicBarChart = defineComponent({
  name: "GoogleBasicBarChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        title: this.title,
        width: this.width,
        height: this.height,
        chartArea: { width: this.chartArea },
        hAxis: {
          title: "Total",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("BarChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("Chart"),
    chartArea: VueTypes.string.def("50%"),
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "1" }}
      />
    );
  },
});
export const BubbleChart = defineComponent({
  name: "BubbleChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        width: this.width,
        height: this.height,
        colorAxis: { colors: this.colors },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("BubbleChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    colors: VueTypes.array.def(["#b0120a", "#ffab91"]),
  },
  render() {
    return (
      <GChart type={this.type} data={this.data} options={this.chartOptions} />
    );
  },
});
export const GoogleMaterialBarChart = defineComponent({
  name: "GoogleMaterialBarChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          title: this.title,
          subtitle: this.subtitle,
        },
        width: this.width,
        height: this.height,
        chartArea: { width: this.chartArea },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("ColumnChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("Chart"),
    chartArea: VueTypes.string.def("50%"),
    subtitle: VueTypes.string.def("subtitle"),
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "2" }}
        height={this.height}
      />
    );
  },
});

export const GoogleStackedChart = defineComponent({
  name: "GoogleStackedChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          title: this.title,
        },
        width: this.width,
        height: this.height,
        chartArea: { width: this.chartArea },
        isStacked: true,
        hAxis: {
          title: "Total",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("BarChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("Chart"),
    chartArea: VueTypes.string.def("50%"),
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "3" }}
        height={this.height}
      />
    );
  },
});

export const GoogleCustomColorChart = defineComponent({
  name: "GoogleCustomColorChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        title: this.title,
        width: this.width,
        height: this.height,
        colors: this.colors,
        chartArea: { width: this.chartArea },
        hAxis: {
          title: "Total",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("BarChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("Chart"),
    chartArea: VueTypes.string.def("50%"),
    colors: VueTypes.array,
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "4" }}
      />
    );
  },
});

export const GoogleComboChart = defineComponent({
  name: "GoogleComboChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        title: this.title,
        width: this.width,
        height: this.height,
        colors: this.colors,
        chartArea: { width: this.chartArea },
        seriesType: "bars",
        series: { 5: { type: "line" } },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("ComboChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("Chart"),
    chartArea: VueTypes.string.def("50%"),
    colors: VueTypes.array,
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "5" }}
      />
    );
  },
});

export const GoogleLineChart = defineComponent({
  name: "GoogleLineChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        width: this.width,
        height: this.height,
        hAxis: {
          title: "Time",
        },
        vAxis: {
          title: "Popularity",
        },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("LineChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "6" }}
      />
    );
  },
});

export const GoogleMultiLineChart = defineComponent({
  name: "GoogleMultiLineChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        width: this.width,
        height: this.height,
        hAxis: {
          title: "Time",
        },
        vAxis: {
          title: "Popularity",
        },
        series: {
          0: { curveType: "function" },
          1: { curveType: "function" },
        },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("LineChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "7" }}
      />
    );
  },
});

export const GoogleBasicPieChart = defineComponent({
  name: "GoogleBasicPieChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        title: this.title,
        width: this.width,
        height: this.height,
        chartArea: { width: this.chartArea },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("PieChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("My Daily Activities"),
    chartArea: VueTypes.string.def("50%"),
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "9" }}
      />
    );
  },
});

export const Google3dPieChart = defineComponent({
  name: "Google3dPieChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        title: this.title,
        width: this.width,
        height: this.height,
        is3D: true,
        chartArea: { width: this.chartArea },
      },
    };
  },
  methods: {},
  props: {
    type: VueTypes.string.def("PieChart"),
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("My Daily Activities"),
    chartArea: VueTypes.string.def("50%"),
  },
  render() {
    return (
      <GChart
        type={this.type}
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "9" }}
      />
    );
  },
});

export default GoogleBasicBarChart;
</script>
