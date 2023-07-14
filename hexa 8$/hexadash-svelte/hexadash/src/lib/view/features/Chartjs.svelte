<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import Chartjs from '@components/utilities/Chartjs.svelte';
	import DoughnutChart from '@components/utilities/DoughnutChart.svelte';
	import chartData from '@data/dashboardChartContent.json';
	import totalChartData from '@data/totalSaleChart.json';
	import doughnutData from '@data/dashboardChartContent.json';
	import { onMount } from 'svelte';

	let { salesGrowth } = chartData;
	let currentTab = 'today';

	let { SalesOverviewData } = doughnutData;
	let doughnutLabels = ['Revenue', 'Sales', 'Products'];
	let salesOverviewData = null;
	let totalSale = null;

	let innerWidth;
	let primaryColor;
	let primaryColorRGB;
	let infoColor;
	let infoColorRGB;
	let colorWarning;

	const height = 188;
	const radarHeight = 100;

	onMount(() => {
		innerWidth = window.innerWidth;
		primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
		primaryColorRGB = getComputedStyle(document.documentElement).getPropertyValue(
			'--color-primary-rgba'
		);
		infoColor = getComputedStyle(document.documentElement).getPropertyValue('--color-info');
		infoColorRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-info-rgba');
		colorWarning = getComputedStyle(document.documentElement).getPropertyValue('--color-warning');

		salesOverviewData = SalesOverviewData[currentTab];
		totalSale = SalesOverviewData[currentTab].reduce((a, b) => a + b, 0);
	});

	const tooltip = {
		callbacks: {
			label(t) {
				const dstLabel = t.dataset.label;
				const { formattedValue } = t;
				return `  ${formattedValue} ${dstLabel}`;
			},
			labelColor(t) {
				return {
					backgroundColor: t.dataset.hoverBackgroundColor,
					borderColor: 'transparent'
				};
			}
		}
	};

	const linetooltip = {
		usePointStyle: true,
		callbacks: {
			label(t) {
				const dstLabel = t.dataset.label;
				const { formattedValue } = t;
				return `  ${formattedValue} ${dstLabel}`;
			},
			labelColor(t) {
				return {
					backgroundColor: t.dataset.hoverBackgroundColor,
					borderColor: 'transparent'
				};
			}
		}
	};

	$: salesGrowthset = [
		{
			axis: 'y',
			data: salesGrowth[currentTab].orders,
			backgroundColor: `rgba(${primaryColorRGB},0.5)`,
			hoverBackgroundColor: primaryColor,
			label: 'Target',
			total: '8,550',
			prefix: '$',
			growthRate: '25',
			growthStatus: 'up',
			labelType: 'primary',
			maxBarThickness: 18,
			barThickness: 20
		},
		{
			axis: 'y',
			data: salesGrowth[currentTab].sales,
			backgroundColor: `rgba(${infoColorRGB},0.5)`,
			hoverBackgroundColor: infoColor,
			label: 'Total Sales',
			total: '5,550',
			prefix: '$',
			growthRate: '15',
			growthStatus: 'down',
			labelType: 'info',
			maxBarThickness: 18,
			barThickness: 20
		}
	];

	$: chartScales = {
		y: {
			grid: {
				color: '#E3E6EF',
				borderDash: [3, 3],
				zeroLineColor: '#E3E6EF',
				zeroLineWidth: 1,
				zeroLineBorderDash: [3, 3],
				drawTicks: false,
				drawBorder: false,
				borderWidth: 0
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family:"'Jost', sans-serif",
				},
				color: '#747474',
				max: Math.max(...salesGrowth[currentTab].sales),
				stepSize: 20,
				padding: 15,
				callback: function (value, index, ticks) {
					return value + 'k';
				}
			}
		},

		x: {
			grid: {
				display: true,
				zeroLineWidth: 0,
				drawTicks: true,
				drawBorder: false,
				zeroLineColor: '#E3E6EF',
				color: 'transparent',
				z: 1
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family:"'Jost', sans-serif",
				},
				color: '#747474'
			}
		}
	};

	$: barChartStacked = {
		y: {
			stacked: true,
			grid: {
				color: '#E3E6EF',
				borderDash: [3, 3],
				zeroLineColor: '#E3E6EF',
				zeroLineWidth: 1,
				zeroLineBorderDash: [3, 3],
				drawTicks: false,
				drawBorder: false,
				borderWidth: 0
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family:"'Jost', sans-serif",
				},
				color: '#747474',
				max: Math.max(...salesGrowth[currentTab].sales),
				stepSize: 20,
				padding: 15,
				callback: function (value, index, ticks) {
					return value + 'k';
				}
			}
		},

		x: {
			stacked: true,
			grid: {
				display: true,
				zeroLineWidth: 0,
				drawTicks: true,
				drawBorder: false,
				zeroLineColor: '#E3E6EF',
				color: 'transparent',
				z: 1
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family:"'Jost', sans-serif",
				},
				color: '#747474'
			}
		}
	};

	$: responsive = [];
	const options = {
		indexAxis: 'y'
	};

	$: lineChartDataset = [
		{
			data: totalChartData.orders,
			backgroundColor: `rgba(${primaryColorRGB},0.5)`,
			hoverBackgroundColor: primaryColor,
			borderColor: primaryColor,
			label: 'Orders',
			total: '8,550',
			prefix: '$',
			growthRate: '25',
			growthStatus: 'up',
			labelType: 'primary',
			maxBarThickness: 10,
			barThickness: 12
		},
		{
			data: totalChartData.sales,
			backgroundColor: `rgba(${infoColorRGB},0.5)`,
			hoverBackgroundColor: infoColor,
			borderColor: infoColor,
			label: 'Sales',
			total: '5,550',
			prefix: '$',
			growthRate: '15',
			growthStatus: 'down',
			labelType: 'info',
			maxBarThickness: 10,
			barThickness: 12
		}
	];
	$: lineChartLayout = {
		padding: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}
	};

	$: areaChartLabels = [
		'Eating',
		'Drinking',
		'Sleeping',
		'Designing',
		'Coding',
		'Cycling',
		'Running'
	];

	$: areaChartDataset = [
		{
			label: 'My First Dataset',
			data: [65, 59, 90, 81, 56, 55, 40],
			fill: true,
			backgroundColor: `rgba(${primaryColorRGB},0.5)`,
			borderColor: primaryColor,
			pointBackgroundColor: primaryColor,
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: primaryColor
		},
		{
			label: 'My Second Dataset',
			data: [28, 48, 40, 19, 96, 27, 100],
			fill: true,
			backgroundColor: `rgba(${infoColorRGB},0.5)`,
			borderColor: infoColor,
			pointBackgroundColor: infoColor,
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: infoColor
		}
	];

	$: pieChartHeight = 250;
	let pieChartScales = {
		y: {
			display: false
		},
		x: {
			display: false
		}
	};
	let pieChartOptions = {
		maintainAspectRatio: false,
		hoverOffset: 3,
		responsive: false,
		borderColor: '#fff',
		plugins: {
			legend: {
				display: false
			},
			labels: {
				display: false
			}
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	};
	let pieChartDataStats = [
		{
			icons: ['facebook'],
			labels: ['Facebook'],
			revenue: [4621],
			color: '#8231D3'
		},
		{
			icons: ['twitter'],
			labels: ['Twitter'],
			revenue: [4245],
			color: '#00AAFF'
		},
		{
			icons: ['google'],
			labels: ['Google'],
			revenue: [12112],
			color: '#5840FF'
		}
	];
	let pieChartLabels = [];
	let pieChartRevenues = [];
	let pieChartColors = [];
	pieChartDataStats.forEach((elm) => {
		pieChartLabels.push(elm.labels);
		pieChartRevenues.push(elm.revenue);
		pieChartColors.push(elm.color);
	});

	$: pieChartData = [
		{
			label: 'Revenue Generated',
			data: pieChartRevenues,
			backgroundColor: pieChartColors
		}
	];

	let pieChartTooltip = {
		backgroundColor: '#FFF',
		titleFontSize: 16,
		titleFontColor: '#0066ff',
		bodyFontColor: '#000',
		bodyFontSize: 14,
		displayColors: false,

		callbacks: {
			title(t) {
				console.log(t);
			}
		}
	};

	$: doughnutDatasets = [
		{
			data: salesOverviewData,
			backgroundColor: [colorWarning, infoColor, primaryColor],
			centerText: '$7.9K',
			centerTextLabel: 'Revenue'
		}
	];
	const doughnutOptions = {
		cutout: 62,
		borderWidth: 2,
		maintainAspectRatio: false,
		responsive: false,
		borderColor: '#fff',
		plugins: {
			legend: {
				display: false
			},
			labels: {
				display: false
			}
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	};
</script>

<Col lg={6} class="mb-4">
	<Card>
		<CardHeader>Bar Chart</CardHeader>
		<CardBody>
			<div class="parentContainer">
				<Chartjs
					className="salesChart"
					id="salesChart"
					labels={salesGrowth[currentTab].labels}
					datasets={salesGrowthset}
					type="bar"
					{tooltip}
					scales={chartScales}
					{responsive}
					height={innerWidth <= 1399 ? 120 : 188}
				/>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6} class="mb-4">
	<Card>
		<CardHeader>Horizontal Chart</CardHeader>
		<CardBody>
			<div class="parentContainer">
				<Chartjs
					className="salesChart"
					id="salesChart2"
					labels={salesGrowth[currentTab].labels}
					datasets={salesGrowthset}
					type="bar"
					{tooltip}
					scales={chartScales}
					{responsive}
					height={innerWidth <= 1399 ? 120 : 188}
					{options}
				/>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6} class="mb-4">
	<Card>
		<CardHeader>Bar Chart Stacked</CardHeader>
		<CardBody>
			<div class="parentContainer">
				<Chartjs
					className="salesChart"
					id="salesChartStacked"
					labels={salesGrowth[currentTab].labels}
					datasets={salesGrowthset}
					type="bar"
					{tooltip}
					scales={barChartStacked}
					{responsive}
					height={innerWidth <= 1399 ? 120 : 188}
				/>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6} class="mb-4">
	<Card>
		<CardHeader>Line Chart</CardHeader>
		<CardBody>
			<div class="parentContainer">
				<Chartjs
					className="totalLineCharts"
					id="totalLineCharts"
					labels={totalChartData.labels}
					datasets={lineChartDataset}
					type="line"
					scales={chartScales}
					tooltip={linetooltip}
					layout={lineChartLayout}
					{height}
				/>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-4">
	<Card>
		<CardHeader>Pie Chart</CardHeader>
		<CardBody>
			<div class="parentContainer d-flex justify-content-center">
				<Chartjs
					type="pie"
					className="pieChart"
					id="pieChart"
					labels={pieChartLabels}
					options={pieChartOptions}
					scales={pieChartScales}
					datasets={pieChartData}
					tooltip={pieChartTooltip}
					height={pieChartHeight}
				/>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6} class="mb-4">
	<Card>
		<CardHeader>Doughnut Chart</CardHeader>
		<CardBody>
			<div class="parentContainer d-flex justify-content-center">
				<DoughnutChart
					type="doughnut"
					id="salesOverviewChart"
					className="salesOverview"
					labels={doughnutLabels}
					datasets={doughnutDatasets}
					options={doughnutOptions}
					tooltip={pieChartTooltip}
					height="250"
				/>
			</div>
		</CardBody>
	</Card>
</Col>
