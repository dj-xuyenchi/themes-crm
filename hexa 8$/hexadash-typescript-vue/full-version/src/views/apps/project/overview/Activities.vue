<script setup lang="ts">
import { ActivitiesWrapper } from '../style';
</script>

<template>
  <ActivitiesWrapper>
    <div class="activity-block">
      <a-row :gutter="15">
        <a-col :xxl="3" :lg="5" :md="4" :sm="5" :xs="24">
          <div class="activity-dateMeta">
            <sdHeading as="h4">22</sdHeading>
            <span class="activity-month">December</span>
          </div>
        </a-col>
        <a-col :xxl="21" :lg="19" :md="20" :sm="19" :xs="24">
          <div class="activity-single d-flex">
            <div class="activity-single__figure">
              <span class="activity-icon bg-secondary">
                <unicon name="plus" width="12"></unicon>
              </span>
              <img style="width: 30px" :src="'/src/assets/img/users/1.png'" alt="" />
            </div>
            <div class="activity-single__content">
              <sdHeading class="activity-title" as="h5">
                Mumtahin <span>add new task</span> Dashboard Project
              </sdHeading>
              <p class="activity-timeMeta">3:30 PM</p>
            </div>
          </div>

          <div class="activity-single d-flex">
            <div class="activity-single__figure">
              <span class="activity-icon bg-primary">
                <unicon name="arrow" width="12"></unicon>
              </span>
              <img style="width: 30px" :src="'/src/assets/img/users/1.png'" alt="" />
            </div>
            <div class="activity-single__content">
              <sdHeading class="activity-title" as="h5"> Mike Greene<span>pushed commit</span>#652364 </sdHeading>
              <p class="activity-timeMeta">3:30 PM</p>
            </div>
          </div>

          <div class="activity-single d-flex">
            <div class="activity-single__figure">
              <span class="activity-icon bg-success">
                <unicon name="plus" width="12"></unicon>
              </span>
              <img style="width: 30px" :src="'/src/assets/img/users/1.png'" alt="" />
            </div>
            <div class="activity-single__content">
              <sdHeading class="activity-title" as="h5">
                Tomlinson<span>completed task</span>Invoice template
              </sdHeading>
              <p class="activity-timeMeta">3:30 PM</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="activity-block">
      <a-row :gutter="15">
        <a-col :xxl="3" :lg="5" :md="4" :sm="5" :xs="24">
          <div class="activity-dateMeta">
            <sdHeading as="h4">22</sdHeading>
            <span class="activity-month">December</span>
          </div>
        </a-col>
        <a-col :xxl="21" :lg="19" :md="20" :sm="19" :xs="24">
          <div class="activity-single d-flex">
            <div class="activity-single__figure">
              <span class="activity-icon bg-secondary">
                <unicon name="user-plus" width="12"></unicon>
              </span>
              <img style="width: 30px" :src="'/src/assets/img/users/1.png'" alt="" />
            </div>
            <div class="activity-single__content">
              <sdHeading class="activity-title" as="h5">
                Mumtahin <span>add new task</span> Dashboard Project
              </sdHeading>
              <p class="activity-timeMeta">3:30 PM</p>
            </div>
          </div>

          <div class="activity-single d-flex">
            <div class="activity-single__figure">
              <span class="activity-icon bg-primary">
                <unicon name="arrow" width="12"></unicon>
              </span>
              <img style="width: 30px" :src="'/src/assets/img/users/1.png'" alt="" />
            </div>
            <div class="activity-single__content">
              <sdHeading class="activity-title" as="h5"> Mike Greene<span>pushed commit</span>#652364 </sdHeading>
              <p class="activity-timeMeta">3:30 PM</p>
            </div>
          </div>

          <div class="activity-single d-flex">
            <div class="activity-single__figure">
              <span class="activity-icon bg-success">
                <unicon name="upload" width="12"></unicon>
              </span>
              <img style="width: 30px" :src="'/src/assets/img/users/1.png'" alt="" />
            </div>
            <div class="activity-single__content">
              <sdHeading class="activity-title" as="h5">
                Tomlinson<span>completed task</span>Invoice template
              </sdHeading>
              <p class="activity-timeMeta">3:30 PM</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </ActivitiesWrapper>
</template>
