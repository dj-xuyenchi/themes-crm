<script>
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Button,
		Progress
	} from 'sveltestrap';

	const featureCards = [
		{
			img: 'blog-single1.png',
			title: 'Technology Change the World',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
			category: 'Web Development',
			date: '12 Dec 2022'
		},
		{
			img: 'blog-single2.png',
			title: 'Power of Unity And Strength',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
			category: 'Photoshop',
			date: '23 Oct 2022'
		},
		{
			img: 'blog-single3.png',
			title: 'A Success Story Entrepreneur',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
			category: 'Lifestyle',
			date: '11 Apr 2022'
		},
		{
			img: 'blog-single4.png',
			title: 'Important of Team Works',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
			category: 'Sports',
			date: '31 Jan 2022'
		}
	];
	const featureCards2 = [
		{
			img: 'feature1.svg',
			title: 'Creative Planning',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled and typesetting industry.'
		},
		{
			img: 'feature2.svg',
			title: 'Perfect Design',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled and typesetting industry.'
		},
		{
			img: 'feature3.svg',
			title: 'Code Standard',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled and typesetting industry.'
		},
		{
			img: 'feature4.svg',
			title: 'User Friendly',
			content:
				'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled and typesetting industry.'
		}
	];
	const featureCards4 = [
		{
			img: 'feature-cards5.svg',
			title: 'Perfect Design',
			content: 'Lorem Ipsum is simply dummy text of the and typesetting industry.'
		},
		{
			img: 'feature-cards6.svg',
			title: 'Code Standard',
			content: 'Lorem Ipsum is simply dummy text of the and typesetting industry.'
		},
		{
			img: 'feature-cards7.svg',
			title: 'Nice Environment',
			content: 'Lorem Ipsum is simply dummy text of the and typesetting industry.'
		},
		{
			img: 'feature-cards8.svg',
			title: 'User Friendly',
			content: 'Lorem Ipsum is simply dummy text of the and typesetting industry.'
		}
	];
	const featureCards5 = [
		{
			img: 'fc1.png',
			title: 'Adventure Places',
			content:
				'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled.'
		},
		{
			img: 'fc2.png',
			title: 'Latest Features of Apples Products',
			content:
				'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled.'
		},
		{
			img: 'fc3.png',
			title: 'Best Resort Around the World',
			content:
				'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled.'
		},
		{
			img: 'fc4.png',
			title: 'How to find best lawers',
			content:
				'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled.'
		}
	];
	const profileCards = [
		{
			img: 'tm1.png',
			title: 'Garry Sobars',
			subtitle: 'Founder & CEO'
		},
		{
			img: 'tm2.png',
			title: 'Barbara Marion',
			subtitle: 'Tech Executive'
		},
		{
			img: 'tm3.png',
			title: 'James Morrison',
			subtitle: 'Lead Designer'
		},
		{
			img: 'tm4.png',
			title: 'Natalie Korsman',
			subtitle: 'Product Designer'
		}
	];
	const featureCards6 = [
		{
			icon: 'feature-cards9.svg',
			total: '47',
			info: 'Total Tasks',
			type: 'primary'
		},
		{
			icon: 'feature-cards10.svg',
			total: '34',
			info: 'Tasks Completed',
			type: 'secondary'
		},
		{
			icon: 'feature-cards11.svg',
			total: '$34,589',
			info: 'Spendings',
			type: 'success'
		},
		{
			icon: 'feature-cards12.svg',
			total: '345',
			info: 'Hours Spent',
			type: 'warning'
		}
	];
	const appsCard = [
		{
			icon: 'adobe.svg',
			name: 'Adobe CC',
			description: 'Lorem Ipsum is simply dummy text of the and the',
			installed: false
		},
		{
			icon: 'slack.svg',
			name: 'Slack',
			description: 'Lorem Ipsum is simply dummy text of the and the',
			installed: true
		},
		{
			icon: 'trello.svg',
			name: 'Trello',
			description: 'Lorem Ipsum is simply dummy text of the and the',
			installed: false
		},
		{
			icon: 'whatsapp.svg',
			name: 'Whatsapp',
			description: 'Lorem Ipsum is simply dummy text of the and the',
			installed: true
		}
	];
	const projectCard = [
		{
			title: 'Dashboard UI Project',
			content:
				'Lorem Ipsum Dolor Amet, Consetetur Sadipscing Elitr Sed Diam Nonumy Eirmod Dolor Ame.',
			badge: 'primary'
		},
		{
			title: 'Application UI Design',
			content:
				'Lorem Ipsum Dolor Amet, Consetetur Sadipscing Elitr Sed Diam Nonumy Eirmod Dolor Ame.',
			badge: 'warning'
		},
		{
			title: 'Custom Software Development',
			content:
				'Lorem Ipsum Dolor Amet, Consetetur Sadipscing Elitr Sed Diam Nonumy Eirmod Dolor Ame.',
			badge: 'danger'
		}
	];
	const files = [
		{
			icon: 'zip@2x.png',
			name: 'Main-Admin-Design.Zip',
			size: '7.09 MB'
		},
		{
			icon: 'pdf@2x.png',
			name: 'Product-Guidelines.Pdf',
			size: '1.29 MB'
		},
		{
			icon: 'psd@2x.png',
			name: 'Admin-Wireframe.Psd',
			size: '7.01 MB'
		},
		{
			icon: 'jpg@2x.png',
			name: 'Wirefram-Escreenshots.Jpg',
			size: '1.67 MB'
		},
		{
			icon: 'png@2x.png',
			name: 'Logo.Png',
			size: '145 KB'
		}
	];
	const normalCard = [
		{
			icon: 'layers.svg',
			title: 'Dark Color',
			content:
				'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
			bg: 'primary'
		},
		{
			icon: 'feature-upload.svg',
			title: 'Solid Color',
			content:
				'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
			bg: 'dark'
		},
		{
			icon: 'feature-img.svg',
			title: 'Image',
			content:
				'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
			bg: 'success'
		}
	];
</script>

<Col lg={12}>
	<Row>
		{#each featureCards as item}
			<Col xxl={3} md={6} class="mb-25">
				<div class="feature-cards">
					<figure class="feature-cards__figure">
						<img src="/img/{item.img}" alt="" />
						<figcaption>
							<h4>{item.title}</h4>
							<p>
								{item.content}
							</p>
							<button class="btn-md btn">View More</button>
						</figcaption>
					</figure>
				</div>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each featureCards2 as card}
			<Col xxl={3} md={6} class="mb-25">
				<figure class="feature-cards3">
					<img class="svg" alt="" src={`/img/svg/${card.img}`} />
					<figcaption>
						<h2>{card.title}</h2>
						<p>
							{card.content}
						</p>
						<a href={'#'}>Learn More</a>
					</figcaption>
				</figure>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each featureCards4 as card}
			<Col xxl={3} md={6} class="mb-25">
				<figure class="feature-cards4">
					<img class="svg" alt="" src={`/img/svg/${card.img}`} />
					<figcaption>
						<h2>{card.title}</h2>
						<p>{card.content}</p>
					</figcaption>
				</figure>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each featureCards as card}
			<Col xxl={3} md={6} class="mb-25">
				<div class="feature-cards feature-card--1">
					<figure class="feather-cards__figure">
						<img src="/img/{card.img}" alt="" />
						<figcaption>
							<div class="feature-cards__top">
								<span>{card.category}</span><span>{card.date} </span>
							</div>
							<h5>{card.title}</h5>
							<p>
								{card.content}
							</p>
							<div class="feature-cards__bottom">
								<div class="feedbackSection">
									<div class="author">
										<img class="rounded-circle" src="/img/blog-author.jpg" alt="" />
										<span>Burns Marks</span>
									</div>
									<div class="feedback">
										<span class="like"
											><img class="svg" alt="" src={'/img/svg/heart.svg'} />
											70</span
										>
										<span class="view"
											><img class="svg" alt="" src={'/img/svg/eye.svg'} />
											120</span
										>
									</div>
								</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each featureCards5 as card}
			<Col xxl={3} md={6} class="mb-25">
				<figure class="feature-cards2">
					<img class="w-100" src="/img/{card.img}" alt="" />
					<figcaption>
						<h2>{card.title}</h2>
						<p>
							{card.content}
						</p>
						<div class="feedbackSection">
							<div class="author">
								<img class="rounded-circle" src="/img/blog-author.jpg" alt="" />
								<span>Burns Marks</span>
							</div>
						</div>
					</figcaption>
				</figure>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each profileCards as card}
			<Col xxl={3} md={6} class="mb-25">
				<Card class="position-relative user-member-card">
					<CardBody class="text-center p-30">
						<div class="account-profile">
							<div class="ap-img d-flex justify-content-center">
								<img
									class="ap-img__main rounded-circle mb-20 bg-opacity-primary wh-150"
									src="/img/{card.img}"
									alt="profile"
								/>
							</div>
							<div class="ap-nameAddress pb-3">
								<h6 class="ap-nameAddress__title">{card.title}</h6>
								<p class="ap-nameAddress__subTitle fs-13 pt-1 m-0">{card.subtitle}</p>
							</div>
							<ul class="db-social-parent mb-0 justify-content-center">
								<li class="db-social-parent__item">
									<a class="color-facebook hover-facebook wh-38 fs-16 rounded-circle" href={'#'}
										><i class="uil uil-facebook-f" /></a
									>
								</li>
								<li class="db-social-parent__item">
									<a class="color-twitter hover-twitter wh-38 fs-16 rounded-circle" href={'#'}
										><i class="uil uil-twitter" /></a
									>
								</li>
								<li class="db-social-parent__item">
									<a class="color-ruby hover-ruby  wh-38 fs-16 rounded-circle" href={'#'}
										><i class="uil uil-dribbble" /></a
									>
								</li>
								<li class="db-social-parent__item">
									<a class="color-instagram hover-instagram wh-38 fs-16 rounded-circle" href={'#'}
										><i class="uil uil-instagram" /></a
									>
								</li>
							</ul>
						</div>
						<div class="tm-card-overlay position-absolute">
							<Dropdown>
								<DropdownToggle color="white" class="p-0 shadow-none"
									><img
										data-inlinesvg
										src={'/img/svg/more-horizontal.svg'}
										class="bg-transprent m-0"
									/></DropdownToggle
								>
								<DropdownMenu>
									<DropdownItem>Item One</DropdownItem>
									<DropdownItem>Item Two</DropdownItem>
									<DropdownItem>Item Three</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</CardBody>
				</Card>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each featureCards6 as card}
			<Col xxl={3} md={6} class="mb-25">
				<div class="feature-cards5 d-flex justify-content-between border-0 radius-xl p-25">
					<div class="application-task d-flex align-items-center">
						<div class="application-task-icon wh-60 bg-{card.type} content-center">
							<img class="svg" alt="" src={`/img/svg/${card.icon}`} />
						</div>
						<div class="application-task-content">
							<h4>{card.total}</h4>
							<span class="fs-14 mt-1 text-capitalize">{card.info}</span>
						</div>
					</div>
					<Dropdown class="card__more-action">
						<DropdownToggle color="white" class="p-0 m-0 bg-transparent shadow-none"
							><img
								data-inlinesvg
								class="m-0"
								src={'/img/svg/more-horizontal.svg'}
							/></DropdownToggle
						>
						<DropdownMenu>
							<DropdownItem>View</DropdownItem>
							<DropdownItem>Edit</DropdownItem>
							<DropdownItem>Delete</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each appsCard as card, i}
			<Col xxl={3} md={6} class="mb-25">
				<figure class="feature-cards6">
					<div class="card-short">
						<h4 class="card-short__title align-items-center">
							<img src="/img/svg/{card.icon}" alt="" />
							<span>{card.name}</span>
						</h4>
						<div class="card-short__content">
							<p>{card.description}</p>
						</div>
						<div class="card-short__bottom">
							{#if card.installed}
								<div class="card-short-checkbox">
									<div class="checkbox-theme-default custom-checkbox ">
										<input class="checkbox" type="checkbox" id="check-{i}" />
										<label for="check-{i}">
											<span class="checkbox-text"> installed </span>
										</label>
									</div>
								</div>
							{/if}
							<div class="card-short-actions">
								<div class="content-installed content-action">
									{#if card.installed}
										<Button color="primary" outline>
											<span>Open</span>
										</Button>
									{:else}
										<Button color="primary">
											<span>Install</span>
										</Button>
									{/if}
									<div class="more">
										<Dropdown>
											<DropdownToggle color="white p-0 m-0 bg-transparent shadow-none"
												><img
													data-inlinesvg
													class="m-0"
													src={'/img/svg/more-horizontal.svg'}
												/></DropdownToggle
											>
											<DropdownMenu>
												<DropdownItem>View</DropdownItem>
												<DropdownItem>Edit</DropdownItem>
												<DropdownItem>Delete</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</div>
						</div>
					</div>
				</figure>
			</Col>
		{/each}
	</Row>
	<Row>
		{#each projectCard as card}
			<Col xxl={4} md={6} class="mb-25">
				<div class="user-group radius-xl media-ui media-ui--early pt-30 pb-25">
					<div class="border-bottom px-30">
						<div class="media user-group-media d-flex justify-content-between">
							<div
								class="media-body d-flex align-items-center flex-wrap text-capitalize my-sm-0 my-n2"
							>
								<a href={'#'}>
									<h6 class="mt-0  fw-500 user-group media-ui__title bg-transparent">
										{card.title}
									</h6>
								</a>
								<span class="my-sm-0 my-2 media-badge text-uppercase color-white bg-{card.badge}"
									>early</span
								>
							</div>
							<div class="mt-n15">
								<Dropdown>
									<DropdownToggle color=" bg-transparent shadow-none p-0 n-0"
										><img class="svg" alt="" src={'/img/svg/more-horizontal.svg'} /></DropdownToggle
									>
									<DropdownMenu>
										<DropdownItem>View</DropdownItem>
										<DropdownItem>Edit</DropdownItem>
										<DropdownItem>Delete</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>
						</div>
						<div class="user-group-people mt-15 text-capitalize">
							<p>
								{card.content}
							</p>
							<div class="user-group-project">
								<div class="d-flex align-items-center user-group-progress-top">
									<div class="media-ui__start">
										<span class="color-light fs-12">Start Date</span>
										<p class="fs-14 fw-500 color-dark mb-0">26 Dec 2019</p>
									</div>
									<div class="media-ui__end">
										<span class="color-light fs-12">end date</span>
										<p class="fs-16 fw-500 color-success mb-0">18 Mar 2020</p>
									</div>
								</div>
							</div>
						</div>
						<div class="user-group-progress-bar">
							<div class="progress-wrap d-flex align-items-center mb-0">
								<div class="progress" style="width: 100%; height: 6px;">
									<Progress bar color={card.badge} value={83} />
								</div>
								<span class="ratio-percentage">83%</span>
							</div>
							<p class="color-light fs-12 mb-20">12 / 15 Tasks Completed</p>
						</div>
					</div>
					<div class="mt-20 px-30">
						<p class="fs-13 color-light mb-10">Assigned To</p>
						<ul class="d-flex flex-wrap user-group-people__parent">
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm1.png"
										alt="author"
									/></a
								>
							</li>
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm2.png"
										alt="author"
									/></a
								>
							</li>
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm3.png"
										alt="author"
									/></a
								>
							</li>
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm4.png"
										alt="author"
									/></a
								>
							</li>
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm5.png"
										alt="author"
									/></a
								>
							</li>
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm6.png"
										alt="author"
									/></a
								>
							</li>
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm1.png"
										alt="author"
									/></a
								>
							</li>
							<li>
								<a href={'#'}
									><img
										class="rounded-circle wh-34 bg-opacity-secondary"
										src="/img/tm2.png"
										alt="author"
									/></a
								>
							</li>
						</ul>
					</div>
				</div>
			</Col>
		{/each}
	</Row>
	<Row>
		<Col xxl={4} md={6} class="mb-25">
			<Card class="h-100">
				<CardHeader class="py-20 px-sm-25 px-3">
					<h6>files</h6>
				</CardHeader>
				<CardBody>
					{#each files as file}
						<div class="mb-20">
							<div class="files-area d-flex justify-content-between align-items-center">
								<div class="files-area__left d-flex align-items-center">
									<div class="files-area__img">
										<img src="/img/{file.icon}" alt="img" class="wh-42" />
									</div>
									<div class="files-area__title">
										<p class="mb-0 fs-14 fw-500 color-dark text-capitalize">
											{file.name}
										</p>
										<span class="color-light fs-12 d-flex ">{file.size}</span>
										<div class="d-flex text-capitalize">
											<a href={'#'} class="fs-12 fw-500 color-primary ">View</a>
											<a href={'#'} class="fs-12 fw-500 color-primary ms-10">Download</a>
										</div>
									</div>
								</div>
								<div class="files-area__right">
									<Dropdown>
										<DropdownToggle color="white m-0 p-0 shadow-none bg-transparent"
											><img
												data-inlinesvg
												class="m-0"
												src={'/img/svg/more-horizontal.svg'}
											/></DropdownToggle
										>
										<DropdownMenu>
											<DropdownItem>View</DropdownItem>
											<DropdownItem>Edit</DropdownItem>
											<DropdownItem>Delete</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					{/each}
				</CardBody>
			</Card>
		</Col>
		<Col xxl={4} md={6} class="mb-25">
			<Card class="h-100">
				<CardHeader class="py-20 px-sm-25 px-3">
					<h6>files</h6>
				</CardHeader>
				<CardBody>
					{#each files as file}
						<div class="mb-20">
							<div class="files-area d-flex justify-content-between align-items-center">
								<div class="files-area__left d-flex align-items-center">
									<div class="files-area__img">
										<img src="/img/{file.icon}" alt="img" class="wh-42" />
									</div>
									<div class="files-area__title">
										<p class="mb-0 fs-14 fw-500 color-dark text-capitalize">
											{file.name}
										</p>
										<span class="color-light fs-12 d-flex ">{file.size}</span>
										<div class="d-flex text-capitalize">
											<a href={'#'} class="fs-12 fw-500 color-primary ">View</a>
											<a href={'#'} class="fs-12 fw-500 color-primary ms-10">Download</a>
										</div>
									</div>
								</div>
								<div class="files-area__right">
									<Dropdown>
										<DropdownToggle color="white m-0 p-0 shadow-none bg-transparent"
											><img
												data-inlinesvg
												class="m-0"
												src={'/img/svg/more-horizontal.svg'}
											/></DropdownToggle
										>
										<DropdownMenu>
											<DropdownItem>View</DropdownItem>
											<DropdownItem>Edit</DropdownItem>
											<DropdownItem>Delete</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					{/each}
				</CardBody>
			</Card>
		</Col>
		<Col xxl={4} md={6} class="mb-25">
			<Card class="h-100">
				<CardHeader class="py-20 px-sm-25 px-3">
					<h6>files</h6>
				</CardHeader>
				<CardBody>
					{#each files as file}
						<div class="mb-20">
							<div class="files-area d-flex justify-content-between align-items-center">
								<div class="files-area__left d-flex align-items-center">
									<div class="files-area__img">
										<img src="/img/{file.icon}" alt="img" class="wh-42" />
									</div>
									<div class="files-area__title">
										<p class="mb-0 fs-14 fw-500 color-dark text-capitalize">
											{file.name}
										</p>
										<span class="color-light fs-12 d-flex ">{file.size}</span>
										<div class="d-flex text-capitalize">
											<a href={'#'} class="fs-12 fw-500 color-primary ">View</a>
											<a href={'#'} class="fs-12 fw-500 color-primary ms-10">Download</a>
										</div>
									</div>
								</div>
								<div class="files-area__right">
									<Dropdown>
										<DropdownToggle color="white m-0 p-0 shadow-none bg-transparent"
											><img
												data-inlinesvg
												class="m-0"
												src={'/img/svg/more-horizontal.svg'}
											/></DropdownToggle
										>
										<DropdownMenu>
											<DropdownItem>View</DropdownItem>
											<DropdownItem>Edit</DropdownItem>
											<DropdownItem>Delete</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>
					{/each}
				</CardBody>
			</Card>
		</Col>
	</Row>
	<Row>
		{#each normalCard as card}
			<Col xxl={4} md={6} class="mb-25">
				<figure class="feature-cards7 feature-cards7--2">
					<div class="banner-card bg-{card.bg}">
						<div class="banner-card__top align-center-v justify-content-between">
							<h4 class="banner-card__title">
								<img class="svg" alt="" src={`/img/svg/${card.icon}`} />
								<span>{card.title}</span>
							</h4>
							<div class="banner-card__action">
								<div class="more">
									<div class="card__more-action">
										<Dropdown>
											<DropdownToggle color="bg-transparent shadow-none m-0 p-0 "
												><img
													data-inlinesvg
													class="m-0"
													src={'/img/svg/more-horizontal.svg'}
												/></DropdownToggle
											>
											<DropdownMenu>
												<DropdownItem>View</DropdownItem>
												<DropdownItem>Edit</DropdownItem>
												<DropdownItem>Delete</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							</div>
						</div>
						<div class="banner-card__body">
							<p>
								{card.content}
							</p>
						</div>
						<div class="banner-card__bottom  align-center-v justify-content-between">
							<div class="card-author">
								<img src="/img/author-more.png" alt="" /><span class="author-name"
									>Barbara Marion</span
								>
							</div>
							<div class="card-meta">
								<ul>
									<li>
										<img class="svg" alt="" src={'/img/svg/heart.svg'} />
										<span class="view-count">70</span>
									</li>
									<li>
										<img class="svg" alt="" src={'/img/svg/eye.svg'} />
										<span class="view-count">70</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</figure>
			</Col>
		{/each}
	</Row>
</Col>

<Col lg={12}>
	<div class="bg-white p-25 mb-25 radius-xl">
		<Row>
			{#each normalCard as card}
				<Col xxl={4} md={6} class="mb-25">
					<figure class="feature-cards7">
						<div class="banner-card banner-card-border">
							<div class="banner-card__top align-center-v justify-content-between">
								<h4 class="banner-card__title">
									<img class="svg" alt="" src={`/img/svg/${card.icon}`} />
									<span>{card.title}</span>
								</h4>
								<div class="banner-card__action">
									<div class="more">
										<div class="card__more-action">
											<Dropdown>
												<DropdownToggle color="transparent"
													><img
														data-inlinesvg
														src={'/img/svg/more-horizontal.svg'}
													/></DropdownToggle
												>
												<DropdownMenu>
													<DropdownItem>View</DropdownItem>
													<DropdownItem>Edit</DropdownItem>
													<DropdownItem>Delete</DropdownItem>
												</DropdownMenu>
											</Dropdown>
										</div>
									</div>
								</div>
							</div>
							<div class="banner-card__body">
								<p>
									{card.content}
								</p>
							</div>
							<div class="banner-card__bottom  align-center-v justify-content-between">
								<div class="card-author">
									<img src="/img/author-more.png" alt="" /><span class="author-name"
										>Barbara Marion</span
									>
								</div>
								<div class="card-meta">
									<ul>
										<li>
											<img class="svg" alt="" src={'/img/svg/heart.svg'} />
											<span class="view-count">70</span>
										</li>
										<li>
											<img class="svg" alt="" src={'/img/svg/eye.svg'} />
											<span class="view-count">70</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</figure>
				</Col>
			{/each}
		</Row>
	</div>
</Col>

<style lang="scss">
	:global {
		@import '../../../../../src/assets/sass/mixins/media-queries';
		@import '../../../../../src/assets/sass/mixins/functions';
		@import '../../../../../src/assets/sass/mixins/rfs';
		@import '../../../../../src/assets/sass/components/projects';
		@import '../../../../../src/assets/sass/components/cards';
		@import '../../../../../src/assets/sass/components/users';
		@import '../../../../../src/assets/sass/general';
	}
</style>
