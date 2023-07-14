<template>
  <sdUserCard>
    <div class="card user-card">
      <sdCards headless>
        <figure>
          <img :src="require(`@/${user.img}`)" alt="" />
        </figure>
        <figcaption>
          <div class="card__content">
            <sdHeading class="card__name" as="h6">
              <a to="#">{{ user.name }}</a>
            </sdHeading>
            <p class="card__designation">{{ user.designation }}</p>
          </div>

          <div class="card__actions">
            <sdButton size="default" type="white" outlined>
              <unicon name="envelope" width="14"></unicon>
              <span>Message</span>
            </sdButton>
            <sdButton size="default" type="white" outlined>
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
                  <sdHeading class="info-single__title" as="h2"> 74 </sdHeading>
                  <p>Products</p>
                </div>
              </a-col>
            </a-row>
          </div>
        </figcaption>
      </sdCards>
    </div>
  </sdUserCard>
</template>
<script>
import PropTypes from "vue-types";
import { defineComponent } from "vue";

const UserCards = defineComponent({
  name: "UserCards",
  props: {
    user: PropTypes.object,
  },
  setup() {
    // return { UserCard };
  },
});

export default UserCards;
</script>
