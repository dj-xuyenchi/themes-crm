<script>
	import { Container, Row, Col, Card, Table, CardBody, Alert } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'Credit',
		bcItem: 'Docs',
		bcItemActive: 'Credit'
	};
</script>

<svelte:head>
	<title>HexaDash</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Card>
					<CardBody class="p-30">
						<div class="hexadash-template-documentation">
							<h2>Credits/Plugins</h2>
							<p>
								Here is the list of plugin with the official documentation. <strong>HexaDash</strong
								> won't be easy to build without using them and we are thankful to them.
							</p>
							<div class="card-table table-responsive">
								<Table bordered>
									<thead>
										<tr>
											<th>Plugins</th>
											<th>Url</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Svelte</td>
											<td><a href="https://svelte.dev/">https://svelte.dev/</a></td>
										</tr>
										<tr>
											<td>Svelte Kit</td>
											<td><a href="https://kit.svelte.dev/">https://kit.svelte.dev/</a></td>
										</tr>
										<tr>
											<td>SVELTESTRAP</td>
											<td
												><a href="https://sveltestrap.js.org/?path=/story/components--get-started"
													>https://sveltestrap.js.org/?path=/story/components--get-started</a
												></td
											>
										</tr>
										<tr>
											<td>Moment js</td>
											<td><a href="https://momentjs.com/">https://momentjs.com/</a></td>
										</tr>
										<tr>
											<td>Axios</td>
											<td
												><a href="https://github.com/axios/axios">https://github.com/axios/axios</a
												></td
											>
										</tr>
										<tr>
											<td>Chart js</td>
											<td
												><a href="https://www.npmjs.com/package/svelte-chartjs"
													>https://www.npmjs.com/package/svelte-chartjs</a
												></td
											>
										</tr>
										<tr>
											<td>Font Awesome</td>
											<td><a href="https://fontawesome.com/">https://fontawesome.com/</a></td>
										</tr>
										<tr>
											<td>Unicons</td>
											<td
												><a href="https://iconscout.com/unicons/">https://iconscout.com/unicons/</a
												></td
											>
										</tr>
										<tr>
											<td>Swiper</td>
											<td
												><a href="https://www.npmjs.com/package/swiper"
													>https://www.npmjs.com/package/swiper</a
												></td
											>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
