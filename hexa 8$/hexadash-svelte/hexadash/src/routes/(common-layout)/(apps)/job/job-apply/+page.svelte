<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import { Container, Row, Col,Form,
		FormGroup,
		Label,
		Input} from 'sveltestrap';

	const breadcrumbData = {
		pageTitle: 'Job Apply',
		bcItem: 'Dashboard',
		bcItemActive: 'Job'
	};
    function handleUploadClick() {
    const input = document.querySelector('.upload-one');
    input.click();
  }
  
  function handleFileUpload() {
    const input = document.querySelector('.upload-one');
    const file = input.files[0];
    console.log(file);
    // Do something with the uploaded file
  }
</script>

<div>
	<Container fluid>
		<Row class="justify-content-center">
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
                
			</Col>
			<Col lg={6} class="mb-30">
				<div class="job-apply-wrapper">
                    <div class="job-apply__content">
                        <h1>
                            Submit your application
                        </h1>
                        <Form>
                            <FormGroup class="form-group">
								<Label for="name">Full Name</Label>
								<Input id="name" type="text" class="form-control"  placeholder="e.g. John Smith" />
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="email">Email</Label>
								<Input id="email" type="email" class="form-control"  placeholder="Email address" />
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="number">Phone</Label>
								<Input id="number" type="number" class="form-control"  placeholder="Number" />
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="website">Website URL <span>(optional)</span></Label>
								<Input id="website" type="textarea" class="form-control"  rows="3" placeholder="www.domain.com" />
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="portfolio">Portfolio URL <span>(optional)</span></Label>
								<Input id="portfolio" type="text" class="form-control" placeholder="www.domain.com"/>
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="github">Github URL <span>(optional)</span></Label>
								<Input id="github" type="text" class="form-control" placeholder="www.domain.com"/>
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="role">What are you looking for in a new role?</Label>
								<Input id="role" type="textarea" class="form-control" rows="3" placeholder="What can we help with?"/>
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="think">What has been your most challenging experience in a past role?</Label>
								<Input id="think" type="textarea" class="form-control" rows="3" placeholder="What can we help with?"/>
							</FormGroup>
                            <FormGroup class="form-group">
								<Label for="salery">Salary Expectation</Label>
								<Input id="salery" type="text" class="form-control" placeholder="What can we help with?"/>
							</FormGroup>
                            <FormGroup class="form-group">
                                <Label for="salery">Please upload your CV</Label>
                                <div class="dm-tag-wrap">
                                    <div class="dm-upload">
                                        <div class="dm-upload__button">
                                            <button class="btn btn-lg btn-outline-lighten btn-upload" type="button" on:click={handleUploadClick}>
                                                <i class="uil uil-paperclip"></i>
                                                Browse
                                              </button>
                                              <input type="file" name="upload-1" class="upload-one" id="upload-1" on:change={handleFileUpload}>
                                        </div>
                                    </div>
                                </div>
                            </FormGroup>
                            <div class="button-group d-flex pt-15">
                                <button class="btn btn-primary btn-default btn-squared ">Submit Application</button>
                            </div>
                        </Form>
                    </div>
                </div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../../assets/sass/mixins/functions';
		@import '../../../../../assets/sass/mixins/rfs';
		@import '../../../../../assets/sass/mixins/media-queries';
		@import '../../../../../assets/sass/components/job';
		@import '../../../../../assets/sass/components/upload';
	}
</style>
