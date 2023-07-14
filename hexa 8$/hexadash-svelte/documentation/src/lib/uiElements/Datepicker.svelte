<script>
	import { Col, Card, CardHeader, CardBody, TabContent, TabPane } from 'sveltestrap';
	import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';
	import InlineSVG from 'svelte-inline-svg';
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="date-picker-list">
				<div class="custom-date-picker custom-date-picker__bottom">
					<div class="form-group mb-0 form-group-calender">
						<div class="position-relative">
							<DatePicker format="MMMM DD, YYYY" />
							<a href={'#'}>
								<InlineSVG src={'/img/svg/calendar.svg'} />
							</a>
						</div>
					</div>
				</div>

				<div class="custom-date-ranger custom-date-ranger__bottom position-relative d-flex align-items-center">
					<div class="form-group mb-0">
						<DatePicker format="MMMM DD, YYYY" />
					</div>
					<span class="divider">-</span>
					<div class="form-group mb-0">
						<DatePicker format="MMMM DD, YYYY" />
					</div>
					<a href={'#'}>
						<InlineSVG src={'/img/svg/calendar.svg'} />
					</a>
				</div>
			</div>
		</CardBody>
	</Card>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Disabled</h6>
		</CardHeader>
		<CardBody>
			<div class="date-picker-list">
				<div class="custom-date-picker custom-date-picker__bottom">
					<div class="form-group mb-0 form-group-calender">
						<div class="position-relative">
							<DatePicker format="MMMM DD, YYYY" />
							<a href={'#'}>
								<InlineSVG src={'/img/svg/calendar.svg'} />
							</a>
						</div>
					</div>
				</div>

				<div
					class="custom-date-ranger custom-date-ranger__bottom position-relative d-flex align-items-center date-picker-disabled"
				>
					<div class="form-group mb-0">
						<DatePicker format="MMMM DD, YYYY" />
					</div>
					<span class="divider">-</span>
					<div class="form-group mb-0">
						<DatePicker format="MMMM DD, YYYY" />
					</div>
					<a href={'#'}>
						<InlineSVG src={'/img/svg/calendar.svg'} />
					</a>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Three Sizes</h6>
		</CardHeader>
		<CardBody>
			<TabContent class="nav-tabs-datepicker">
				<TabPane class="mt-40" tabId="large" tab="Large" active>
					<div class="date-picker-list ">
						<div class="custom-date-picker custom-date-picker__bottom custom-date-picker__lg">
							<div class="form-group mb-0 form-group-calender">
								<div class="position-relative">
									<DatePicker format="MMMM DD, YYYY" />
									<a href={'#'}>
										<InlineSVG src={'/img/svg/calendar.svg'} />
									</a>
								</div>
							</div>
						</div>

						<div class="custom-date-ranger custom-date-ranger__bottom custom-date-ranger__lg position-relative d-flex align-items-center">
							<div class="form-group mb-0">
								<DatePicker format="MMMM DD, YYYY" />
							</div>
							<span class="divider">-</span>
							<div class="form-group mb-0">
								<DatePicker format="MMMM DD, YYYY" />
							</div>
							<a href={'#'}>
								<InlineSVG src={'/img/svg/calendar.svg'} />
							</a>
						</div>
					</div>
				</TabPane>
				<TabPane class="mt-40" tabId="default" tab="Default">
					<div class="date-picker-list">
						<div class="custom-date-picker custom-date-picker__bottom">
							<div class="form-group mb-0 form-group-calender">
								<div class="position-relative">
									<DatePicker format="MMMM DD, YYYY" />
									<a href={'#'}>
										<InlineSVG src={'/img/svg/calendar.svg'} />
									</a>
								</div>
							</div>
						</div>

						<div class="custom-date-ranger custom-date-ranger__bottom position-relative d-flex align-items-center">
							<div class="form-group mb-0">
								<DatePicker format="MMMM DD, YYYY" />
							</div>
							<span class="divider">-</span>
							<div class="form-group mb-0">
								<DatePicker format="MMMM DD, YYYY" />
							</div>
							<a href={'#'}>
								<InlineSVG src={'/img/svg/calendar.svg'} />
							</a>
						</div>
					</div>
				</TabPane>
				<TabPane  class="mt-40" tabId="small" tab="Small">
					<div class="date-picker-list">
						<div class="custom-date-picker custom-date-picker__bottom custom-date-picker__sm">
							<div class="form-group mb-0 form-group-calender">
								<div class="position-relative">
									<DatePicker format="MMMM DD, YYYY" />
									<a href={'#'}>
										<InlineSVG src={'/img/svg/calendar.svg'} />
									</a>
								</div>
							</div>
						</div>

						<div class="custom-date-ranger custom-date-ranger__sm position-relative d-flex align-items-center">
							<div class="form-group mb-0">
								<DatePicker format="MMMM DD, YYYY" />
							</div>
							<span class="divider">-</span>
							<div class="form-group mb-0">
								<DatePicker format="MMMM DD, YYYY" />
							</div>
							<a href={'#'}>
								<InlineSVG src={'/img/svg/calendar.svg'} />
							</a>
						</div>
					</div>
				</TabPane>
			</TabContent>
		</CardBody>
	</Card>
</Col>

<style lang="scss">
	:global{
		.nav-tabs-datepicker{
			.nav-tabs{
				border-bottom: none;
				display: inline-flex;
				li{
					&:first-child{
						a{
							border-radius: 3px 0 0 3px;
							&:not(.active){
								border-right: transparent !important;
							}
						}
					}
					&:last-child{
						a{
							border-radius: 0 3px 3px 0;
							&:not(.active){
								border-left: transparent !important;
							}
						}
					}
					a{
						position: relative;
						flex: initial;
						line-height: 2.65;
						padding: 0 16.44px;
						border-width: 1px 1px 1px 1px;
						border-radius: 0;
						min-height: 42px;
						color: var(--color-light);
						margin: 0;
						border: 1px solid var(--border-color) !important;
						&.active{
							border-color: var(--color-primary) !important;
							border-left-color: var(--color-primary) !important;
							border-right-color: var(--color-primary) !important;
							color: var(--color-primary);
						}
					}
				}
			}
		}
	}
</style>
