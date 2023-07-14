<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import TodoApp from '$lib/components/todolist/TodoApp.svelte';

	let todoTab = 'new';
	const handleTabActivation = (value) => {
		todoTab = value;
	};
</script>

<Card class="border-0 px-25 pb-25 h-100">
	<CardHeader class="px-0 border-0">
		<h6>Todo List</h6>

		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={(e) => handleTabActivation('new', e)}
						href={'#'}
						class={todoTab === 'new' ? 'active' : ''}
					>
						New
					</a>
				</li>
				<li>
					<a
						on:click|preventDefault={(e) => handleTabActivation('trash', e)}
						href={'#'}
						class={todoTab === 'trash' ? 'active' : ''}
					>
						Deleted
					</a>
				</li>
				<li>
					<a
						on:click|preventDefault={(e) => handleTabActivation('completed', e)}
						href={'#'}
						class={todoTab === 'completed' ? 'active' : ''}
					>
						Completed
					</a>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody class="p-0">
		<TodoApp header="" description={false} todoStatus={todoTab} todoLimit="5" />
	</CardBody>
</Card>