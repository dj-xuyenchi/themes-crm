<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	const breadcrumbData = {
		pageTitle: 'Leaflet Maps',
		bcItem: 'Features',
		bcItemActive: 'Leaflet Maps'
	};

	let mapElement;
	let map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

			var customIcon = L.icon({
				iconUrl: '/img/markar-icon.png',
				iconSize: [48, 48],
				iconAnchor: [22, 94],
				popupAnchor: [-3, -76]
			});

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet
				.marker([51.5, -0.09], { icon: customIcon })
				.addTo(map)
				.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
				.openPopup();
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<svelte:head>
	<title>Leaflet Maps</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12} class="mb-25">
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={6} class="mb-25">
				<Card>
					<CardHeader>
						<h6>Leaflet Map Basic</h6>
					</CardHeader>
					<CardBody class="py-25">
						<div class="leaflet-map" bind:this={mapElement} />
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	@import 'leaflet/dist/leaflet.css';
	.leaflet-map {
		width: 100%;
		height: 400px;
	}
</style>
