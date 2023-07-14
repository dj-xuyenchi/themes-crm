<script>
	export let notification = {};
	export let onRemove = null;

	const handleButtonClick = () => {
		onRemove();
	};
</script>

<div class="message-wrapper message-wrapper--{notification.type}">
	<div class="message-wrapper__content">
		<span class="message-wrapper__icon">
			<i class="uil uil-{notification.icon}" />
		</span>
		<span class="message-wrapper__text"><p>{notification.description}</p></span>
		<button on:click={handleButtonClick}><i class="la la-times" /></button>
	</div>
</div>

<style lang="scss">
	:global {
		.message-wrapper__content {
			min-width: 200px;
			margin-bottom: 15px;
			width: fit-content;
			display: flex;
			align-items: center;
			padding: 10px 16px;
			border-radius: 4px;
			box-shadow: 0 10px 15px rgba(var(--light-gray-rgba), 0.2);
			background-color: var(--color-white);

			button {
				margin-left: 6px;
				border: none;
				background: transparent;
				margin-top: 1px;
			}
		}

		.message-wrapper__icon {
			i,
			svg,
			span {
				color: var(--color-primary);
			}
		}

		.message-wrapper--success .message-wrapper__icon {
			i,
			svg,
			span {
				color: var(--color-success);
			}
		}

		.message-wrapper--warning .message-wrapper__icon {
			i,
			svg,
			span {
				color: var(--color-warning);
			}
		}

		.message-wrapper--error,
		.message-wrapper--danger {
			.message-wrapper__icon {
				i,
				svg,
				span {
					color: var(--color-danger);
				}
			}
		}

		.message-wrapper__icon {
			margin-right: 8px;
		}

		.message-wrapper__icon i,
		.message-wrapper__icon svg,
		.message-wrapper__icon span {
			color: var(--color-gray);
		}

		.message-wrapper__text p {
			font-size: 14px;
			margin-bottom: 0;
			color: var(--color-dark);
		}
	}
</style>
