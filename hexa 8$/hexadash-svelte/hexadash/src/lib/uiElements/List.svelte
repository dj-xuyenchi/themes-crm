<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	const listContent = [
		'Header',
		'Racing car sprays burning fuel into crowd.',
		'Japanese princess to wed commoner.',
		'Australian walks 100km after outback crash.',
		'Man charged over missing wedding girl.',
		'Los Angeles battles huge wildfires.',
		'Footer'
	];
</script>

<Card class="card-default card-md mb-4">
	<CardHeader>
		<h6>Sinple List</h6>
	</CardHeader>
	<CardBody>
		<div class="list-box">
			<ul>
				{#each listContent as content}
					<li class="list-box__item">{content}</li>
				{/each}
			</ul>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	.list-box__item {
		font-size: 14px;
		padding: 12px 20px;
		border-left: 1px solid var(--border-color);
		border-right: 1px solid var(--border-color);
		color: var(--color-gray);
	}

	.list-box__item:not(:last-child) {
		border-bottom: 1px solid var(--border-color);
	}

	.list-box__item:last-child {
		-webkit-border-radius: 0 0 5px 5px;
		border-radius: 0 0 5px 5px;
		border-bottom: 1px solid var(--border-color);
		border-left: 1px solid var(--border-color);
		border-right: 1px solid var(--border-color);
	}

	.list-box__item:first-child {
		-webkit-border-radius: 5px 5px 0 0;
		border-radius: 5px 5px 0 0;
		border-top: 1px solid var(--border-color);
		border-left: 1px solid var(--border-color);
		border-right: 1px solid var(--border-color);
	}
</style>
