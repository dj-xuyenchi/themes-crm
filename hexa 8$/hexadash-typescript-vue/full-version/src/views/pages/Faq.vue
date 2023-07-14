<template>
  <div>
    <sdPageHeader title="Frequently Asked Questions" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xxl="6" :lg="8" :md="10" :sm="11">
          <a-row>
            <a-col :xs="24">
              <FaqCategoryBox>
                <sdCards headless>
                  <Badge class="faq-badge" type="light"> Browse by Topic </Badge>
                  <ul>
                    <li>
                      <a class="active primary" @click="handleChange" href="#"> Using Applications </a>
                    </li>
                    <li>
                      <a class="secondary" @click="handleChange" href="#"> UI Elements </a>
                    </li>
                    <li>
                      <a class="success" @click="handleChange" href="#"> Components </a>
                    </li>
                    <li>
                      <a class="warning" @click="handleChange" href="#"> Build Process </a>
                    </li>
                    <li>
                      <a class="info" @click="handleChange" href="#"> Support Policy </a>
                    </li>
                    <li>
                      <a class="danger" @click="handleChange" href="#"> Accounts & Billing </a>
                    </li>
                  </ul>
                </sdCards>
              </FaqCategoryBox>
            </a-col>

            <a-col :xs="24">
              <FaqSupportBox>
                <sdCards headless>
                  <figure>
                    <img :src="'/src/assets/img/pages/support.svg'" alt="" />
                  </figure>
                  <figcaption>
                    <sdHeading as="h5">Not finding the help you need?</sdHeading>
                    <sdButton size="default" type="primary"> Contact Support </sdButton>
                  </figcaption>
                </sdCards>
              </FaqSupportBox>
            </a-col>
          </a-row>
        </a-col>
        <a-col :xxl="18" :lg="16" :md="14" :sm="13">
          <FaqWrapper>
            <sdCards headless title="Using Applications">
              <a-collapse v-model:activeKey="activeKey" accordion :bordered="false">
                <template #expandIcon="props">
                  <unicon name="plus" v-if="!props.isActive" width="14"></unicon>
                  <unicon name="minus" v-else width="14"></unicon>
                </template>
                <a-collapse-panel header="How long does it take to download updates?" key="1">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <unicon name="smile" width="14"></unicon>
                      <span>Yes</span>
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <unicon name="frown" width="14"></unicon>
                      <span>No</span>
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel header="How to use SCSS variables to build custom color?" key="2">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <unicon name="smile" width="14"></unicon>
                      <span>Yes</span>
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <unicon name="frown" width="14"></unicon>
                      <span>No</span>
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel header="How long does it take to download updates?" key="3">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <unicon name="smile" width="14"></unicon>
                      <span>Yes</span>
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <unicon name="frown" width="14"></unicon>
                      <span>No</span>
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel header="What is the flex layout?" key="4">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <unicon name="smile" width="14"></unicon>
                      <span>Yes</span>
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <unicon name="frown" width="14"></unicon>
                      <span>No</span>
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel header="How long does it take to download updates?" key="5">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <unicon name="smile" width="14"></unicon>
                      <span>Yes</span>
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <unicon name="frown" width="14"></unicon>
                      <span>No</span>
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel header="Where to buy this UI dashboard?" key="6">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <unicon name="smile" width="14"></unicon>
                      <span>Yes</span>
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <unicon name="frown" width="14"></unicon>
                      <span>No</span>
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel header="How long does it take to download updates?" key="7">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                    eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <span>Yes</span>
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <unicon name="frown" width="14"></unicon>
                      <span>No</span>
                    </sdButton>
                  </div>
                </a-collapse-panel>
              </a-collapse>
            </sdCards>
          </FaqWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { Badge, FaqCategoryBox, FaqSupportBox, FaqWrapper } from './style';
import { ref } from 'vue';

let activeKey = ref(['1']);
const handleChange = (e: any) => {
  e.preventDefault();
  e.target.closest('ul').querySelector('a.active').classList.remove('active');
  e.target.classList.add('active');
};
</script>
