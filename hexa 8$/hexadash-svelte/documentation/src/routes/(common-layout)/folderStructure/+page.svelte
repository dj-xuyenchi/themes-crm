<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'Folder Structure',
		bcItem: 'Docs',
		bcItemActive: 'Folder Structure'
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
                        <div class="hexadash-sitemap">
                            <ul class="list-unstyled mb-0">
                                <li class="p-0 hexadash-sitemap__parent-title"><a href="/" class="fw-medium fs-14">hexadash</a>
                                </li>
                                <li>
                                    <div class="hexadash-sitemap__first-list">
                                        <div class="hexadash-sitemap__list-wrap">
                                            <a href="/" class="fw-medium text-primary"><i class=" ri-folder-2-line me-1 align-bottom"></i>src</a>
                                        </div>
                                        <ul class="hexadash-sitemap__second-list list-unstyled">
                                            <li>
                                                <a href="/" class="fw-medium text-primary"><i class=" ri-folder-2-line me-1 align-bottom"></i>assets</a>
                                                <ul class="hexadash-sitemap__second-list list-unstyled">
                                                    <li>
                                                        <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>SASS</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/"><i class=" ri-folder-2-line me-1 align-bottom"></i>config</a>
                                                <ul class="hexadash-sitemap__second-list list-unstyled">
                                                    <li>
                                                        <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>dataService.js</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/"><i class=" ri-folder-2-line me-1 align-bottom"></i>demoData</a>
                                            </li>
                                            <li>
                                                <a href="/"><i class=" ri-folder-2-line me-1 align-bottom"></i>lib</a>
                                                <ul class="hexadash-sitemap__second-list list-unstyled">
                                                    <li>
                                                        <a href="/"><i class="ri-folder-2-line me-1 align-bottom"></i>components</a>
                                                        <ul class="hexadash-sitemap__second-list list-unstyled">
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>banners</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>breadcrumbs</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>button</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>cards</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>checkbox</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>cta</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>event</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>footer</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>header</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>maps</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>other</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>paginations</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>spinner</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>tables</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>tasklist</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>todolist</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>toolbox</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>utilities</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>PrismaJS.svelte</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>style.scss</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i class="ri-folder-2-line me-1 align-bottom"></i>store</a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i class="ri-folder-2-line me-1 align-bottom"></i>uiElements</a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i class="ri-folder-2-line me-1 align-bottom"></i>utility</a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i class="ri-folder-2-line me-1 align-bottom"></i>view</a>
                                                        <ul class="hexadash-sitemap__second-list list-unstyled">
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>apps</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>authentication</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>features</a>
                                                            </li>
                                                            <li>
                                                                <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>pages</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/"><i class=" ri-folder-2-line me-1 align-bottom"></i>routes</a>
                                                <ul class="hexadash-sitemap__second-list list-unstyled">
                                                    <li>
                                                        <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>(common-layout)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>+error.svelte</a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>+page.js</a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i class="ri-file-2-line me-1 align-bottom"></i>+page.svelte</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/"><i class=" ri-file-2-line me-1 align-bottom"></i>app.html</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="hexadash-sitemap__first-list">
                                        <div class="hexadash-sitemap__list-wrap">
                                            <a href="/" class="fw-medium text-primary"><i class="ri-file-2-line me-1 align-bottom"></i>static</a>
                                        </div>
                                    </div>
                                    <div class="hexadash-sitemap__first-list">
                                        <div class="hexadash-sitemap__list-wrap">
                                            <a href="/" class="fw-medium text-primary"><i class="ri-folder-2-line me-1 align-bottom"></i>.gitignore</a>
                                        </div>
                                    </div>
                                    <div class="hexadash-sitemap__first-list">
                                        <div class="hexadash-sitemap__list-wrap">
                                            <a href="/" class="fw-medium text-primary"><i class="ri-folder-2-line me-1 align-bottom"></i>package.json</a>
                                        </div>
                                    </div>
                                    <div class="hexadash-sitemap__first-list">
                                        <div class="hexadash-sitemap__list-wrap">
                                            <a href="/" class="fw-medium text-primary"><i class="ri-folder-2-line me-1 align-bottom"></i>README.md</a>
                                        </div>
                                    </div>
                                    <div class="hexadash-sitemap__first-list">
                                        <div class="hexadash-sitemap__list-wrap">
                                            <a href="/" class="fw-medium text-primary"><i class="ri-folder-2-line me-1 align-bottom"></i>svelte.config.js</a>
                                        </div>
                                    </div>
                                    <div class="hexadash-sitemap__first-list">
                                        <div class="hexadash-sitemap__list-wrap">
                                            <a href="/" class="fw-medium text-primary"><i class="ri-folder-2-line me-1 align-bottom"></i>vite.config.js</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>
			</Col>
		</Row>
	</Container>
</div>


<style lang="scss">
	:global{
		// Ninjadash sitemap
        .hexadash-sitemap { 
            a {
                display: block;
            }
            .hexadash-sitemap__parent-title {
                a {
                    padding-left: 0;

                    &:before {
                        display: none;
                    }
                }

                &:before {
                    display: none;
                }
            }
            .hexadash-sitemap__first-list {
                position: relative;
                padding-top: 10px;
                &:before {
                    content: "";
                    border-left: 2px dashed var(--border-light);
                    position: absolute;
                    top: 0;
                    height: 100%;
                    bottom: 0;
                    left: 0;
                }
                .hexadash-sitemap__list-wrap, li {
                    a {
                        position: relative;
                        padding: 10px 16px 4px 76px;
                        &::before {
                            content: "";
                            width: 64px;
                            border-top: 2px dashed var(--border-light);
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 0;
                        }
                    }
                }
                .hexadash-sitemap__second-list, .hexadash-sitemap_hexadash-sitemap__third-list {
                    margin-left: 62px;
                    
                }

                .hexadash-sitemap_hexadash-sitemap__third-list, .hexadash-sitemap__second-list {
                    position: relative;
                    li {
                        position: relative;
                        &:before {
                            content: "";
                            height: 100%;
                            border-left: 2px dashed var(--border-light);
                            position: absolute;
                            top: 0;
                            left: 0;
                            margin: 0px auto;
                        }
                        &:last-child {
                            &::before {
                                height: 13px;
                            }
                        }
                    }
                }
                
                &:last-child {
                    &::before {
                        height: 25px;
                    }
                }
            }
        }
	}
</style>