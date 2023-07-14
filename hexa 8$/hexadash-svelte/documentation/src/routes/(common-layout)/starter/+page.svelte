<script>
	import { Container, Row, Col, Card, CardHeader, CardBody, Alert } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Prism from "@components/PrismaJS.svelte";

	const breadcrumbData = {
		pageTitle: 'New Page',
		bcItem: 'Doc',
		bcItemActive: 'New Page'
	};

	let code_starter = `
<svelte:head>
	<title>Starter</title>
</svelte:head>

<p>My Starter FIle</p>

<style lang="scss">
	p{
		font-size: 14px;
		color: #000;
	}
</style>`;
</script>

<svelte:head>
	<title>HexaDash</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12} >
				<Card>
                    <CardBody class="p-30">
                        <div class="hexadash-template-documentation">
                            
                            <h2>How to create new page</h2>
                            <p>In svelte, it is very easy to create new page. </p>
                            <p>1. There is no extra configuration for route. just create a new folder at <code>src/routes/(common-layout)/MyFolder</code> </p>
                            <img src="/img/new-folder.png" alt="">
                            <p>2. Then create a page on that folder named <code>+page.svelte</code> </p>
							<Prism language="r" code="{code_starter}" header=""/>
                            <p>That's it.</p>
                        </div>
                    </CardBody>
                </Card>
			</Col>
		</Row>
	</Container>
</div>


