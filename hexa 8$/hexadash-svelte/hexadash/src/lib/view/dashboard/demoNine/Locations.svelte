<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '$lib/components/cards/CardExtra.svelte';
	import { onMount } from 'svelte';
	const mapAPI = 'AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c';
	let mapLight;
	let myLatLng = { lat: 50.797897, lng: -1.077641 };
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

	onMount(async () => {
		setTimeout(() => {
			let map2 = new google.maps.Map(mapLight, mapTwo);
			let markerOption = {
				position: myLatLng,
				icon: '/img/markar-icon.png'
			};
			var marker2 = new google.maps.Marker(markerOption);
			marker2.setMap(map2);
		}, 500);
	});
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key={mapAPI}&callback=initMap">
	</script>
</svelte:head>

<Card class="border-0 px-25 h-100">
	<CardHeader class="px-0 border-0">
		<h6>Location</h6>
		<CardExtra />
	</CardHeader>
	<CardBody class="p-0 pb-30">
		<div class="google-map" bind:this={mapLight} />
	</CardBody>
</Card>

<style>
	.google-map {
		width: 100%;
		height: 100%;
	}
</style>
