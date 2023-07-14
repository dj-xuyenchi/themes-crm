<template>
  <a-col v-for="{ name, designation, img, cover, id } in users" :key="id" :xxl="6" :xl="8" :sm="12" :xs="24">
    <sdUserCard :cover="cover">
      <div class="card user-card theme-grid-2">
        <sdCards headless>
          <figure>
            <div class="user-card__img">
              <img :src="require(`@/${img}`)" alt="" />
            </div>

            <figcaption>
              <div
                class="user-card__bg"
                :style="{
                  height: '150px',
                  background: `url(${require(`@/${cover}`)})`,
                }"
              />
              <div class="card__bottom">
                <div class="card__content">
                  <sdHeading class="card__name" as="h6">
                    <a to="#">{{ name }}</a>
                  </sdHeading>
                  <p class="card__designation">{{ designation }}</p>
                </div>

                <div class="card__actions align-center-v justify-content-center">
                  <sdButton size="default" outlined type="white">
                    <unicon name="comment-alt" width="14"></unicon>
                    <span>Chat</span>
                  </sdButton>
                  <sdButton size="default" outlined type="white"> View Profile </sdButton>
                </div>
              </div>
            </figcaption>
          </figure>
        </sdCards>
      </div>
    </sdUserCard>
  </a-col>
</template>
<script>
import users from '@/demoData/usersData.json';
import { defineComponent } from 'vue';
const UserCardStyle = defineComponent({
  name: 'UserCardStyle',
  setup() {
    return {
      users,
    };
  },
});

export default UserCardStyle;
</script>
