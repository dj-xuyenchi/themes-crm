<template>
  <a-col
    v-for="{ name, designation, img, id } in users"
    :key="id"
    :xxl="6"
    :xl="8"
    :sm="12"
    :xs="24"
  >
    <sdUserCard>
      <div class="card user-card">
        <sdCards headless>
          <figure>
            <img :src="require(`@/${img}`)" alt="" />
          </figure>
          <figcaption>
            <div class="card__content">
              <sdHeading class="card__name" as="h6">
                <a to="#">{{ name }}</a>
              </sdHeading>
              <p class="card__designation">{{ designation }}</p>
            </div>

            <div class="card__actions">
              <sdButton size="default" outlined type="white">
                <unicon name="envelope" width="14"></unicon>
                <span>Message</span>
              </sdButton>
              <sdButton size="default" outlined type="white">
                <unicon name="user-plus" width="14"></unicon>
                <span>Following</span>
              </sdButton>
            </div>
            <div class="card__info">
              <a-row :gutter="15">
                <a-col :xs="8">
                  <div class="info-single">
                    <sdHeading class="info-single__title" as="h2">
                      $72,572
                    </sdHeading>
                    <p>Total Revenue</p>
                  </div>
                </a-col>
                <a-col :xs="8">
                  <div class="info-single">
                    <sdHeading class="info-single__title" as="h2">
                      3,257
                    </sdHeading>
                    <p>Orders</p>
                  </div>
                </a-col>
                <a-col :xs="8">
                  <div class="info-single">
                    <sdHeading class="info-single__title" as="h2">
                      74
                    </sdHeading>
                    <p>Products</p>
                  </div>
                </a-col>
              </a-row>
            </div>
          </figcaption>
        </sdCards>
      </div>
    </sdUserCard>
  </a-col>
</template>
<script>
import users from "@/demoData/usersData.json";
import { defineComponent } from "vue";
const UserCards = defineComponent({
  name: "UserCards",
  setup() {
    return {
      users,
    };
  },
});

export default UserCards;
</script>
