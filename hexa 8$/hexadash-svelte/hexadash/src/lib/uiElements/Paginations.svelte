<script>
	import {
		Pagination,
		PaginationItem,
		PaginationLink,
		Card,
		CardHeader,
		CardBody
	} from 'sveltestrap';
</script>
<div class="pagination-page">
	<Card class="mb-4">
		<CardHeader>
			<h6>Pagination Basic</h6>
		</CardHeader>
		<CardBody>
			<Pagination ariaLabel="Page navigation example">
				<PaginationItem disabled>
					<PaginationLink first href="#" />
				</PaginationItem>
				<PaginationItem disabled>
					<PaginationLink previous href="#" />
				</PaginationItem>
				<PaginationItem active>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">4</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">5</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink last href="#" />
				</PaginationItem>
			</Pagination>
		</CardBody>
	</Card>
	
	<Card class="mb-4">
		<CardHeader>
			<h6>Pagination Large</h6>
		</CardHeader>
		<CardBody>
			<Pagination size="lg" ariaLabel="Page navigation example">
				<PaginationItem>
					<PaginationLink first href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink last href="#" />
				</PaginationItem>
			</Pagination>
		</CardBody>
	</Card>
	
	<Card>
		<CardHeader>
			<h6>Pagination Small</h6>
		</CardHeader>
		<CardBody>
			<Pagination size="sm" ariaLabel="Page navigation example">
				<PaginationItem>
					<PaginationLink first href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink last href="#" />
				</PaginationItem>
			</Pagination>
		</CardBody>
	</Card>
</div>


<style lang="scss">
	:global {
		@import "../../../src/assets/sass/mixins/media-queries";
		@include cms2(1368px){
			.pagination-page{
				.pagination{
					justify-content: flex-start;
					margin-bottom: 20px;
					margin-top:20px;
				}
			}
		}
		.pagination {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 5px;
			
			&:not(.pagination-lg) {
				.page-link {
					font-size: 14px;
				}
			}
			&:not(.pagination-sm) {
				.page-link {
					font-size: 14px;
				}
			}
			.page-item {
				.page-link {
					padding: 4px 12px;
					color: var(--light-gray);
					border-color: var(--border-color);
					border-radius: 2px;
				}
				&.active {
					.page-link {
						color: var(--color-white);
						border-color: var(--color-primary);
						background-color: var(--color-primary);
					}
				}
			}
		}
	}
</style>
