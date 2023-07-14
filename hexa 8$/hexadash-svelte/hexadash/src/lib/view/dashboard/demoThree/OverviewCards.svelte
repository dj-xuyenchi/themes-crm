<script>
	export let type, icon, total, prefix, suffix, label, growth, growthRate;
</script>

<div class="overview-content overview-content3 bg-none">
	<div class="d-flex align-items-center">
		<div class="revenue-chart-box__Icon me-25 bg-{type} color-white">
			<img class="svg" alt="" src={`/img/svg/${icon}`} />
		</div>
		<div class="d-flex align-items-start flex-wrap">
			<div class="me-10">
				<h1>{prefix + total + suffix}</h1>
				<p class="mt-1 mb-0">{label}</p>
			</div>

			<div class="ap-po-details bg-none">
				<span class="growth-status {growth === 'upward' ? 'color-success' : 'color-danger'}">
					{#if growth === 'upward'}
						<span class="uil uil-arrow-up" />
					{:else}
						<span class="uil uil-arrow-down" />
					{/if}
					<strong>{growthRate}%</strong>
				</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	:global {
		@import '../../../../assets/sass/mixins/mixins.scss';
		@import '../../../../assets/sass/mixins/functions';
		.ap-po-details {
			box-shadow: 0 5px 20px rgba(var(--light-gray-rgba), 0.05);
			padding: 25px 25px 25px 25px;
			background-color: var(--color-white);
			.overview-content {
				p {
					margin: 2px 0 18px;
					color: var(--color-gray);
					@include ofs(15px, lh(15px, 24px), 400);
					text-transform: capitalize;
				}
			}
			.growth-status {
				display: flex;
				align-items: center;
			}
			&--3 {
				flex-wrap: wrap;
				padding: 15px 25px;
				justify-content: space-between;
				.ap-po-details {
					padding: 0;
					margin-top: 6px;
				}
				.overview-content3 {
					box-shadow: none;
					p {
						color: var(--color-gray);
					}
				}
				> div {
					padding: 0;
					flex: 0 auto;
					margin: 10px 0;
					&:not(:last-child) {
						padding-right: 83px;
						@include xxl {
							border-right: none;
							padding-right: 0;
						}
					}
					@include xxl {
						flex: 50%;
					}
					@include sm {
						flex: 100%;
					}
				}
				.ap-po-details {
					strong {
						font-weight: 500;
						font-size: 14px;
					}
				}
				.revenue-chart-box__Icon {
					width: 70px;
					height: 70px;
					min-width: 70px;
				}
			}
		}
		/* Revenue Chart 3 */
		.revenue-chart-box {
			@include sm {
				text-align: center;
			}
		}
		.revenue-chart-box-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20px;
		}

		.overview-content3 {
			box-shadow: 0 5px 20px rgba(var(--light-gray-rgba), 0.05);
			.revenue-chart-box__Icon {
				svg {
					width: 30px;
					height: 30px;
					fill: #fff;
				}
			}
		}

		.revenue-chart-box__Icon {
			width: 60px;
			height: 60px;
			min-width: 60px;
			border-radius: 50%;
			@extend .content-center;
			margin-right: 8px;
		}
	}
</style>
