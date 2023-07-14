<template>
  <sdPageHeader title="Terms & Conditions" :routes="pageRoutes" class="ninjadash-page-header-main"></sdPageHeader>

  <Main>
    <a-row :gutter="25">
      <a-col :sm="24" :xs="24">
        <TermsConditionsStyle>
          <div class="ninjadash-term-condition-top">
            <h2 class="ninjadash-term-condition-top__title">Terms & Conditions</h2>
          </div>
          <div class="ninjadash-term-condition-content">
            <h3>Privacy Policy</h3>
            <p>
              Your privacy is important to us. Any information submitted by the buyer for completing the transaction,
              delivering the product, informing about new product releases, and addressing any customer service issues
              are strictly confidential. We don’t share this information with anyone.
            </p>
            <h3>Payment</h3>
            <p>
              To Purchase any of our products, you have the option of paying via PayPal or any major credit and debit
              cards. Extensions and Themes are licensed for one year at a time. After that you may renew your license to
              continue updates and support. We do not store your payment or credit card information for your security.
            </p>
            <h3>License Usage</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>Product Updates</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages
            </p>
            <h3>Media</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages
            </p>
            <h3>Cookies</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages
            </p>
            <h3>Support</h3>
            <p>
              Please, refer
              <router-link to="#">Support Policy</router-link> page for details.
            </p>
            <p>Last update: May 05, 2022</p>
          </div>
        </TermsConditionsStyle>
      </a-col>
    </a-row>
  </Main>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { TermsConditionsStyle } from './style';

const pageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: '',
    breadcrumbName: 'Terms & Conditions',
  },
];
</script>
