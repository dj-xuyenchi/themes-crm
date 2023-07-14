<script>
	import { Container, Row, Col, Card, CardHeader, CardBody, Alert } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Prism from "@components/PrismaJS.svelte";

	const breadcrumbData = {
		pageTitle: 'Store',
		bcItem: 'Docs',
		bcItemActive: 'Store'
	};

	let code_storCreate = `
import { writable } from "svelte/store";

export function createTodos(initialValue = []){
    const { subscribe, update } = writable(initialValue);

    return{
        subscribe,
        add(input, id){
            const todo = {
                id,
                title: input.value,
                description: input.value,
                trash: false,
                completed: false,
            };
            update((prev) =>{
                return [todo, ...prev];
            })
        },

        remove(todo){
            update((prev)=>{
                return prev.filter(item => item !== todo);
            })
        },

        toggle(todo){
            todo.completed = !todo.completed;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.completed !== item)
                })
            }, 0);
        },

        trash(todo){
            todo.trash = !todo.trash;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.trash !== item)
                })
            }, 0);
        }
    }

}`;
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
                            <p>It is very easy to create global store in svelte</p>
                            
                            <h2>To setup a new store , please follow the below steps:</h2>
                            <p>1. Create a file at <code>/src/lib/store</code></p>
                            <p>2. Here you can improt writable store form set & update data</p>
                            <Prism language="r" code="{code_storCreate}" header=""/>
                            <p>3. Your global store is created successfully.</p>
                        </div>
                    </CardBody>
                </Card>
			</Col>
		</Row>
	</Container>
</div>


