<script>
	import { Row, Col } from 'sveltestrap';
	import BlogCard from '@components/cards/BlogCard.svelte';

	let blogData = [
		{
			thumbnail: '/img/bg2.png',
			postedOn: '15 March 2021',
			title: 'The Ultimate Glossary of Terms',
			excerpt:
				'There are many variations of passages of majority have suffered alteration in some form',
			authorImg: '/img/alex-suprun.png',
			authorName: 'Machel Bold',
			likes: '15 K',
			comments: '75'
		},
		{
			thumbnail: '/img/bg3.png',
			postedOn: '12 February 2021',
			title: 'Multiple Dashboard Design Idea',
			excerpt:
				'There are many variations of passages of majority have suffered alteration in some form',
			authorImg: '/img/alex-suprun.png',
			authorName: 'Alex Kery',
			likes: '11 K',
			comments: '85'
		},
		{
			thumbnail: '/img/bg4.png',
			postedOn: '23 January 2021',
			title: 'How to Create a Niche Based',
			excerpt:
				'There are many variations of passages of majority have suffered alteration in some form',
			authorImg: '/img/alex-suprun.png',
			authorName: 'Jordan Smeth',
			likes: '21 K',
			comments: '67'
		}
	];
</script>

<Row>
	{#each blogData as content}
		<Col xxl={4} md={6} class="mb-25">
			<BlogCard {content} />
		</Col>
	{/each}
</Row>

<style lang="scss">
</style>
