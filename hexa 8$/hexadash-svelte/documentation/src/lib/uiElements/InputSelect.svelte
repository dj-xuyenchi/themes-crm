<script>
	import { Col, Card, CardHeader, CardBody, TabContent, TabPane } from 'sveltestrap';
	import Select from 'svelte-select';

	const items = [
		{ value: 'Option One', label: 'Option One' },
		{ value: 'Option Two', label: 'Option Two' },
		{ value: 'Option Three', label: 'Option Three' },
		{ value: 'Option Four', label: 'Option Four' },
		{ value: 'Option Five', label: 'Option Five' }
	];
	const value = { value: 'Option One', label: 'Option One' };
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-select-list d-flex">
				<div class="custom-select ">
					<select type="select" name="select" class="form-control">
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
						<option>Option 5</option>
					</select>
				</div>

				<div class="custom-select disabled ">
					<select type="select" name="select" class="form-control" disabled>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
						<option>Option 5</option>
					</select>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Search Field</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-select-list d-flex">
				<div class="custom-select ">
					<Select {value} {items} />
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Select Tag</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-tag-mode">
				<div class="custom-select ">
					<div class="custom-select ">
						<Select {items} isMulti={true} />
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Select Size</h6>
		</CardHeader>
		<CardBody>
			<div class="select-size">
				<TabContent class="nav-tabs2-wrapper">
					<TabPane class="rony" tabId="large" tab="Large" active>
						<Select {value} {items} containerClasses="custom-select-lg" />
						<Select {value} {items} containerClasses="custom-select-lg" />
						<Select {value} {items} containerClasses="custom-select-lg" />
					</TabPane>
					<TabPane tabId="default" tab="Default">
						<Select {value} {items} containerClasses="custom-select-default" />
						<Select {value} {items} containerClasses="custom-select-default" />
						<Select {value} {items} containerClasses="custom-select-default" />
					</TabPane>
					<TabPane tabId="small" tab="Small">
						<Select {value} {items} containerClasses="custom-select-sm" />
						<Select {value} {items} containerClasses="custom-select-sm" />
						<Select {value} {items} containerClasses="custom-select-sm" />
					</TabPane>
				</TabContent>
			</div>
		</CardBody>
	</Card>
</Col>
