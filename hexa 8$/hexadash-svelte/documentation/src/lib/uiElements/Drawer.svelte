<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, CardHeader, CardBody, Button, Offcanvas } from 'sveltestrap';
	let open = false;
	let endOpen = false;
	let bottomOpen = false;
	let topOpen = false;
	const toggle = () => (open = !open);
	const toggleEnd = () => (endOpen = !endOpen);
	const toggleBottom = () => (bottomOpen = !bottomOpen);
	const toggleTop = () => (topOpen = !topOpen);

	let userInfo = false;
	const toggleUserInfo = () => (userInfo = !userInfo);

	let userAccount = false;
	const toggleUserAccount = () => (userAccount = !userAccount);

	let multiDrawer = false;
	const toggleMultiDrawer = () => (multiDrawer = !multiDrawer);

	let multiDrawerChild = false;
	const toggleMultiDrawerChild = () => (multiDrawerChild = !multiDrawerChild);

	const personalData = [
		{
			label: 'Full Name',
			text: 'Lily Bett'
		},
		{
			label: 'Account',
			text: 'user@example.com'
		},
		{
			label: 'City',
			text: 'Toronto'
		},
		{
			label: 'Country',
			text: 'Canada'
		},
		{
			label: 'Birthday',
			text: 'October 26, 2022'
		},
		{
			label: 'Website',
			text: '-'
		},
		{
			label: 'Message',
			text: 'Make things as simple as possible but no simpler.'
		}
	];
	const companyData = [
		{
			label: 'Position',
			text: 'Software Engineer'
		},
		{
			label: 'Responsibilities',
			text: 'Coding'
		},
		{
			label: 'Department',
			text: 'XTech'
		},
		{
			label: 'Supervisor',
			text: 'Jhon Smith'
		},
		{
			label: 'Joined on',
			text: 'February 10, 2015'
		},
		{
			label: 'Website',
			text: '-'
		},
		{
			label: 'Skills',
			text: 'C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.'
		}
	];
	const contactData = [
		{
			label: 'Email',
			text: 'user@companymail.com'
		},
		{
			label: 'Phone Number',
			text: '+123 456 7890'
		},
		{
			label: 'Github',
			text: 'github.com/profile/user'
		}
	];

	const drawerContent = `
        <div class="dm-drawer__header">
			<h6 class="drawer-title">Basic Drawer</h6>
		</div>

		<div class="dm-drawer__body">
			<div class="drawer-content">
				<p>Some Content</p>
				<p>Some Content</p>
				<p>Some Content</p>
			</div>
		</div>
    `;

	onMount(() => {
		document.querySelectorAll('.drawer-basic').forEach((elm) => {
			elm.innerHTML = drawerContent;
		});
	});
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="drawer-btn">
				<Button color="primary" size="default" class="btn-squared" on:click={toggle}>Open</Button>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Preview draw</h6>
		</CardHeader>
		<CardBody>
			<div class="drawer-profile-box">
				<div class="drawer-profile-box__single d-flex justify-content-between align-items-center">
					<div class="profile-author media align-items-center">
						<img src="/img/tm4.png" alt="authorImg" />
						<div class="profile-text media-body">
							<span class="author-name">David</span>
							<p class="author-title">Progresser XTech</p>
						</div>
					</div>
					<a href={'#'} on:click={() => (userInfo = !userInfo)}>View Profile</a>
				</div>
				<div class="drawer-profile-box__single d-flex justify-content-between align-items-center">
					<div class="profile-author media align-items-center">
						<img src="/img/tm4.png" alt="authorImg" />
						<div class="profile-text media-body">
							<span class="author-name">David</span>
							<p class="author-title">Progresser XTech</p>
						</div>
					</div>
					<a href={'#'} on:click={() => (userInfo = !userInfo)}>View Profile</a>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Custom Placement</h6>
		</CardHeader>
		<CardBody>
			<div class="drawer-placement-wrap d-flex align-items-center">
				<div class="buttons-list d-flex">
					<Button color="primary" size="sm" on:click={toggle}>Left</Button>
					<Button color="success" size="sm" on:click={() => (topOpen = !topOpen)}>Top</Button>
					<Button color="danger" size="sm" on:click={() => (endOpen = !endOpen)}>Right</Button>
					<Button color="warning" size="sm" on:click={() => (bottomOpen = !bottomOpen)}
						>Bottom</Button
					>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Submit form in drawer</h6>
		</CardHeader>
		<CardBody>
			<div class="drawer-btn d-flex justify-content-center">
				<Button
					color="primary"
					size="default"
					class="btn-squared"
					on:click={() => (userAccount = !userAccount)}>+ New account</Button
				>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Multi-level drawer</h6>
		</CardHeader>
		<CardBody>
			<div class="drawer-btn d-flex justify-content-center">
				<Button
					color="primary"
					size="default"
					class="btn-squared"
					on:click={() => (multiDrawer = !multiDrawer)}>Open Drawer</Button
				>
			</div>
		</CardBody>
	</Card>
</Col>

<div class="drawer-basic-wrap">
	<Offcanvas isOpen={open} {toggle} header="Start" placement="start" class="drawer-basic" />

	<Offcanvas
		isOpen={endOpen}
		toggle={toggleEnd}
		placement="end"
		header="Right"
		class="drawer-basic"
	/>

	<Offcanvas
		isOpen={topOpen}
		toggle={toggleTop}
		placement="top"
		header="Top"
		class="drawer-basic"
	/>

	<Offcanvas
		isOpen={bottomOpen}
		toggle={toggleBottom}
		placement="bottom"
		header="Bottom"
		class="drawer-basic"
	/>

	<Offcanvas
		isOpen={userAccount}
		toggle={toggleUserAccount}
		placement="end"
		header="Create a new account"
		class="drawer-account"
	>
		<div class="dm-drawer__body p-15 py-10">
			<div class="drawer-content">
				<div class="drawer-account-form form-basic">
					<form action={'#'}>
						<Row>
							<Col lg={6} class="form-group">
								<label for="username">Name</label>
								<input
									type="text"
									name="name"
									id="username"
									class="form-control form-control-sm"
									placeholder="Please Enter Your Name"
								/>
							</Col>
							<Col lg={6} class="form-group">
								<label for="url">Url</label>
								<input
									type="url"
									name="name"
									id="url"
									class="form-control form-control-sm"
									placeholder="Please Enter URL"
								/>
							</Col>
							<Col lg={6} class="form-group">
								<label for="owner">Owner</label>
								<select name="url" id="owner" class="form-control-sm form-control form-select">
									<option value="">Jack Ma</option>
									<option value="">Tom liu</option>
								</select>
							</Col>
							<Col lg={6} class="form-group">
								<label for="type">Type</label>
								<select name="url" id="type" class="form-control-sm form-control form-select">
									<option value="">Jack Ma</option>
									<option value="">Tom liu</option>
								</select>
							</Col>
							<Col lg={6} class="form-group">
								<label for="approver">Approver</label>
								<select name="url" id="approver" class="form-control-sm form-control form-select">
									<option value="">Jack Ma</option>
									<option value="">Tom liu</option>
								</select>
							</Col>
							<Col lg={6} class="form-group">
								<label for="datepicker">DateTime</label>
								<input
									type="text"
									name="name"
									id="datepicker"
									class="form-control form-control-sm"
									placeholder="Please Enter URL"
								/>
							</Col>
							<Col lg={12} class="form-group">
								<label for="description">Discription</label>
								<textarea
									name="description"
									id="description"
									class="form-control form-control-sm"
									placeholder="PLease Enter Url Description"
								/>
							</Col>
						</Row>
					</form>
				</div>
			</div>
		</div>
	</Offcanvas>

	<Offcanvas
		isOpen={userInfo}
		toggle={toggleUserInfo}
		placement="end"
		header="Right"
		class="dm-drawer drawer-profile"
	>
		<div class="dm-drawer__body">
			<div class="drawer-content">
				<h6>User Profile</h6>
				<div class="profile-info-box">
					<div class="profile-info-box__single">
						<h6>Personal</h6>
						<div class="profile-info d-flex flex-wrap">
							{#each personalData as item}
								<div class="profile-info__single">
									<span class="profile-info__label">{item.label}:</span>
									<span class="profile-info__text">{item.text}</span>
								</div>
							{/each}
						</div>
					</div>

					<div class="profile-info-box__single">
						<h6>Company</h6>
						<div class="profile-info d-flex flex-wrap">
							{#each companyData as item}
								<div class="profile-info__single">
									<span class="profile-info__label">{item.label}:</span>
									<span class="profile-info__text">{item.text}</span>
								</div>
							{/each}
						</div>
					</div>
					<!-- ends: .aprofile-info-box__single -->
					<div class="profile-info-box__single">
						<h6>Conact</h6>
						<div class="profile-info d-flex flex-wrap">
							{#each contactData as item}
								<div class="profile-info__single">
									<span class="profile-info__label">{item.label}:</span>
									<span class="profile-info__text">{item.text}</span>
								</div>
							{/each}
						</div>
					</div>
					<!-- ends: .aprofile-info-box__single -->
				</div>
			</div>
		</div>
	</Offcanvas>

	<Offcanvas
		isOpen={multiDrawer}
		toggle={toggleMultiDrawer}
		placement="end"
		header="Two-level Drawer"
		class="dm-drawer drawer-multiple"
	>
		<div class="custom-drawer__body p-15 py-10">
			<div class="drawer-content">
				<p>Some Content</p>
				<Button
					color="primary"
					size="dafault"
					class="btn-squared"
					on:click={() => (multiDrawerChild = !multiDrawerChild)}>Two Lavel Drawer</Button
				>
			</div>
		</div>
	</Offcanvas>

	<Offcanvas isOpen={multiDrawerChild} toggle={toggleMultiDrawerChild} header="Two-level Drawer 2" placement="end">
		<div class="custom-drawer__body">
			<div class="drawer-content">
				<p>Some Content</p>
			</div>
		</div>
	</Offcanvas>
</div>
<style lang="scss">
	:global{

		.form-basic {
			select{
				width: 100%;
				border: 1px solid var(--border-light);
			}
			label {
				font-size: 14px;
				font-weight: 500;
				color: var(--color-dark);
				margin-bottom: 10px;
			}
			textarea {
				min-height: 100px;
			}
			.form-control::placeholder {
				color: var(--color-lighten);
			}
		}

		.form-group {
			margin-bottom: 15px;
		}
		.offcanvas{
			z-index: 9999;
		}
		.offcanvas-backdrop{
			z-index: 9998;
		}

		.offcanvas-header{
			padding: 18px 25px;
			border-bottom: 1px solid var(--border-color);
			font-size: 16px;
			font-weight: 600;
			margin-bottom: 0;
			color: var(--color-dark);
			.btn-close{
				font-size: 10px;
			}
		}
	}
	.drawer-placement-wrap {
		.buttons-list{
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}
</style>