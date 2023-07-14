<script>
	import { Container, Row, Col, Card, CardHeader, CardBody, Alert } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'Installation',
		bcItem: 'Docs',
		bcItemActive: 'Installation'
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
			<Col lg={12}>
				<Card>
					<CardBody class="p-30">
						<div class="hexadash-template-documentation">
							<p>
								Welcome to HexaDash! This app helps you to build modern applications for the web,
								mobile, or desktop.
							</p>
							<p>For getting started you needs two things as Prerequisites.</p>
							<h2>Prerequisites</h2>
							<p>
								Before you begin, make sure your development environment includes Node and an npm
								package manager.
							</p>
							<h4>Node.js</h4>
							<p>Download latest version of node.js from nodejs.org.</p>
							<p>Install Node.js using downloaded file</p>
							<p>To check your node version, run node -v in a terminal/console window.</p>
							<h4>Yarn package manager</h4>
							<p>
								Svelte and Sveletkit apps depend on features and functionality provided by libraries
								that are available as yarn packages. To download and install yarn packages, you must
								have an yarn package manager. This Quick Start uses the yarn client command line
								interface, which is need install by using npm, npm default with nodejs. To install
								yarn, run npm install -g yarn To check that you have the yarn client installed, run
								yarn -v in a terminal/console window.
							</p>
							<p>
								For better understanding we suggest you to once go through official documentation of
								Svelte and Sveltekit.
							</p>
							<h2>Downloaded Files</h2>
							<p>
								After extract the main zip file, go to HexaDash folder and you will get all the necessary files there with documentation.
							</p>
							<h2>Installation</h2>
							<ul>
								<li>
									For starter we need to setup node js, go to https://nodejs.org/en/download/ &
									download appropriate version for your os.
								</li>
								<li>After download setup nodejs</li>
								<li>Run npm install -g yarn, wait a bit</li>
								<li>Run yarn install, wait a bit</li>
								<li>Now run yarn dev, it should open up localhost on your browser</li>
							</ul>
							<Alert color="warning">
								<div class="alert-content">
									<p>
										Make sure you are not running any other project in local if so then use
										new generated port from terminal with label called app running at:
									</p>
								</div>
							</Alert>
							<Alert color="success">
								<div class="alert-content">
									<h4>Some Common solution if you do not run project successfully</h4>
									<p>
										Remove node_module and package-lock.json and yarn-lock file and again do yarn
										install
									</p>
									<p>You can again download theme from themeforst and then again run</p>
									<p>Then also if you don't solve issue you can generate a ticket.</p>
								</div>
							</Alert>
							<h2>Application Deployment</h2>
							<p>
								Before you can deploy your SvelteKit app, you need to adapt it for your deployment
								target. Adapters are small plugins that take the built app as input and generate
								output for deployment.
							</p>
							<p>
								By default, projects are configured to use <strong>@sveltejs/adapter-auto</strong>,
								which detects your production environment and selects the appropriate adapter where
								possible. If your platform isn't (yet) supported, you may need to install a custom
								adapter or write one.
							</p>
							<p>
								See the <a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-auto"
									>adapter-auto README</a
								> for information on adding support for new environments.
							</p>
							<h2>Supported environments</h2>
							<p>
								SvelteKit offers a number of officially supported adapters.

								<br />You can deploy to the following platforms with the default adapter,
								<strong>adapter-auto:</strong>
							</p>
							<ul>
								<li>
									<a href="https://developers.cloudflare.com/pages/">Cloudflare Pages</a> via
									<a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare"
										><code>adapter-cloudflare</code></a
									>
								</li>
								<li>
									<a href="https://netlify.com">Netlify</a> via
									<a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify"
										><code>adapter-netlify</code></a
									>
								</li>
								<li>
									<a href="https://vercel.com">Vercel</a> via
									<a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel"
										><code>adapter-vercel</code></a
									>
								</li>
							</ul>
							<Alert color="warning">
								<div class="alert-content">
									<p class="mb-0">
										Plese follow <a href="https://kit.svelte.dev/docs/adapters"
											>Official Deplyment Guide</a
										> for more detials
									</p>
								</div>
							</Alert>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
