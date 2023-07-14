<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import { onMount } from 'svelte';

	let radialbarChart;
	let lineChart;
	let areaChart;
	let barChart;
	let stackedChart;
	let horizontalChart;
	let pieChart;
	let donutChart;
	let radarChart;
	let polarAreaChart;

	const labels = ['Target', 'Completed', 'In Progress'];
	const radialbarConfig = {
		series: [90, 80, 70],
		colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
		chart: {
			width: '100%',
			height: '100%',
			type: 'radialBar',
			sparkline: {
				enabled: true
			}
		},
		legend: {
			show: false
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: '28%'
				},
				track: {
					show: true,
					margin: 11
				},
				dataLabels: {
					show: true,
					name: {
						offsetY: 20
					},
					value: {
						fontSize: '24px',
						fontFamily: '"Jost", sans-serif',
						fontWeight: 600,
						offsetY: -21
					},
					total: {
						show: true,
						label: 'Completed',
						fontSize: '16px',
						fontFamily: '"Jost", sans-serif',
						fontWeight: 400,
						color: '#404040',
						formatter: function (w) {
							return '60%';
						}
					}
				}
			}
		},
		stroke: {
			lineCap: 'round'
		},
		grid: {
			padding: {
				to: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		},
		labels
	};

	const lineOptions = {
		series: [
			{
				name: 'Desktops',
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}
		],
		chart: {
			height: 285,
			type: 'line',
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		title: {
			text: 'Product Trends by Month',
			align: 'left'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'],
				opacity: 0.5
			}
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
		}
	};

	const areaOptions = {
		series: [
			{
				name: 'Area One',
				data: [31, 40, 28, 51, 42, 109, 100]
			},
			{
				name: 'Area Two',
				data: [11, 32, 45, 32, 34, 52, 41]
			}
		],
		chart: {
			height: 350,
			type: 'area'
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			type: 'datetime',
			categories: [
				'2018-09-19T00:00:00.000Z',
				'2018-09-19T01:30:00.000Z',
				'2018-09-19T02:30:00.000Z',
				'2018-09-19T03:30:00.000Z',
				'2018-09-19T04:30:00.000Z',
				'2018-09-19T05:30:00.000Z',
				'2018-09-19T06:30:00.000Z'
			]
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			}
		}
	};

	const barChartOptions = {
		series: [
			{
				name: 'Net Profit',
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
			},
			{
				name: 'Revenue',
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
			},
			{
				name: 'Free Cash Flow',
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
			}
		],
		chart: {
			type: 'bar',
			height: 350
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
				endingShape: 'rounded'
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
		},
		yaxis: {
			title: {
				text: '$ (thousands)'
			}
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return '$ ' + val + ' thousands';
				}
			}
		}
	};

	const stackedOptions = {
		series: [
			{
				name: 'PRODUCT A',
				data: [44, 55, 41, 67, 22, 43]
			},
			{
				name: 'PRODUCT B',
				data: [13, 23, 20, 8, 13, 27]
			},
			{
				name: 'PRODUCT C',
				data: [11, 17, 15, 15, 21, 14]
			},
			{
				name: 'PRODUCT D',
				data: [21, 7, 25, 13, 22, 8]
			}
		],
		chart: {
			type: 'bar',
			height: 350,
			stacked: true,
			toolbar: {
				show: true
			},
			zoom: {
				enabled: true
			}
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						position: 'bottom',
						offsetX: -10,
						offsetY: 0
					}
				}
			}
		],
		plotOptions: {
			bar: {
				horizontal: false,
				borderRadius: 10,
				dataLabels: {
					total: {
						enabled: true,
						style: {
							fontSize: '13px',
							fontWeight: 900
						}
					}
				}
			}
		},
		xaxis: {
			type: 'datetime',
			categories: [
				'01/01/2011 GMT',
				'01/02/2011 GMT',
				'01/03/2011 GMT',
				'01/04/2011 GMT',
				'01/05/2011 GMT',
				'01/06/2011 GMT'
			]
		},
		legend: {
			position: 'right',
			offsetY: 40
		},
		fill: {
			opacity: 1
		}
	};

	const horizontalOptions = {
		series: [
			{
				data: [44, 55, 41, 64, 22]
			},
			{
				data: [53, 32, 33, 52, 13]
			}
		],
		chart: {
			type: 'bar',
			height: 350
		},
		plotOptions: {
			bar: {
				horizontal: true,
				dataLabels: {
					position: 'top'
				}
			}
		},
		dataLabels: {
			enabled: true,
			offsetX: -6,
			style: {
				fontSize: '12px',
				colors: ['#fff']
			}
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['#fff']
		},
		tooltip: {
			shared: true,
			intersect: false
		},
		xaxis: {
			categories: [2001, 2002, 2003, 2004, 2005]
		}
	};

	const pieOptions = {
		series: [44, 55, 45],
		chart: {
			width: 380,
			type: 'pie'
		},
		labels: ['Team A', 'Team B', 'Team C'],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}
		]
	};

	const donutOptions = {
		series: [44, 55, 41],
		chart: {
			type: 'donut',
			width: 383
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}
		]
	};

	const radarOptions = {
		series: [
			{
				name: 'Series 1',
				data: [80, 50, 30, 40, 100, 20]
			}
		],
		chart: {
			height: 350,
			type: 'radar'
		},
		title: {
			text: 'Basic Radar Chart'
		},
		xaxis: {
			categories: ['January', 'February', 'March', 'April', 'May', 'June']
		}
	};

	const polarAreaOptions = {
		series: [14, 23, 21, 17, 15, 10],
		chart: {
			type: 'polarArea',
			width: 498
		},
		stroke: {
			colors: ['#fff']
		},
		fill: {
			opacity: 0.8
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}
		]
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const chartRadialbar = new ApexCharts(radialbarChart, radialbarConfig);
		const chartLine = new ApexCharts(lineChart, lineOptions);
		const chartArea = new ApexCharts(areaChart, areaOptions);
		const chartBar = new ApexCharts(barChart, barChartOptions);
		const chartStacked = new ApexCharts(stackedChart, stackedOptions);
		const chartHorizontal = new ApexCharts(horizontalChart, horizontalOptions);
		const chartPie = new ApexCharts(pieChart, pieOptions);
		const chartDonut = new ApexCharts(donutChart, donutOptions);
		const chartRadar = new ApexCharts(radarChart, radarOptions);
		const chartPolarArea = new ApexCharts(polarAreaChart, polarAreaOptions);

		chartRadialbar.render();
		chartLine.render();
		chartArea.render();
		chartBar.render();
		chartStacked.render();
		chartHorizontal.render();
		chartPie.render();
		chartDonut.render();
		chartRadar.render();
		chartPolarArea.render();
	});
</script>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Line Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="line-chart-wrap">
				<div class="line-chart">
					<div bind:this={lineChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Radialbar Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="radialbar-chart-wrap d-flex justify-content-center">
				<div class="radialbar-chart">
					<div bind:this={radialbarChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Area Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={areaChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Bar Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={barChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Stacked Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={stackedChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Horizontal Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={horizontalChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Pie Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={pieChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Donut Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={donutChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Radar Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={radarChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6} class="mb-25">
	<Card>
		<CardHeader>
			<h6>Polar Area Chart</h6>
		</CardHeader>
		<CardBody class="pt-25 pb-25">
			<div class="apex-chart-wrap">
				<div class="apex-chart">
					<div bind:this={polarAreaChart} />
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<style lang="scss">
	.radialbar-chart-wrap {
		display: flex;
		align-items: center;
	}
	.radialbar-chart {
		width: 350px;
		height: 350px;
		margin: -25px;
	}
</style>
