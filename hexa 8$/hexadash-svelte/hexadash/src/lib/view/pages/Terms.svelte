<script>
	import { Row, Col } from 'sveltestrap';
</script>

<Row class="justify-content-center mb-50">
	<Col sm={8}>
		<div class="terms-content">
			<div class="terms-content__group">
				<h1>Privacy Policy</h1>
				<p>
					Your privacy is important to us. Any information submitted by the buyer for completing the
					transaction, delivering the product, informing about new product releases, and addressing
					any customer service issues are strictly confidential. We don’t share this information
					with anyone.
				</p>
			</div>
			<div class="terms-content__group">
				<h1>Payment</h1>
				<p>
					To Purchase any of our products, you have the option of paying via PayPal or any major
					credit and debit cards. Extensions and Themes are licensed for one year at a time. After
					that you may renew your license to continue updates and support. We do not store your
					payment or credit card information for your security.
				</p>
			</div>
			<div class="terms-content__group">
				<h1>License Usage</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
			<div class="terms-content__group">
				<h1>Product Updates</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been also the leap into electronic typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
					passages
				</p>
			</div>
			<div class="terms-content__group">
				<h1>Media</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been also the leap into electronic typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
					passages
				</p>
			</div>
			<div class="terms-content__group">
				<h1>Cookies</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been also the leap into electronic typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
					passages
				</p>
			</div>
			<div class="terms-content__group mb-40">
				<h1>Support</h1>
				<p>Please, refer <a href={'#'}>Support Policy</a> page for details.</p>
			</div>
			<div class="terms-content__update">Last update: May 05, 2021</div>
		</div>
	</Col>
</Row>

<style lang="scss">
	:global {
		@import "../../../assets/sass/mixins/media-queries.scss";
		
		.terms {
			margin-top: 10px;
		}
		.terms-breadcrumb {
			background-color: rgba(var(--color-primary-rgba), 0.1);
			-webkit-border-radius: 10px;
			border-radius: 10px;
			min-height: 330px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			margin-top: 10px;
		}

		.terms-breadcrumb .display-1 {
			margin-top: 88px;
		}

		.terms-content {
			background-color: var(--color-white);
			-webkit-box-shadow: 0 10px 50px rgba(var(--color-lighten-rgba), 0.2);
			box-shadow: 0 10px 50px rgba(var(--color-lighten-rgba), 0.2);
			-webkit-border-radius: 10px;
			border-radius: 10px;
			padding: 60px 50px;
			margin-top: -120px;
			@include md{
				padding: 30px;
			}
		}

		.terms-content__group:not(:last-child) {
			margin-bottom: 55px;
			@include md{
				margin-bottom: 30px;
			}
		}

		.terms-content__group h1 {
			margin-bottom: 30px;
		}

		.terms-content__group p {
			font-size: 16px;
			font-weight: 400;
			line-height: 1.6875;
			color: var(--color-gray);
			margin-bottom: 0;
		}

		.terms-content__group p a {
			color: var(--color-secondary);
		}

		.terms-content__update {
			color: var(--color-light);
			font-size: 15px;
		}
	}
</style>
