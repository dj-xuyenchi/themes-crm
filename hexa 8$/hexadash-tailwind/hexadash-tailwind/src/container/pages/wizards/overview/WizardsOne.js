import React, { lazy } from 'react';
import { WizardWrapper } from '../../../styled';

const Checkout = lazy(() => import('../../../ecommerce/overview/CheckoutWizard'));

function WizardsOne() {
  return (
    <WizardWrapper className="hexadash-wizard-page">
      <Checkout />
    </WizardWrapper>
  );
}

export default WizardsOne;
