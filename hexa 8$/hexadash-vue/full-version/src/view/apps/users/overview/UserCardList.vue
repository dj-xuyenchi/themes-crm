<template>
  <a-col
    v-for="{ name, designation, img, content, id } in users"
    :key="id"
    :xxl="12"
    :xl="12"
    :sm="24"
    :xs="24"
  >
    <sdUserCard>
      <div class="card user-card theme-list">
        <sdCards headless>
          <figure>
            <img :src="require(`@/${img}`)" alt="" />

            <figcaption>
              <div class="card__content">
                <sdHeading class="card__name" as="h6">
                  <a to="#">{{ name }}</a>
                </sdHeading>
                <p class="card__designation">{{ designation }}</p>
                <p class="card-text">{{ content }}</p>
                <p class="card-info">
                  <span class="user-meta"> <strong>$25/</strong>hr </span>
                  <span class="user-meta"> <strong>$88K</strong> earned </span>
                </p>
              </div>

              <div class="card__actions">
                <sdButton size="default" outlined type="white">
                  View Profile
                </sdButton>
                <sdButton size="default" outlined type="white">
                  Message
                </sdButton>
              </div>
            </figcaption>
          </figure>
        </sdCards>
      </div>
    </sdUserCard>
  </a-col>
</template>
<script>
import users from "@/demoData/usersData.json";
import { defineComponent } from "vue";
const UserCardList = defineComponent({
  name: "UserCardList",
  setup() {
    return {
      users,
    };
  },
});

export default UserCardList;
</script>
