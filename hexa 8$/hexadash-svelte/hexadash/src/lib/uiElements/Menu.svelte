<script>
	import { onMount } from 'svelte';
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';

	onMount(() => {
		document.querySelectorAll('.custom-menu__link').forEach((elm) => {
			elm.addEventListener('click', (e) => {
				e.preventDefault();
				elm.classList.toggle('open');
				elm.closest('.has-submenu').querySelector('.custom-submenu').classList.toggle('open');
			});
		});
	});
</script>

<Col lg={12}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Top Navigation</h6>
		</CardHeader>
		<CardBody>
			<a href={'#'} class="menu-mob-trigger d-lg-none">
				<span />
				<span />
				<span />
			</a>
			<div class="menu-wrapper">
				<ul class="custom-menu menu-top menu-horizontal ">
					<li class="custom-menu__item has-submenu">
						<a class="custom-menu__link active" href={'#'}>
							<span class="custom-menu__icon">
								<img class="svg" alt="" src={'/img/svg/mail.svg'} />
							</span>
							<span class="custom-menu__text">Navigation One</span>
						</a>
						<ul class="custom-submenu">
							<li class="custom-menu__item">
								<span class="submenu-title">Item One</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
							<li class="custom-menu__item has-submenu">
								<a href={'#'} class="custom-menu__link">Item One</a>
								<ul class="custom-submenu">
									<li><a class="custom-menu__link" href={'#'}> Option 1</a></li>
									<li><a class="custom-menu__link" href={'#'}> Option 2</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="custom-menu__item menu-item-disabled">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Two</span>
						</a>
					</li>
					<li class="custom-menu__item has-submenu">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/settings.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Three-Submenu</span>
						</a>
						<ul class="custom-submenu">
							<li>
								<span class="submenu-title">Item One</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
							<li>
								<span class="submenu-title">Item Two</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="custom-menu__item">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Four Link</span>
						</a>
					</li>
				</ul>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Vertical Menu</h6>
		</CardHeader>
		<CardBody>
			<div class="menu-wrapper">
				<ul class="custom-menu menu-top menu-vertical ">
					<li class="custom-menu__item has-submenu">
						<a class="custom-menu__link active" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation One</span>
						</a>
						<ul class="custom-submenu">
							<li class="custom-menu__item">
								<span class="submenu-title">Item One</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
							<li class="custom-menu__item has-submenu">
								<a href={'#'} class="custom-menu__link">Item One</a>
								<ul class="custom-submenu">
									<li><a class="custom-menu__link" href={'#'}> Option 1</a></li>
									<li><a class="custom-menu__link" href={'#'}> Option 2</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="custom-menu__item menu-item-disabled">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Two</span>
						</a>
					</li>
					<li class="custom-menu__item has-submenu">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/settings.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Three-Submenu</span>
						</a>
						<ul class="custom-submenu">
							<li>
								<span class="submenu-title">Item One</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
							<li>
								<span class="submenu-title">Item Two</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="custom-menu__item">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Four Link</span>
						</a>
					</li>
				</ul>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Current Sub Menu</h6>
		</CardHeader>
		<CardBody>
			<div class="menu-wrapper">
				<ul class="custom-menu menu-top menu-vertical menu-collapsable">
					<li class="custom-menu__item has-submenu">
						<a class="custom-menu__link active" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation One</span>
						</a>
						<ul class="custom-submenu">
							<li class="custom-menu__item">
								<span class="submenu-title">Item One</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
							<li class="custom-menu__item has-submenu">
								<a href={'#'} class="custom-menu__link">Item One</a>
								<ul class="custom-submenu">
									<li><a class="custom-menu__link" href={'#'}> Option 1</a></li>
									<li><a class="custom-menu__link" href={'#'}> Option 2</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="custom-menu__item menu-item-disabled">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Two</span>
						</a>
					</li>
					<li class="custom-menu__item has-submenu">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/settings.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Three-Submenu</span>
						</a>
						<ul class="custom-submenu">
							<li>
								<span class="submenu-title">Item One</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
							<li>
								<span class="submenu-title">Item Two</span>
								<ul class="custom-submenu-item">
									<li><a href={'#'}> Option 1</a></li>
									<li><a href={'#'}> Option 2</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="custom-menu__item">
						<a class="custom-menu__link" href={'#'}>
							<span class="custom-menu__icon"
								><img class="svg" alt="" src={'/img/svg/mail.svg'} /></span
							>
							<span class="custom-menu__text">Navigation Four Link</span>
						</a>
					</li>
				</ul>
			</div>
		</CardBody>
	</Card>
</Col>
