<script>
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import DraggableListData from '@data/draggableListData.json';

	let tableData = DraggableListData;

	import InlineSVG from 'svelte-inline-svg';

	let hovering = false;

	let drop = (event, target) => {
		event.dataTransfer.dropEffect = 'move';
		let start = parseInt(event.dataTransfer.getData('text/plain'));
		let newTracklist = tableData;

		if (start < target) {
			newTracklist.splice(target + 1, 0, newTracklist[start]);
			newTracklist.splice(start, 1);
		} else {
			newTracklist.splice(target, 0, newTracklist[start]);
			newTracklist.splice(start + 1, 1);
		}
		tableData = newTracklist;
		hovering = null;
	};

	let dragstart = (event, i) => {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.dropEffect = 'move';
		let start = i;
		event.dataTransfer.setData('text/plain', start);
	};
</script>

<Card class="mb-25">
	<CardHeader>
		<h6>Draggable List</h6>
	</CardHeader>
	<CardBody class="pt-0 pb-0">
		<div class="drag-drop-wrap">
			<div class="drag-drop table-responsive-lg w-100 mb-30">
				<table class="table mb-0 table-basic">
					<tbody>
						{#each tableData as item, index (item)}
							<tr
								class="draggable-item"
								animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
								draggable={true}
								on:dragstart={(event) => dragstart(event, index)}
								on:drop|preventDefault={(event) => drop(event, index)}
								ondragover="return false"
								on:dragenter={() => (hovering = index)}
								class:is-active={hovering === index}
							>
								<td>
									<div class="item d-flex align-items-center">
										<InlineSVG src={'/img/svg/move.svg'} />
										<div class="item-info d-flex align-items-center">
											<img src="/img/{item.img}" alt="authorImg" />
											<div class="item_title">
												<h6>
													<a href={'#'}>{item.name}</a>
												</h6>
											</div>
										</div>
									</div>
								</td>
								<td>{item.company}</td>
								<td>{item.orders}</td>
								<td>${item.amount}</td>
								<td>
									<span class="date">{item.date}</span>
								</td>
								<td>
									<div class="table-actions">
										<a href={'#'}>
											<InlineSVG src={'/img/svg/edit.svg'} />
										</a>
										<a href={'#'}>
											<InlineSVG src={'/img/svg/trash-2.svg'} />
										</a>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	.is-active {
		background-color: #dddddd;
		color: #fff;
	}
	.drag-drop-wrap {
		margin: 20px 0;
	}

	.drag-drop-wrap .item {
		min-width: 200px;
	}

	:global {
		.drag-drop-wrap .item svg,
		.drag-drop-wrap .item i {
			color: var(--color-lighten);
			width:24px;
			height:24px;
		}
	}

	.drag-drop-wrap .item-info {
		margin-left: 30px;
		img {
			width: 32px;
			height: 32px;
		}
	}

	.drag-drop-wrap .item_title h6 {
		margin-left: 12px;
		font-size: 14px;
	}

	.drag-drop-wrap .item_title h6 a {
		color: var(--color-dark);
	}

	.drag-drop-wrap .drag-drop table tr {
		cursor: move;
	}

	.drag-drop-wrap .drag-drop table.table-basic tr td {
		background-color: transparent;
	}

	.drag-drop-wrap .date {
		min-width: 150px;
	}
</style>
