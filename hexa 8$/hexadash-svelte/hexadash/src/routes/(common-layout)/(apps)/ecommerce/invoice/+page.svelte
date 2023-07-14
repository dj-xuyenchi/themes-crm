<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import { Container, Row, Col, Table } from 'sveltestrap';
    import { PrinterIcon, SendIcon, DownloadIcon } from 'svelte-feather-icons';

	const breadcrumbData = {
		pageTitle: 'Invoice',
		bcItem: 'eCommerce',
		bcItemActive: 'Invoice'
	};


</script>


<Container fluid>
    <Row>
        <Col lg={12}>
            <BreadcrumbOne {...breadcrumbData} />
        </Col>
    </Row>
</Container>

<Container fluid>
    <Row>
        <Col lg={12}>
            <div class="payment-invoice global-shadow border-light-light radius-xl w-100 mb-30">
                <div class="payment-invoice__body">
                    <div class="payment-invoice-address d-flex justify-content-sm-between">
                        <div class="payment-invoice-logo">
                            <a href="/">
                                <img src="/img/logo-dark.svg" alt="">
                            </a>
                        </div>
                        <div class="payment-invoice-address__area">
                            <address>
                                Admin Company<br> 795 Folsom Ave, Suite 600<br> San Francisco, CA 94107, USA<br> Reg. number : 245000003513
                            </address>
                        </div>
                    </div>
                    <div class="payment-invoice-qr d-flex justify-content-between mb-40 px-xl-50 px-30 py-sm-30 py-20">
                        <div class="d-flex justify-content-center mb-lg-0 mb-25">
                            <div class="payment-invoice-qr__number">
                                <div class="display-3">Invoice</div>
                                <p>No : <span>#642678</span></p>
                                <p>Date : <span>Jan 17, 2020</span></p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mb-lg-0 mb-25">
                            <div class="payment-invoice-qr__code bg-white radius-xl p-20">
                                <img src="/img/qr.png" alt="">
                                <p>8364297359912267</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="payment-invoice-qr__address">
                                <p>Invoice To:</p>
                                <span>Stanley Jones</span><br>
                                <span>795 Folsom Ave, Suite 600</span><br>
                                <span>San Francisco, CA 94107, USA</span>
                            </div>
                        </div>
                    </div>
                    <div class="payment-invoice-table">
                        <div class="table-responsive">
                            <Table borderless id="cart" >
                                <thead>
                                    <tr class="product-cart__header">
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col" class="text-end">Price Per Unit</th>
                                        <th scope="col" class="text-end">Quantity</th>
                                        <th scope="col" class="text-end">Order Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td class="Product-cart-title">
                                            <div class="media  align-items-center">
                                                <div class="media-body">
                                                    <h5 class="mt-0">Fiber base chair</h5>
                                                    <div class="d-flex">
                                                        <p>Size:<span>large</span></p>
                                                        <p>color:<span>brown</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="unit text-end">$248.66</td>
                                        <td class="invoice-quantity text-end">1</td>
                                        <td class="text-end order">$5.11</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td class="Product-cart-title">
                                            <div class="media  align-items-center">
                                                <div class="media-body">
                                                    <h5 class="mt-0">Plastic chair</h5>
                                                    <div class="d-flex">
                                                        <p>Size:<span>large</span></p>
                                                        <p>color:<span>brown</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="unit text-end">$248.66</td>
                                        <td class="invoice-quantity text-end">2</td>
                                        <td class="text-end order">$5.11</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="3"></td>
                                        <td class="order-summery float-right border-0   ">
                                            <div class="total">
                                                <div class="subtotalTotal mb-0 text-end">Subtotal : </div>
                                                <div class="taxes mb-0 text-end">discount : </div>
                                                <div class="shipping mb-0 text-end">Shipping charge :</div>
                                            </div>
                                            <div class="total-money mt-2 text-end">
                                                <h6>Total :</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="total-order float-right text-end fs-14 fw-500">
                                                <p>$1,690.26</p>
                                                <p>-$126.30</p>
                                                <p>$46.30</p>
                                                <h5 class="color-primary">$1736.00</h5>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </div>
                    </div>
                    <div class="payment-invoice__btn mt-xxl-50 pt-xxl-30">
                        <button class="btn border rounded-pill bg-normal text-gray px-25 print-btn"><PrinterIcon /> Print</button>
                        <button class="btn border rounded-pill bg-normal text-gray px-25 print-btn"><SendIcon /> Invoice</button>
                        <button class="btn-primary btn rounded-pill px-25 text-white download"><DownloadIcon /> Download</button>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
</Container>
<style lang="scss">
	:global{
		@import "../../../../../assets/sass/mixins/functions";
		@import "../../../../../assets/sass/mixins/rfs";
		@import "../../../../../assets/sass/mixins/media-queries";
		@import "../../../../../assets/sass/components/cart";
		@import "../../../../../assets/sass/components/checkout";
	}
</style>