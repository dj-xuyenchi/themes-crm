<script>
    
    import { Pagination, PaginationItem, PaginationLink, } from 'sveltestrap';
    export let pageDropdown;
    export let size;
</script>

<Pagination size={size}>
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
        <PaginationLink href="#">...</PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">12</PaginationLink>
    </PaginationItem>
    <PaginationItem disabled>
        <PaginationLink next href="#" />
    </PaginationItem>
    {#if pageDropdown }
    <PaginationItem>
        <div class="paging-option">
            <select name="page-number" class="page-selection">
                <option value="20">20/page</option>
                <option value="40">40/page</option>
                <option value="60">60/page</option>
            </select>
        </div>
    </PaginationItem>
    {/if}
</Pagination>

<style lang="scss">
	:global {
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