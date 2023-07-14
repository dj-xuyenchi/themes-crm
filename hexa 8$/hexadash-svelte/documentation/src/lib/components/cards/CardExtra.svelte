<script>
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
	const src = '/img/svg/more-horizontal.svg';
	$: attributes = {
		alt: 'more-horizontal',
		class: 'svg'
	};
</script>

<div class="card-extra">
	<Dropdown nav>
		<DropdownToggle nav>
			<InlineSVG {src} {...attributes} />
		</DropdownToggle>
		<DropdownMenu end>
			<DropdownItem href={'#'}>Action</DropdownItem>
			<DropdownItem href={'#'}>Another action</DropdownItem>
			<DropdownItem href={'#'}>Something else here</DropdownItem>
		</DropdownMenu>
	</Dropdown>
</div>

<style lang="scss">
	.card-extra {
		:global {
			.nav-link {
				padding: 0;
				svg {
					outline: 0;
				}
			}
		}
	}
</style>
