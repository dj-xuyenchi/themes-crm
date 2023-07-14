<script>
	import {
		Form,
		FormGroup,
		Label,
		Input,
		Button,
		Modal,
		ModalBody,
		ModalHeader
	} from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
	let open = false;
	const toggle = () => (open = !open);
</script>

<div class="contact-breadcrumb">
	<div class="breadcrumb-main add-contact justify-content-sm-between">
		<div class="d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
			<div class="d-flex align-items-center add-contact__title justify-content-center me-sm-25">
				<h4 class="text-capitalize fw-500 breadcrumb-title">Contacts</h4>
				<span class="sub-title ms-sm-25 ps-sm-25" />
			</div>

			<Form action="/" class="d-flex align-items-center add-contact__form my-sm-0 my-2">
				<InlineSVG src={'/img/svg/search.svg'} />
				<Input
					class="form-control me-sm-2 border-0 box-shadow-none"
					type="search"
					placeholder="Search by Name"
					aria-label="Search"
				/>
			</Form>
		</div>
		<div class="add-contact-modal">
			<Button color="primary" class="px-15" on:click={toggle}>
				<i class="uil uil-plus fs-16" />Add Contact
			</Button>
			<Modal isOpen={open} {toggle} class="add-contact modal-dialog-centered">
				<ModalHeader {toggle}>
					<h6 class="modal-title fw-500">Contact Information</h6>
				</ModalHeader>
				<ModalBody>
					<div class="add-new-contact">
						<Form action="/">
							<FormGroup class="mb-20">
								<Label>Name:</Label>
								<Input type="text" class="form-control form-control-lg" placeholder="Your Name" />
							</FormGroup>
							<FormGroup class="mb-20">
								<Label>Email Address:</Label>
								<Input
									type="text"
									class="form-control form-control-lg"
									placeholder="Email Address"
								/>
							</FormGroup>
							<FormGroup class="mb-20">
								<Label>Phone Number:</Label>
								<Input
									type="text"
									class="form-control form-control-lg"
									placeholder="Phone Number"
								/>
							</FormGroup>
							<FormGroup class="mb-20">
								<Label>Position:</Label>
								<Input type="text" class="form-control form-control-lg" placeholder="Position" />
							</FormGroup>
							<FormGroup class="mb-20">
								<Label>Company Name:</Label>
								<Input
									type="text"
									class="form-control form-control-lg"
									placeholder="Company Name"
								/>
							</FormGroup>

							<div class="button-group d-flex pt-20">
								<button class="btn btn-primary btn-default btn-squared ">add new Contact </button>
							</div>
						</Form>
					</div>
				</ModalBody>
			</Modal>
		</div>
	</div>
</div>
