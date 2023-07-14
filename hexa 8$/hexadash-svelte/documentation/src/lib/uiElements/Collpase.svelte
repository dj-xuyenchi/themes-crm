<script>
	import { Row, Col, Card, CardHeader, CardBody, Accordion, AccordionItem } from 'sveltestrap';
</script>

<Row>
	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Basic</h6>
			</CardHeader>
			<CardBody>
				<Accordion stayOpen class="custom-accordin custom-accordin--one">
					<AccordionItem active header="This is panel header 1">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 2">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 3">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Nested panel</h6>
			</CardHeader>
			<CardBody>
				<Accordion stayOpen class="custom-accordin custom-accordin--nested">
					<AccordionItem active header="This is panel header 1">
						<Accordion>
							<AccordionItem active header="This the nested item">
								A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it
								can be found as a welcome guest in many households across the world.
							</AccordionItem>
						</Accordion>
					</AccordionItem>
					<AccordionItem header="This is panel header 2">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 3">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>No arrow</h6>
			</CardHeader>
			<CardBody>
				<Accordion stayOpen class="custom-accordin custom-accordin--no-arrow">
					<AccordionItem header="This is panel header 1">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 2">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 3">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
	</Col>
	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Accordion</h6>
			</CardHeader>
			<CardBody>
				<Accordion class="custom-accordin custom-accordin--two">
					<AccordionItem header="This is panel header 1">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 2">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 3">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Borderless</h6>
			</CardHeader>
			<CardBody>
				<Accordion class="custom-accordin custom-accordin--borderless">
					<AccordionItem header="This is panel header 1">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 2">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 3">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Custom Panel</h6>
			</CardHeader>
			<CardBody>
				<Accordion class="custom-accordin custom-accordin--three">
					<AccordionItem header="This is panel header 1">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 2">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
					<AccordionItem header="This is panel header 3">
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
						be found as a welcome guest in many households across the world.
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
	</Col>
</Row>
<style lang="scss">
	:global{
		.custom-accordin{
			border-radius: 5px;
    		border: 1px solid var(--border-color);
			.accordion-item{
				border: none;
				border-bottom: 1px solid var(--border-color);
				&:last-child{
					border-bottom:none;
					.accordion-header{
						&:has(.collapsed){
							border-radius: 0 0 5px 5px;
						}
					}
				}
				.accordion-header{
					margin-bottom: -1px;
					border-bottom: 1px solid var(--border-color);
					background-color: var(--bg-normal);
					border-radius: 5px 5px 0 0;
					button{
						box-shadow: none;
						border: none;
						background-color: transparent;
						font-size: 14px;
						font-weight: 400;
						color: var(--color-light);
						text-transform: capitalize;
						&:after{
							font-size: 12px;
							margin-right: 18px;
							color: var(--color-light);
							background-image: none;
							content: "\f107";
							font-family: "Line Awesome Free";
							font-weight: 900;
							display: flex;
							align-items: center;
							justify-content: center;
							margin-right: 0;
						}
					}
				}
				.accordion-collapse{
					.accordion-body{

						font-size: 14px;
						margin-bottom: 0;
						color: var(--color-light);
						.accordion{
							.accordion-item{
								.accordion-header{
									border: 1px solid var(--border-color);
									border-radius: 5px
								}
							}
						}
					}
				}
			}	
		}
	};
</style>