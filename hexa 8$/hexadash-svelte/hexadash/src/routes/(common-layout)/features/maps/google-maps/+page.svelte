<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import { onMount } from 'svelte';

	const breadcrumbData = {
		pageTitle: 'Google Maps',
		bcItem: 'Features',
		bcItemActive: 'Google Maps'
	};

	const mapAPI = 'AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c';

	let mapBasic;
	let mapLight;
	let mapDark;
	let mapCustomTheme;

	let myLatLng = { lat: 50.797897, lng: -1.077641 };
	var mapProp = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		styles: []
	};
	let mapTwo = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		styles: [
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
					{
						color: '#e9e9e9'
					},
					{
						lightness: 17
					}
				]
			},
			{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [
					{
						color: '#f5f5f5'
					},
					{
						lightness: 20
					}
				]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.fill',
				stylers: [
					{
						color: '#ffffff'
					},
					{
						lightness: 17
					}
				]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#ffffff'
					},
					{
						lightness: 29
					},
					{
						weight: 0.2
					}
				]
			},
			{
				featureType: 'road.arterial',
				elementType: 'geometry',
				stylers: [
					{
						color: '#ffffff'
					},
					{
						lightness: 18
					}
				]
			},
			{
				featureType: 'road.local',
				elementType: 'geometry',
				stylers: [
					{
						color: '#ffffff'
					},
					{
						lightness: 16
					}
				]
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [
					{
						color: '#f5f5f5'
					},
					{
						lightness: 21
					}
				]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [
					{
						color: '#dedede'
					},
					{
						lightness: 21
					}
				]
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [
					{
						visibility: 'on'
					},
					{
						color: '#ffffff'
					},
					{
						lightness: 16
					}
				]
			},
			{
				elementType: 'labels.text.fill',
				stylers: [
					{
						saturation: 36
					},
					{
						color: '#333333'
					},
					{
						lightness: 40
					}
				]
			},
			{
				elementType: 'labels.icon',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [
					{
						color: '#f2f2f2'
					},
					{
						lightness: 19
					}
				]
			},
			{
				featureType: 'administrative',
				elementType: 'geometry.fill',
				stylers: [
					{
						color: '#fefefe'
					},
					{
						lightness: 20
					}
				]
			},
			{
				featureType: 'administrative',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#fefefe'
					},
					{
						lightness: 17
					},
					{
						weight: 1.2
					}
				]
			}
		]
	};
	let mapThree = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		styles: [
			{
				featureType: 'all',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#ffffff'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels.text.stroke',
				stylers: [
					{
						visibility: 'on'
					},
					{
						color: '#424b5b'
					},
					{
						weight: 2
					},
					{
						gamma: '1'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels.icon',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'administrative',
				elementType: 'geometry',
				stylers: [
					{
						weight: 0.6
					},
					{
						color: '#545b6b'
					},
					{
						gamma: '0'
					}
				]
			},
			{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [
					{
						color: '#545b6b'
					},
					{
						gamma: '1'
					},
					{
						weight: '10'
					}
				]
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [
					{
						color: '#666c7b'
					}
				]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [
					{
						color: '#545b6b'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [
					{
						color: '#424a5b'
					},
					{
						lightness: '0'
					}
				]
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [
					{
						color: '#666c7b'
					}
				]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
					{
						color: '#2e3546'
					}
				]
			}
		]
	};
	let mapFour = {
		center: myLatLng,
		zoom: 13,
		scrollwheel: false,
		styles: [
			{
				featureType: 'all',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#ffffff'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels.text.stroke',
				stylers: [
					{
						visibility: 'on'
					},
					{
						color: '#424b5b'
					},
					{
						weight: 2
					},
					{
						gamma: '1'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels.icon',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'administrative',
				elementType: 'geometry',
				stylers: [
					{
						weight: 0.6
					},
					{
						color: '#fff'
					},
					{
						gamma: '0'
					}
				]
			},
			{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [
					{
						color: '#5F63F2'
					},
					{
						gamma: '1'
					},
					{
						weight: '10'
					}
				]
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [
					{
						color: '#5F63F290'
					}
				]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [
					{
						color: 'green'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [
					{
						color: 'green'
					},
					{
						lightness: '0'
					}
				]
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [
					{
						color: '#666c7b'
					}
				]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [
					{
						color: '#ffffff'
					}
				]
			}
		]
	};

	onMount(async () => {
		setTimeout(() => {
			let map1 = new google.maps.Map(mapBasic, mapProp);
			let map2 = new google.maps.Map(mapLight, mapTwo);
			let map3 = new google.maps.Map(mapDark, mapThree);
			let map4 = new google.maps.Map(mapCustomTheme, mapFour);
			let markerOption = {
				position: myLatLng,
				icon: '/img/markar-icon.png'
			};
			var marker = new google.maps.Marker(markerOption);
			var marker2 = new google.maps.Marker(markerOption);
			var marker3 = new google.maps.Marker(markerOption);
			var marker4 = new google.maps.Marker(markerOption);

			marker.setMap(map1);
			marker2.setMap(map2);
			marker3.setMap(map3);
			marker4.setMap(map4);
		}, 500);
	});
</script>

<svelte:head>
	<title>Google Maps</title>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key={mapAPI}&callback=initMap">
	</script>
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
						<h6>Google Map Basic</h6>
					</CardHeader>
					<CardBody class="py-25">
						<div class="google-map" bind:this={mapBasic} />
					</CardBody>
				</Card>
			</Col>
			<Col lg={6} class="mb-25">
				<Card>
					<CardHeader>
						<h6>Google Map Light</h6>
					</CardHeader>
					<CardBody class="py-25">
						<div class="google-map" bind:this={mapLight} />
					</CardBody>
				</Card>
			</Col>
			<Col lg={6} class="mb-25">
				<Card>
					<CardHeader>
						<h6>Google Map Dark</h6>
					</CardHeader>
					<CardBody class="py-25">
						<div class="google-map" bind:this={mapDark} />
					</CardBody>
				</Card>
			</Col>
			<Col lg={6} class="mb-25">
				<Card>
					<CardHeader>
						<h6>Google Map Custom Theme</h6>
					</CardHeader>
					<CardBody class="py-25">
						<div class="google-map" bind:this={mapCustomTheme} />
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	.google-map {
		height: 400px;
	}
</style>
