<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import TaskApp from '$lib/components/tasklist/TaskApp.svelte';

	let taskTab = 'all';
	const handleTabActivation = (value) => {
		taskTab = value;
	};
</script>

<Card class="border-0 px-25 task-list">
	<CardHeader class="px-0 border-0">
		<h6>Task List</h6>

		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={(e) => handleTabActivation('all', e)}
						href={'#'}
						class={taskTab === 'all' ? 'active' : ''}
					>
						Today
					</a>
				</li>
				<li>
					<a
						on:click|preventDefault={(e) => handleTabActivation('favorite', e)}
						href={'#'}
						class={taskTab === 'favorite' ? 'active' : ''}
					>
						Week
					</a>
				</li>
				<li>
					<a
						on:click|preventDefault={(e) => handleTabActivation('completed', e)}
						href={'#'}
						class={taskTab === 'completed' ? 'active' : ''}
					>
						Month
					</a>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody>
		<TaskApp header="" description={false} taskStatus={taskTab} taskLimit="5" />
	</CardBody>
</Card>