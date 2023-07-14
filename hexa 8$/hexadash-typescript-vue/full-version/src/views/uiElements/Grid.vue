<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Grid"> </sdPageHeader>
    <Main>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Basic Grid" size="default">
            <GridStyle>
              <a-row>
                <a-col :span="12">col-12</a-col>
                <a-col :span="12">col-12</a-col>
              </a-row>
              <a-row>
                <a-col :span="8">col-8</a-col>
                <a-col :span="8">col-8</a-col>
                <a-col :span="8">col-8</a-col>
              </a-row>
              <a-row>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Grid Gutter" size="default">
            <GridStyleGutter>
              <a-row :gutter="16">
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
              </a-row>
              <a-row :gutter="[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]">
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
              </a-row>
            </GridStyleGutter>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Column offset" size="default">
            <GridStyleOffset>
              <a-row>
                <a-col :span="8">col-8</a-col>
                <a-col :span="8" offset="8"> col-8 </a-col>
              </a-row>
              <a-row>
                <a-col :span="6" offset="6"> col-6 col-offset-6 </a-col>
                <a-col :span="6" offset="6"> col-6 col-offset-6 </a-col>
              </a-row>
              <a-row>
                <a-col :span="12" offset="6"> col-12 col-offset-6 </a-col>
              </a-row>
            </GridStyleOffset>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Grid sort" size="default">
            <GridStyle>
              <a-row>
                <a-col :span="18" push="6"> col-18 col-push-6 </a-col>
                <a-col :span="6" pull="18"> col-6 col-pull-18 </a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="sub-element align" size="default">
            <GridStyle>
              <p>sub-element align left</p>
              <a-row type="flex" justify="start">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align center</p>
              <a-row type="flex" justify="center">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align right</p>
              <a-row type="flex" justify="end">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element monospaced arrangement</p>
              <a-row type="flex" justify="space-between">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align full</p>
              <a-row type="flex" justify="space-around">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Responsive" size="default">
            <GridStyle>
              <a-divider orientation="left">Normal</a-divider>
              <a-row type="flex">
                <a-col :span="6" :order="4">1 col-order-4</a-col>
                <a-col :span="6" :order="3">2 col-order-3</a-col>
                <a-col :span="6" :order="2">3 col-order-2</a-col>
                <a-col :span="6" :order="1">4 col-order-1</a-col>
              </a-row>
              <a-divider orientation="left">Responsive</a-divider>
              <a-row type="flex">
                <a-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }">
                  1 col-order-responsive
                </a-col>
                <a-col :span="6" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
                  2 col-order-responsive
                </a-col>
                <a-col :span="6" :xs="{ order: 3 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 2 }">
                  3 col-order-responsive
                </a-col>
                <a-col :span="6" :xs="{ order: 4 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 1 }">
                  4 col-order-responsive
                </a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="More Responsive" size="default">
            <GridStyle>
              <a-row>
                <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"> Col </a-col>
                <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"> Col </a-col>
                <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"> Col </a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { GridStyle, GridStyleGutter, GridStyleOffset } from './GridStyled';
</script>
