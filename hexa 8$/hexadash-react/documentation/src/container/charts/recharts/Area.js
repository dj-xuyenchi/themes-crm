import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect, useLayoutEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import reChartData from '../../../demoData/recharts.json';
import { Main } from '../../styled';

const { data, nullChart } = reChartData;

const ReChartArea = () => {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Area Chart',
    },
  ];
  const [state, setState] = useState({
    responsive: 0,
  });
  const { responsive } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width =
        element !== null
          ? element.closest('.ant-card-body').clientWidth
          : document.querySelector('.ant-card-body').clientWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Area Chart" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="SIMPLE AREA CHART" size="large" more={false}>
              <AreaChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 10,
                  right: window.innerWidth <= 375 ? 34 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { BarChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

<AreaChart
  width={responsive - (5 * responsive) / 100}
  height={responsive / 2}
  data={data}
  margin={{
    top: 10,
    right: window.innerWidth <= 375 ? 34 : 40,
    left: window.innerWidth <= 375 ? -18 : 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
</AreaChart>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>

          <Col md={12} xs={24}>
            <Cards title="STACKED AREA CHART" size="large" more={false}>
              <AreaChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 10,
                  right: window.innerWidth <= 375 ? 34 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { BarChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

<AreaChart
  width={responsive - (5 * responsive) / 100}
  height={responsive / 2}
  data={data}
  margin={{
    top: 10,
    right: window.innerWidth <= 375 ? 34 : 40,
    left: window.innerWidth <= 375 ? -18 : 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
</AreaChart>
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="AreaChart Connect Nulls" size="large" more={false}>
              <div>
                <AreaChart
                  width={responsive - (5 * responsive) / 100}
                  height={responsive / 2}
                  data={nullChart}
                  margin={{
                    top: 10,
                    right: window.innerWidth <= 375 ? 34 : 40,
                    left: window.innerWidth <= 375 ? -18 : 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <AreaChart
                  width={responsive - (5 * responsive) / 100}
                  height={responsive / 2}
                  data={data}
                  margin={{
                    top: 10,
                    right: window.innerWidth <= 375 ? 34 : 40,
                    left: window.innerWidth <= 375 ? -18 : 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { BarChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

<AreaChart
  width={responsive - (5 * responsive) / 100}
  height={responsive / 2}
  data={nullChart}
  margin={{
    top: 10,
    right: window.innerWidth <= 375 ? 34 : 40,
    left: window.innerWidth <= 375 ? -18 : 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
</AreaChart>
<AreaChart
  width={responsive - (5 * responsive) / 100}
  height={responsive / 2}
  data={data}
  margin={{
    top: 10,
    right: window.innerWidth <= 375 ? 34 : 40,
    left: window.innerWidth <= 375 ? -18 : 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
</AreaChart>
`
}
                            </code>
                        </pre>
                    </div>
              </div>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="synchronized AreaCharts" size="large" more={false}>
              <div>
                <AreaChart
                  width={responsive - (5 * responsive) / 100}
                  height={responsive / 2}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: window.innerWidth <= 375 ? 34 : 40,
                    left: window.innerWidth <= 375 ? -18 : 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { BarChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

<AreaChart
  width={responsive - (5 * responsive) / 100}
  height={responsive / 2}
  data={data}
  syncId="anyId"
  margin={{
    top: 10,
    right: window.innerWidth <= 375 ? 34 : 40,
    left: window.innerWidth <= 375 ? -18 : 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
</AreaChart>
`
}
                            </code>
                        </pre>
                    </div>
                <p>Maybe some other content</p>
                <AreaChart
                  width={responsive - (5 * responsive) / 100}
                  height={responsive / 2}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: window.innerWidth <= 375 ? 34 : 40,
                    left: window.innerWidth <= 375 ? -18 : 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
                <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { BarChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

<AreaChart
  width={responsive - (5 * responsive) / 100}
  height={responsive / 2}
  data={data}
  syncId="anyId"
  margin={{
    top: 10,
    right: window.innerWidth <= 375 ? 34 : 40,
    left: window.innerWidth <= 375 ? -18 : 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
</AreaChart>
`
}
                            </code>
                        </pre>
                    </div>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ReChartArea;
