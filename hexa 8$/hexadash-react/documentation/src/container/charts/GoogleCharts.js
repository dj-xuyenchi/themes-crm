import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Prism from "prismjs";
import gCharts from '../../demoData/google-charts.json';
import {
  GoogleBasicBarChart,
  GoogleMaterialBarChart,
  GoogleStackedChart,
  GoogleCustomColorChart,
  GoogleOrgChart,
  GoogleComboChart,
  GoogleLineChart,
  GoogleMultiLineChart,
  GoogleBasicPieChart,
  Google3dPieChart,
} from '../../components/charts/google-chart';

const {
  barChartData,
  materialDesignChart,
  comboChartData,
  lineChartData,
  MultilineChartData,
  organizationChartData,
  pieChartData,
} = gCharts;

const GoogleChart = () => {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Google Chart',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Google Chart" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Basic bar chart with multiple series" size="large">
              <GoogleBasicBarChart
                data={barChartData}
                width="100%"
                height="300px"
                title="Population of Largest U.S. Cities"
                chartArea="50%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleBasicBarChart } from '../../components/charts/google-chart';

const { barChartData } = gCharts;

<GoogleBasicBarChart
  data={barChartData}
  width="100%"
  height="300px"
  title="Population of Largest U.S. Cities"
  chartArea="50%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Material Design" size="large">
              <GoogleMaterialBarChart
                data={materialDesignChart}
                width="100%"
                height="300px"
                title="Company Performance"
                subtitle="Sales, Expenses, and Profit: 2014-2017"
                chartArea="50%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleMaterialBarChart } from '../../components/charts/google-chart';

const { materialDesignChart } = gCharts;

<GoogleMaterialBarChart
  data={materialDesignChart}
  width="100%"
  height="300px"
  title="Company Performance"
  subtitle="Sales, Expenses, and Profit: 2014-2017"
  chartArea="50%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Stacked bar chart with multiple series" size="large">
              <GoogleStackedChart
                data={barChartData}
                width="100%"
                height="300px"
                title="Population of Largest U.S. Cities"
                chartArea="50%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleStackedChart } from '../../components/charts/google-chart';

const { barChartData } = gCharts;

<GoogleStackedChart
  data={barChartData}
  width="100%"
  height="300px"
  title="Population of Largest U.S. Cities"
  chartArea="50%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Custom Colors Bar Chart" size="large">
              <GoogleCustomColorChart
                data={barChartData}
                width="100%"
                height="300px"
                title="Population of Largest U.S. Cities"
                chartArea="50%"
                colors={['#b0120a', '#ffab91']}
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleCustomColorChart } from '../../components/charts/google-chart';

const { barChartData } = gCharts;

<GoogleCustomColorChart
  data={barChartData}
  width="100%"
  height="300px"
  title="Population of Largest U.S. Cities"
  chartArea="50%"
  colors={['#b0120a', '#ffab91']}
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Combo Chart" size="large">
              <GoogleComboChart
                data={comboChartData}
                width="100%"
                height="300px"
                title="Monthly Coffee Production by Country"
                chartArea="50%"
                colors={['#b0120a', '#ffab91', '#e0120a', '#afab91']}
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleComboChart } from '../../components/charts/google-chart';

const { comboChartData } = gCharts;

<GoogleComboChart
  data={comboChartData}
  width="100%"
  height="300px"
  title="Monthly Coffee Production by Country"
  chartArea="50%"
  colors={['#b0120a', '#ffab91', '#e0120a', '#afab91']}
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Line Chart" size="large">
              <GoogleLineChart
                data={lineChartData}
                width="100%"
                height="300px"
                title="Monthly Coffee Production by Country"
                chartArea="50%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleLineChart } from '../../components/charts/google-chart';

const { lineChartData } = gCharts;

<GoogleLineChart
  data={lineChartData}
  width="100%"
  height="300px"
  title="Monthly Coffee Production by Country"
  chartArea="50%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Multiple Line Chart" size="large">
              <GoogleMultiLineChart
                data={MultilineChartData}
                width="100%"
                height="300px"
                title="Monthly Coffee Production by Country"
                chartArea="50%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleMultiLineChart } from '../../components/charts/google-chart';

const { MultilineChartData } = gCharts;

<GoogleMultiLineChart
  data={MultilineChartData}
  width="100%"
  height="300px"
  title="Monthly Coffee Production by Country"
  chartArea="50%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Organization Chart" size="large">
              <GoogleOrgChart
                data={organizationChartData}
                width="100%"
                height="300px"
                title="Monthly Coffee Production by Country"
                chartArea="100%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleOrgChart } from '../../components/charts/google-chart';

const { organizationChartData } = gCharts;

<GoogleOrgChart
  data={organizationChartData}
  width="100%"
  height="300px"
  title="Monthly Coffee Production by Country"
  chartArea="100%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Basic Pie Chart" size="large">
              <GoogleBasicPieChart
                data={pieChartData}
                width="100%"
                height="300px"
                title="My Daily Activities"
                chartArea="100%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { GoogleBasicPieChart } from '../../components/charts/google-chart';

const { pieChartData } = gCharts;

<GoogleBasicPieChart
  data={pieChartData}
  width="100%"
  height="300px"
  title="My Daily Activities"
  chartArea="100%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="3d Pie Chart" size="large">
              <Google3dPieChart
                data={pieChartData}
                width="100%"
                height="300px"
                title="My Daily Activities"
                chartArea="100%"
              />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import gCharts from '../../demoData/google-charts.json';
import { Google3dPieChart } from '../../components/charts/google-chart';

const { pieChartData } = gCharts;

<Google3dPieChart
  data={pieChartData}
  width="100%"
  height="300px"
  title="My Daily Activities"
  chartArea="100%"
/>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};
export default GoogleChart;
