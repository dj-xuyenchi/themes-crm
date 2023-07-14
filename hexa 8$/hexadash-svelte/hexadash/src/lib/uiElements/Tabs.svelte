<script>
	import {
		Col,
		Card,
		CardHeader,
		CardBody,
		TabContent,
		TabPane
	} from 'sveltestrap';
</script>

<Col lg={6}>
<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Basic</h6>
	</CardHeader>
	<CardBody>
		<div class="custom-tab">
			<TabContent class="nav-tabs-global">
				<TabPane tabId="alpha" tab="Alpha" active>
					<p>Tab contents</p>
				</TabPane>
				<TabPane tabId="bravo" tab="Bravo">
					<p>Tab two contents</p>
				</TabPane>
				<TabPane tabId="charlie" tab="Charlie">
					<p>Tab Three contents</p>
				</TabPane>
			</TabContent>
		</div>
	</CardBody>
</Card>
<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Disabled</h6>
	</CardHeader>
	<CardBody>
		<TabContent class="nav-tabs-global">
			<TabPane tabId="alpha" tab="Alpha" active>
				<p>Tab contents</p>
			</TabPane>
			<TabPane tabId="bravo" tab="Bravo">
				<p>Tab two contents</p>
			</TabPane>
			<TabPane tabId="charlie" tab="Charlie" disabled>
				<p>Tab Three contents</p>
			</TabPane>
		</TabContent>
	</CardBody>
</Card>
</Col>

<Col lg={6}>
<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Vertical</h6>
	</CardHeader>
	<CardBody>
		<TabContent class="nav-tabs-global tab-vertical" vertical>
			<TabPane tabId="alpha" tab="Alpha" active>
				<p>Tab contents</p>
			</TabPane>
			<TabPane tabId="bravo" tab="Bravo">
				<p>Tab two contents</p>
			</TabPane>
			<TabPane tabId="charlie" tab="Charlie">
				<p>Tab Three contents</p>
			</TabPane>
		</TabContent>
	</CardBody>
</Card>
</Col>


<style lang="scss">
	:global {

		// Tab Css
		.nav-tabs-global {
			.nav-tabs {
				position: relative;
				margin-bottom: 18px;
				border-bottom: none;

				&:after {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 3px;
					border-radius: 10px;
					content: "";
					background-color: var(--bg-lighter);
				}
			}

			.nav-item {
				&:not(:last-child) {
					margin-right: 12px;
					;
				}
			}

			.nav-link {
				position: relative;
				font-size: 14px;
				color: var(--color-dark) !important;
				border: none;
				isolation: auto !important;

				&.active {
					color: var(--color-primary) !important;

					&:after {
						opacity: 1;
						visibility: visible;
					}
				}

				&:after {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 3px;
					border-radius: 10px;
					content: '';
					opacity: 0;
					visibility: hidden;
					z-index: 10;
					background-color: var(--color-primary);
				}
			}

			.tab-content {
				p {
					font-size: 14px;
				}
			}
		}

		// Tab Direction
		.nav-tabs-global {
			&.tab-vertical {
				display: flex;
				max-height: 200px;
				overflow: hidden;

				.nav-tabs {
					flex-flow: column;
					margin: 0 20px 0 0;
					overflow-y: scroll;
					min-width: 80px;
					overflow: hidden auto;
					scrollbar-width: thin;
					scrollbar-color: var(--thumbBG) var(--scrollbarBG);

					&::-webkit-scrollbar {
						width: 11px;
					}

					&::-webkit-scrollbar-track {
						background: var(--scrollbarBG);
					}

					&::-webkit-scrollbar-thumb {
						background-color: var(--thumbBG);
						border-radius: 6px;
						border: 3px solid var(--scrollbarBG);
					}

					&:after {
						width: 2px;
						height: 100%;
						left: auto;
						right: 0;
					}

					.nav-item {
						margin-right: 0;
					}

					.nav-link {
						&:after {
							width: 3px;
							height: 100%;
							left: auto;
							right: 0;
						}
					}
				}

				.tab-content {
					flex: 19;
				}
			}
		}

		// Tab Size
		.nav-tabs-global {
			&.tab-small {
				.nav-tabs {
					margin-bottom: 12px;
				}

				.nav-link {
					padding: 6px 12px;
				}
			}

			&.tab-large {
				.nav-tabs {
					margin-bottom: 25px;
				}

				.nav-link {
					padding: 15px 12px;
				}
			}
		}

		// Tan Nav Controller
		.nav-controller-slide {
			.nav-controller-content {
				margin-top: 20px;
			}
		}
	}
</style>