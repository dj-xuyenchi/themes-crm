<script>
	import { Container, Row, Col, Card, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	import NoteList from '@apps/note/NoteList.svelte';
	import AddNote from '@apps/note/AddNote.svelte';
	import { createNotes } from '@store/noteStore';
	import noteData from '@data/note.json';

	let starredNotes = noteData.filter((item) => {
		if (!item.trash) {
			return item.starred;
		}
	});
	let notes = createNotes(starredNotes);

	const breadcrumbData = {
		pageTitle: 'Note',
		bcItem: 'Home',
		bcItem2: 'Apps',
		bcItemActive: 'Note'
	};
</script>

<svelte:head>
	<title>Note</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<div class="note-contents">
					<div class="note-sidebar-wrapper mb-30">
						<div class="note-sidebar">
							<Card class="border-0 shadow-none">
								<CardBody class="px-15 pt-30">
									<AddNote />
									<div class="note-types">
										<ul class="list-unstyled">
											<li>
												<a href="/note/all"
													><img class="svg" alt="" src={'/img/svg/edit.svg'} /> All</a
												>
											</li>
											<li>
												<a href="/note/favorite" class="active"
													><img class="svg" alt="" src={'/img/svg/star.svg'} /> Favorite</a
												>
											</li>
										</ul>
									</div>

									<div class="note-labels">
										<p><img class="svg" alt="" src={'/img/svg/tag.svg'} /> Labels</p>
										<ul class="list-unstyled">
											<li><a class="label-personal" href="/"><span /> Personal</a></li>
											<li><a class="label-work" href="/"><span /> Work</a></li>
											<li><a class="label-social" href="/"><span /> Social</a></li>
											<li><a class="label-important" href="/"><span /> Important</a></li>
										</ul>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
					<div class="note-grid-wrapper mb-30">
						<div class="notes-wrapper">
							<NoteList {notes} />
						</div>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../../assets/sass/apps/note.scss';
	}
</style>
