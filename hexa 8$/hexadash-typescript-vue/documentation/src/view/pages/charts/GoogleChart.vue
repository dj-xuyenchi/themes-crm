<template>
  <div>
    <sdPageHeader title="Chart Js" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Bar Chart">
            <sdGoogleBasicBarChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              chartArea="50%"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="barChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Bubble Chart">
            <sdBubbleChart :data="bubbleChart" width="100%" :height="300" />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="bubbleCharts"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Stacked bar chart with multiple series">
            <sdGoogleStackedChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              chartArea="50%"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="stackedChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Combo Chart">
            <sdGoogleComboChart
              :data="comboChartData"
              width="100%"
              :height="300"
              title="Monthly Coffee Production by Country"
              chartArea="50%"
              :colors="['#b0120a', '#ffab91', '#e0120a', '#afab91']"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="comboChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Basic Pie Chart">
            <sdGoogleBasicPieChart
              :data="pieChartData"
              width="100%"
              :height="300"
              chartArea="100%"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="pieChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Material Design">
            <sdGoogleMaterialBarChart
              :data="materialDesignChart"
              width="100%"
              :height="300"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="mdChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Custom Colors Bar Chart">
            <sdGoogleCustomColorChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              subtitle="Sales, Expenses, and Profit: 2014-2017"
              chartArea="50%"
              :colors="['#b0120a', '#ffab91']"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="ccChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Line Chart">
            <sdGoogleLineChart
              :data="lineChartData"
              width="100%"
              :height="300"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="lineChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Multiple Line Chart">
            <sdGoogleMultiLineChart
              :data="MultilineChartData"
              width="100%"
              :height="300"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="mLineChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="3d Pie Chart">
            <sdGoogle3dPieChart
              :data="pieChartData"
              width="100%"
              :height="300"
              chartArea="100%"
            />
            <br />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="dPiChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../styled";
import { defineComponent } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

import gChart from "@/demoData/google-charts.json";
const {
  barChartData,
  materialDesignChart,
  comboChartData,
  lineChartData,
  MultilineChartData,
  pieChartData,
  bubbleChart,
} = gChart;

export default defineComponent({
  name: "GoogleCharts",
  components: {
    Main,
    PrismEditor,
  },
  data() {
    return {
      barChartData,
      materialDesignChart,
      comboChartData,
      lineChartData,
      MultilineChartData,
      pieChartData,
      bubbleChart,
      barChart: `
<template>
    <Main>           
        <sdGoogleBasicBarChart 
          :data="chartData" 
          width="100%" 
          :height="300" 
          title="Population of Largest U.S. Cities" chartArea="50%"
        />       
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
                ["City", "2010 Population", "2000 Population"],
                ["New York City, NY", 8175000, 8008000],
                ["Los Angeles, CA", 3792000, 3694000],
                ["Chicago, IL", 2695000, 2896000],
                ["Houston, TX", 2099000, 1953000],
                ["Philadelphia, PA", 1526000, 1517000]
            ]
        }
    }
});
< /script>
      `,
      bubbleCharts: `
<template>
    <Main>
       <sdBubbleChart :data="chartData" width="100%" :height="300" />
    </Main>
</template>
      `,
      stackedChart: `
<template>
    <Main>           
        <sdGoogleStackedChart
          :data="chartData"
          width="100%"
          :height="300"
          title="Population of Largest U.S. Cities"
          chartArea="50%"
        />     
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
                ["City", "2010 Population", "2000 Population"],
                ["New York City, NY", 8175000, 8008000],
                ["Los Angeles, CA", 3792000, 3694000],
                ["Chicago, IL", 2695000, 2896000],
                ["Houston, TX", 2099000, 1953000],
                ["Philadelphia, PA", 1526000, 1517000]
            ]
        }
    }
});
< /script>
      `,
      comboChart: `
<template>
    <Main>           
        <sdGoogleComboChart
          :data="chartData"
          width="100%"
          :height="300"
          title="Monthly Coffee Production by Country"
          chartArea="50%"
          :colors="['#b0120a', '#ffab91', '#e0120a', '#afab91']"
        />   
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
              ["Month", "Bolivia", "Ecuador", "Madagascar", "Papua New Guinea", "Rwanda", "Average"],
              ["2004/05", 165, 938, 522, 998, 450, 614.6],
              ["2005/06", 135, 1120, 599, 1268, 288, 682],
              ["2006/07", 157, 1167, 587, 807, 397, 623],
              ["2007/08", 139, 1110, 615, 968, 215, 609.4],
              ["2008/09", 136, 691, 629, 1026, 366, 569.6]
            ]
        }
    }
});
< /script>
      `,
      pieChart: `
<template>
    <Main>           
        <sdGoogleBasicPieChart
          :data="chartData"
          width="100%"
          :height="300"
          chartArea="100%"
        /> 
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
              ["Task", "Hours per Day"],
              ["Work", 11],
              ["Eat", 2],
              ["Commute", 2],
              ["Watch TV", 2],
              ["Sleep", 7]
            ]
        }
    }
});
<%/script>
      `,
      mdChart: `
<template>
    <Main>           
        <sdGoogleMaterialBarChart
          :data="chartData"
          width="100%"
          :height="300"
        />
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
              ["Year", "Sales", "Expenses", "Profit"],
              ["2014", 1000, 400, 200],
              ["2015", 1170, 460, 250],
              ["2016", 660, 1120, 300],
              ["2017", 1030, 540, 350]
            ]
        }
    }
});
< /script>
      `,
      ccChart: `
<template>
    <Main>  
        <sdGoogleCustomColorChart
          :data="chartData"
          width="100%"
          :height="300"
          title="Population of Largest U.S. Cities"
          subtitle="Sales, Expenses, and Profit: 2014-2017"
          chartArea="50%"
          :colors="['#b0120a', '#ffab91']"
        />
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
                ["City", "2010 Population", "2000 Population"],
                ["New York City, NY", 8175000, 8008000],
                ["Los Angeles, CA", 3792000, 3694000],
                ["Chicago, IL", 2695000, 2896000],
                ["Houston, TX", 2099000, 1953000],
                ["Philadelphia, PA", 1526000, 1517000]
            ]
        }
    }
});
< /script>
      `,
      lineChart: `
<template>
    <Main>    
        <sdGoogleLineChart
          :data="chartData"
          width="100%"
          :height="300"
        />
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
              ["x", "dogs"],
              [0, 0],
              [1, 10],
              [2, 23],
              [3, 17],
              [4, 18],
              [5, 9],
              [6, 11],
              [7, 27],
              [8, 33],
              [9, 40],
              [10, 32],
              [11, 35]
            ]
        }
    }
});
< /script>
      `,
      mLineChart: `
<template>
    <Main>    
        <sdGoogleMultiLineChart
          :data="chartData"
          width="100%"
          :height="300"
        />
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
              ["x", "dogs", "cats"],
              [0, 0, 0],
              [1, 10, 5],
              [2, 23, 15],
              [3, 17, 9],
              [4, 18, 10],
              [5, 9, 5],
              [6, 11, 3],
              [7, 27, 19]
            ]
        }
    }
});
< /script>
      `,
      dPiChart: `
<template>
    <Main>    
        <sdGoogle3dPieChart
          :data="chartData"
          width="100%"
          :height="300"
          chartArea="100%"
        />
    </Main>
</template>
<script>
export default defineComponent({
    data(){
        return {
            chartData:[
              ["Task", "Hours per Day"],
              ["Work", 11],
              ["Eat", 2],
              ["Commute", 2],
              ["Watch TV", 2],
              ["Sleep", 7]
            ]
        }
    }
});
< /script>
      `,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
