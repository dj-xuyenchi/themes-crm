<script>
	import { Container, Row, Col, Card, CardHeader, CardBody, Alert } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Prism from '@components/PrismaJS.svelte';

	const breadcrumbData = {
		pageTitle: 'Theme Configuration',
		bcItem: 'Docs',
		bcItemActive: 'Theme Configuration'
	};

	let code_navChange = `
import { writable } from "svelte/store";

export const menuType = writable('sidebar');`;

	let code_logoChange = `
<div class="logo-area">
	<NavbarBrand href={"#"}>
		<img class="dark" src="/img/logo-dark.svg" alt="svg" />
		<img class="light" src="/img/logo-white.svg" alt="img" />
	</NavbarBrand>
	<a href={'#'} class="sidebar-toggle">
		<InlineSVG src={"/img/svg/align-center-alt.svg"} />
	</a>
</div>`;
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
			<Col lg={12}>
				<Card>
					<CardBody class="p-30">
						<div class="hexadash-template-documentation">
							<p>
								For customizing theme go to <code>static/variables.css</code> and customize the variables
								according to your necessity. HexaDash is based on Sveltestrap.
							</p>
							<h2>Change font</h2>
							<p>
								Simplest way to change font is to go to google fonts, select fonts, click embed,
								copy the link. Now go to static/css/style.css and replace the existing embeded font
								at the top. Please remove the links of any unused fonts from the head.
							</p>
							<code />
							<h2>Side Navbar & Top Navbar Layout</h2>
							<p>
								To change the Navbar side to top, go to src/lib/store/menuType.js and just set the
								menuType to <strong>topMenu</strong> . Else set <strong>sidebar</strong> to keep Navbar
								on Sidebar. You can update your menu item from src/lib/components/header/TopMenu.svelte
								For Top Navbar and src/lib/components/sidebar/Sidebar.svelte for Side Navbar
							</p>
							<Prism language="r" code={code_navChange} header="" />
							<h2>Change Logo</h2>
							<p>
								To change both dark and light logo, go to src/lib/components/header/LogoArea.svelte
								and change source of the logo image
							</p>
							<Prism language="r" code={code_logoChange} header="" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
