<script>
	import { Input } from 'sveltestrap';
	import { createTodos } from '@store/todoStore';
	import todoData from '@data/todo.json';

	let todos = createTodos(todoData);

	export let header;
	export let todoStatus;
	export let description;
	export let todoLimit;

	export let trash = $todos.filter((item) => item.trash);
	export let completed = $todos.filter((item) => item.completed);
</script>

<div class="task-list-style">
	<div class="ninjadash-tassklist-wrap">
		{#if header !== ''}
			<div class="ninjadash-tasklist-head">
				<h2 class="ninjadash-tasklist-head__title">{header}</h2>
			</div>
		{/if}

		<div class="ninjadash-tasklist-body">
			{#if todoStatus === 'trash'}
				{#if trash.length}
					<ul class="ninjadash-tasklist">
						{#each $todos.filter((item) => item.trash) as todo}
							<li class="ninjadash-tasklist-item">
								<div class="ninjadash-tasklist-item__content">
									<div class="ninjadash-tasklist-item__title">
										<Input
											type="checkbox"
											checked={!!todo.completed}
											label={todo.title}
											id={todo.id}
											class="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex p-0"
											disabled
										/>
									</div>

									{#if description}
										<div class="ninjadash-tasklist-item__text">
											<p>{todo.description}</p>
										</div>
									{/if}
								</div>
								<div class="ninjadash-tasklist-item__action">
									<a href={'#'} on:click|preventDefault={() => todos.trash(todo)}>
										<i class="uil uil-redo" />
									</a>
									<a href={'#'} on:click|preventDefault={() => todos.remove(todo)}>
										<i class="uil uil-multiply" />
									</a>
								</div>
							</li>
						{/each}
					</ul>
				{:else}
					<div class="ninjadash-tasklist-empty">
						<span>Sorry !! No Trash Item Found :(</span>
					</div>
				{/if}
			{:else if todoStatus === 'completed'}
				{#if completed.length}
					<ul class="ninjadash-tasklist">
						{#each $todos.filter((item) => item.completed) as todo}
							{#if !todo.trash}
								<li class="ninjadash-tasklist-item">
									<div class="ninjadash-tasklist-item__content">
										<div class="ninjadash-tasklist-item__title">
											<Input
												type="checkbox"
												checked={!!todo.completed}
												on:change={() => todos.toggle(todo)}
												label={todo.title}
												id={todo.id}
												class="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex p-0"
											/>
										</div>

										{#if description}
											<div class="ninjadash-tasklist-item__text">
												<p>{todo.description}</p>
											</div>
										{/if}
									</div>

									<div class="ninjadash-tasklist-item__action">
										<a href={'#'} on:click|preventDefault={() => todos.trash(todo)}>
											<i class="uil uil-trash-alt" />
										</a>
									</div>
								</li>
							{/if}
						{/each}
					</ul>
				{:else}
					<div class="ninjadash-tasklist-empty">
						<span>Sorry !! No Completed Todo Found :(</span>
					</div>
				{/if}
			{:else}
				<div>
					{#if $todos.length}
						<ul class="ninjadash-tasklist">
							{#each $todos as todo}
								{#if !todo.trash}
									<li class="ninjadash-tasklist-item">
										<div class="ninjadash-tasklist-item__content">
											<div class="ninjadash-tasklist-item__title">
												<Input
													type="checkbox"
													checked={!!todo.completed}
													on:change={() => todos.toggle(todo)}
													label={todo.title}
													id={todo.id}
													class="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex p-0"
												/>
											</div>

											{#if description}
												<div class="ninjadash-tasklist-item__text">
													<p>{todo.description}</p>
												</div>
											{/if}
										</div>
										<div class="ninjadash-tasklist-item__action">
											<a href={'#'} on:click|preventDefault={() => todos.trash(todo)}>
												<i class="uil uil-trash-alt" />
											</a>
										</div>
									</li>
								{/if}
							{/each}
						</ul>
					{:else}
						<div class="ninjadash-tasklist-empty">
							<span>Sorry !! No Todo Found :(</span>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	:global {
		@import '../../../assets/sass/components/checkbox';
	}

	.ninjadash-tassklist-wrap {
		/* background-color: #fff; */
		border-radius: 10px;
		min-height: 220px;
	}
	.ninjadash-tasklist-head {
		.ninjadash-tasklist-head__title {
			font-size: 16px;
			font-weight: 500;
			padding: 15px 30px;
			margin-bottom: 0;
			border-bottom: 1px solid var(--border-light);
		}
	}
	.ninjadash-tasklist-body {
		.ninjadash-tasklist {
			.ninjadash-tasklist-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 7.5px 0;
				@media only screen and (max-width: 575px) {
					padding: 15px 0;
				}
			}
			.ninjadash-tasklist-item__title {
				font-size: 16px;
				color: var(--color-dark);
				:global {
					.custom-checkbox {
						label {
							font-weight: 500;
							color: var(--color-dark);
						}
					}
				}
			}
			.ninjadash-tasklist-item__text {
				p {
					font-size: 14px;
					font-weight: 400;
					color: var(--color-gray);
					&:last-child {
						margin-bottom: 0;
					}
				}
			}
			.ninjadash-tasklist-item__action {
				display: flex;
				align-items: center;
				justify-content: center;
				min-width: 20px;
				@media only screen and (max-width: 575px) {
					margin-top: 0;
				}
				i {
					color: var(--color-lighten);
					font-size: 18px;
				}
				.ninjadash-delete {
					i {
						color: var(--color-gray);
						font-size: 14px;
						&:hover {
							color: var(--color-danger);
						}
					}
				}
				a {
					display: inline-block;
					margin: 0 10px;
					@media only screen and (max-width: 575px) {
						margin: 0 3px;
					}
					@media only screen and (max-width: 499px) {
						&:first-child {
							margin-left: 0;
						}
					}
				}
				a {
					display: inline-block;
					margin: 0 10px;
				}
				.ninjadash-edit {
					&:hover {
						i {
							color: var(--color-info);
						}
					}
				}
				.ninjadash-delete {
					&:hover {
						i {
							color: var(--color-danger);
						}
					}
				}
			}
		}
		.ninjadash-tasklist-empty {
			min-height: 215px;
			display: flex;
			align-items: center;
			justify-content: center;
			span {
				font-size: 18px;
				font-weight: 500;
				color: var(--color-light);
			}
		}
	}
	/* .ninjadash-modal-actions {
		display: flex;
		justify-content: flex-end;
		button {
			margin: 5px;
		}
	} */
</style>
