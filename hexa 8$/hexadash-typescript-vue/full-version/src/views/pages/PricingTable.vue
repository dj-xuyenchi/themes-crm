<template>
  <div>
    <sdPageHeader title="Pricing Table" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25" type="flex">
        <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
          <PricingCard style="margin-bottom: 30px">
            <Badge class="pricing-badge" type="dark">Free Forever</Badge>
            <sdHeading class="pricing-title" as="h3"> Free </sdHeading>
            <span class="package-user-type">For Individuals</span>
            <ListGroup>
              <List text="100MB File Space" />
              <List text="2 Active Projects" />
              <List text="Limited Boards" />
              <List text="Basic Project Management" />
            </ListGroup>
            <sdButton class="btn-outlined" size="default" :outlined="true" type="white"> Current Plan </sdButton>
          </PricingCard>
        </a-col>
        <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
          <PricingCard style="margin-bottom: 30px">
            <Badge class="pricing-badge" type="primary">Basic Plan</Badge>
            <sdHeading class="price-amount" as="h3">
              <sup class="currency">$</sup>19
              <sub class="pricing-validity">Per month</sub>
            </sdHeading>
            <span class="package-user-type">For 2 Users</span>
            <ListGroup>
              <List text="100GB File Space" />
              <List text="300 Projects" />
              <List text="Limited Boards" />
              <List text="Basic Project Management" />
              <List text="Custom Post Types" />
            </ListGroup>
            <sdButton size="default" type="primary"> Get Started </sdButton>
          </PricingCard>
        </a-col>
        <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
          <PricingCard style="margin-bottom: 30px">
            <Badge class="pricing-badge" type="secondary">Business</Badge>
            <sdHeading class="price-amount" as="h3">
              <sup class="currency">$</sup>39
              <sub class="pricing-validity">Per month</sub>
            </sdHeading>
            <span class="package-user-type">For 10 Users</span>
            <ListGroup>
              <List text="100GB File Space" />
              <List text="300 Projects" />
              <List text="Limited Boards" />
              <List text="Basic Project Management" />
              <List text="Custom Post Types" />
              <List text="Subtasks" />
            </ListGroup>
            <sdButton size="default" type="secondary"> Get Started </sdButton>
          </PricingCard>
        </a-col>
        <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
          <PricingCard style="margin-bottom: 30px">
            <Badge class="pricing-badge" type="success">Enterprise</Badge>
            <sdHeading class="price-amount" as="h3">
              <sup class="currency">$</sup>79
              <sub class="pricing-validity">Per month</sub>
            </sdHeading>
            <span class="package-user-type">For 50 Users</span>
            <ListGroup>
              <List text="100GB File Space" />
              <List text="300 Projects" />
              <List text="Limited Boards" />
              <List text="Basic Project Management" />
              <List text="Custom Post Types" />
              <List text="Subtasks" />
            </ListGroup>
            <sdButton size="default" type="success"> Get Started </sdButton>
          </PricingCard>
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards headless>
            <a-row :gutter="25" type="flex">
              <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
                <PricingCard style="margin-bottom: 30px">
                  <Badge class="pricing-badge" type="dark">Free Forever</Badge>
                  <sdHeading class="price-amount" as="h3"> Free </sdHeading>
                  <span class="package-user-type">For Individuals</span>
                  <ListGroup>
                    <List text="100MB File Space" />
                    <List text="2 Active Projects" />
                    <List text="Limited Boards" />
                    <List text="Basic Project Management" />
                  </ListGroup>
                  <sdButton class="btn-outlined" size="default" :outlined="true" type="white"> Current Plan </sdButton>
                </PricingCard>
              </a-col>
              <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
                <PricingCard style="margin-bottom: 30px">
                  <Badge class="pricing-badge" type="primary">Basic Plan</Badge>
                  <sdHeading as="h3">
                    <sup class="currency">$</sup> 19
                    <sub class="pricing-validity">Per month</sub>
                  </sdHeading>
                  <span class="package-user-type">For 2 Users</span>
                  <ListGroup>
                    <List text="100GB File Space" />
                    <List text="300 Projects" />
                    <List text="Limited Boards" />
                    <List text="Basic Project Management" />
                    <List text="Custom Post Types" />
                  </ListGroup>
                  <sdButton size="default" type="primary"> Get Started </sdButton>
                </PricingCard>
              </a-col>
              <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
                <PricingCard style="margin-bottom: 30px">
                  <Badge class="pricing-badge" type="secondary">Business</Badge>
                  <sdHeading as="h3">
                    <sup class="currency">$</sup>39
                    <sub class="pricing-validity">Per month</sub>
                  </sdHeading>
                  <span class="package-user-type">For 10 Users</span>

                  <ListGroup>
                    <List text="100GB File Space" />
                    <List text="300 Projects" />
                    <List text="Limited Boards" />
                    <List text="Basic Project Management" />
                    <List text="Custom Post Types" />
                    <List text="Subtasks" />
                  </ListGroup>
                  <sdButton size="default" type="secondary"> Get Started </sdButton>
                </PricingCard>
              </a-col>
              <a-col :xxl="6" :lg="8" :sm="12" :xs="24">
                <PricingCard style="margin-bottom: 30px">
                  <Badge class="pricing-badge" type="success">Enterprise</Badge>
                  <sdHeading as="h3">
                    <sup class="currency">$</sup>79
                    <sub class="pricing-validity">Per month</sub>
                  </sdHeading>
                  <span class="package-user-type">For 50 Users</span>
                  <ListGroup>
                    <List text="100GB File Space" />
                    <List text="300 Projects" />
                    <List text="Limited Boards" />
                    <List text="Basic Project Management" />
                    <List text="Custom Post Types" />
                    <List text="Subtasks" />
                  </ListGroup>
                  <sdButton size="default" type="success"> Get Started </sdButton>
                </PricingCard>
              </a-col>
            </a-row>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import List from '../../components/pricing/pricing.vue';
import { PricingCard, ListGroup, Badge } from './style';
</script>
