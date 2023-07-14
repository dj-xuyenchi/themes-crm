<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'Changelog',
		bcItem: 'Pages',
		bcItemActive: 'Changelog'
	};
</script>

<svelte:head>
	<title>Changelog</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={9} class="changelog-19 d-block">
				<div class="changelog mb-30">
					<Card>
						<CardHeader>
							<div class="changelog__title">
								<span class="v-num">Version 1.0.0</span>
								<span class="sign">-</span>
								<span class="rl-date">April 15, 2022</span>
							</div>
						</CardHeader>
						<CardBody class="p-30">
							<div class="version-list">
								<div class="version-list__single">
									<div class="version-list__top">
										<span class="badge badge-round badge-success badge-lg">New</span>
									</div>
									<ul class="version-success">
										<li>Initial Release</li>
									</ul>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</Col>
			<Col lg={3} class="changelog-5 d-block">
				<div class="changeLog-history mb-30">
					<Card>
						<CardHeader class="py-20 px-20">
							<div class="changelog-history__title text-uppercase">CHANGELOG</div>
							<div class="changelog-history__titleExtra" />
						</CardHeader>
						<CardBody class="p-25">
							<h4 class="history-title">VERSION HISTORY</h4>
							<ul class="v-history-list">
								<li>
									<span class="version-name">Version 1.0.0</span><span class="version-date"
										>April 15, 2022</span
									>
								</li>
							</ul>
						</CardBody>
					</Card>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global{
		@import "../../../../assets/sass/mixins/functions";
		@import "../../../../assets/sass/mixins/helpers";
		@import "../../../../assets/sass/mixins/rfs";
		@import "../../../../assets/sass/mixins/media-queries";
		@import "../../../../assets/sass/components/change-log";
	}
</style>
