<script>
	import { Col, Card, CardBody, Button } from 'sveltestrap';
	import pricingData from '@data/pricing-data.json';
</script>

{#each pricingData as data}
	<Col xxl={3} sm={6} class="mb-30">
		<Card class="h-100">
			<CardBody class="p-30">
				<div class="pricing d-flex align-items-center">
					<span
						class=" pricing__tag color-{data.priceTagBg} order-bg-opacity-{data.priceTagBg} rounded-pill "
						>{data.priceTag}</span
					>
				</div>
				<div class="pricing__price rounded">
					<p
						class="pricing_value color-dark d-flex align-items-center text-capitalize fw-600 mb-1"
					>
						<sup>{data.pricePrefix}</sup>
						{data.priceValue}
						<small class="pricing_user">{data.priceSuffix}</small>
					</p>
					<p class="pricing_subtitle mb-0">{data.priceTagline}</p>
				</div>
				<div class="pricing__features">
					<ul>
						{#each data.featureList as item}
							<li>
								<span class="uil uil-{item.icon}" />{item.content}
							</li>
						{/each}
					</ul>
				</div>
			</CardBody>
			<div class="price_action d-flex pb-30 ps-30">
				<Button
					color={data.priceBtnType}
					outline={data.btnOutlined}
					class="btn-squared text-capitalize px-30 {data.btnOutlined ? 'color-light' : ''} fw-500"
					>{data.priceBtnContent}
				</Button>
			</div>
		</Card>
	</Col>
{/each}

<style lang="scss">
	@import '../../../assets/sass/components/pricing.scss';
</style>
