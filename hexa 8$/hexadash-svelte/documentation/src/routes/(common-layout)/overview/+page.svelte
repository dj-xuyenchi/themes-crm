<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'Introduction',
		bcItem: 'Docs',
		bcItemActive: 'overview'
	};
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
                            <h2>Welcome</h2>
                            <p><strong>HexaDash</strong> is a feature-filled Svelte admin template and component library that ships with hundreds of ready-to-use components. The limitless possibilities come in your hand with its rich component library. The theme features a beautiful dashboard, many ready-to-use hand-crafted components, widgets, pages, and so on. The cool thing is that you can use these components on any page with the utmost possible ease. The theme fits any device just because of its improved responsiveness. This powerful and amazingly flexible theme suits the best for many web applications including CRM, CMS, Admin Panels, Dashboards, etc. What makes it stand out, you know? Our developer team has implemented the theory of modularity while hammering out this amazing theme which will eventually help you to reduce the development cost and time.</p>
                            <p> <strong>HexaDash</strong> has 5 Unique demo pages and 8 apps. It is a perfect solution for any kind of custom project like E-commerce, Project Management, Support, Educational Dashboard, CRM, Marketing Dashboard, and so on...</p>
                            <p><strong>HexaDash</strong> 120+ pages, 100+ components, 40+ Charts, and 100+ widgets developed with a mobile-first design approach.</p>
                            <h2>Featured App</h2>
                            <ul>
                                <li>Email</li>
                                <li>Chat</li>
                                <li>Ecomerce</li>
                                <li>Social App</li>
                                <li>Project</li>
                                <li>Users</li>
                                <li>Contact</li>
                                <li>Support</li>
                            </ul>
                            <h2>Key Feature</h2>
                            <p><strong>HexaDash</strong> contains increadible features listed below.</p>
                            <ul>
                                <li>Built with Sveltekit</li>
                                <li>Built with Sveltestrap</li>
                                <li>Modern Design</li>
                                <li>Fully Responsive Design</li>
                                <li>SASS</li>
                                <li>Multiple Layouts</li>
                                <li>Easy to Customize with CSS Variables</li>
                                <li>Well Organized Folder Structure</li>
                                <li>File-System based routing</li>
                                <li>Unlimited Template Possibilities</li>
                                <li>Svelte based components (No jquery)</li>
                                <li>Email, eCommerce, Calendar, Projects, Tasks, Supports, Contact & many more apps.</li>
                                <li>Profile, Settings, Gallery, Pricing, Banners, Testimonail, Faqs, Maintanance , 404, Terms & Comditions, Coming Soon and many more pages.</li>
                                <li>Clean Code</li>
                                <li>Code Spliting</li>
                            </ul>
                            <h2>Layout Features</h2>
                            <ul>
                                <li>Sidebar & Top menu supported</li>
                            </ul>
                            <h2>Dependancies</h2>
                            <ul>
                                <li>Svelte 3</li>
                                <li>Vite JS</li>
                                <li>SvelteKit</li>
                                <li>Sveltestrap</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>
			</Col>
		</Row>
	</Container>
</div>


