<template>
  <a-col
    v-for="{ title, company, img, icon, content, id } in users"
    :key="id"
    :xxl="8"
    :xl="8"
    :sm="12"
    :xs="24"
  >
    <sdUserCard>
      <div class="card user-card theme-grid-3">
        <sdCards headless>
          <div class="card__top">
            <div class="user-card__img">
              <img :src="require(`@/${icon}`)" alt="" />
            </div>
            <div class="user-card__info">
              <sdHeading class="card__name" as="h6">
                <a class="name-text" to="#">
                  {{ title }}
                </a>
                <p class="card__designation">{{ company }}</p>
              </sdHeading>
              <sdDropdown>
                <template #overlay>
                  <a to="#">View</a>
                  <a to="#">Edit</a>
                  <a to="#">Leave</a>
                  <a to="#">Delete</a>
                </template>
                <a class="action-more" to="#">
                  <unicon name="ellipsis-h"></unicon>
                </a>
              </sdDropdown>
            </div>
          </div>
          <div class="card__content">
            <p>{{ content }}</p>
            <div class="image-group">
              <img
                v-for="(item, key) in img"
                :key="key + 1"
                :src="require(`@/${item}`)"
                alt=""
              />
            </div>
          </div>
          <div class="card__info">
            <p class="info-line">
              <span>Current project</span>
              <span>Project Completed</span>
            </p>
            <h2 class="info-line">
              <span>Plugin Development</span>
              <span class="success" :style="{ background: 'none !important' }">
                45
              </span>
            </h2>
            <div class="project-progress">
              <a-progress
                :percent="70"
                :stroke-width="5"
                status="active"
                class="progress-dt progress-primary"
              />
            </div>
            <p class="completed-count">12 / 15 tasks completed</p>
          </div>
        </sdCards>
      </div>
    </sdUserCard>
  </a-col>
</template>
<script>
import users from "@/demoData/usersGroupData.json";
import { defineComponent } from "vue";
const UserCardGroup = defineComponent({
  name: "UserCardGroup",
  setup() {
    return {
      users,
    };
  },
});

export default UserCardGroup;
</script>
