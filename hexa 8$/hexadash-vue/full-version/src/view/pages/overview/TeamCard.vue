<template>
  <UserCard>
    <div class="card team-card">
      <sdCards headless>
        <figure>
          <img :src="require(`@/${img}`)" alt="" />
          <figcaption>
            <div class="edit">
              <sdDropdown :action="['click']" class="wide-dropdwon">
                <template #overlay>
                  <slot name="item"></slot>
                </template>
                <router-link to="#" class="card__more_actions">
                  <unicon name="ellipsis-h" width="16"></unicon>
                </router-link>
              </sdDropdown>
            </div>
            <sdHeading class="card__name" as="h6">
              <router-link to="#">{{ name }}</router-link>
            </sdHeading>
            <span class="card__designation">{{ designation }}</span>
            <div class="card__social">
              <a class="btn-icon facebook" to="#">
                <font-awesome-icon :icon="faFacebookF" size="1x" />
              </a>
              <a class="btn-icon twitter" to="#">
                <font-awesome-icon :icon="faTwitter" size="1x" />
              </a>
              <a class="btn-icon dribble" to="#">
                <font-awesome-icon :icon="faDribbble" size="1x" />
              </a>
              <a class="btn-icon instagram" to="#">
                <font-awesome-icon :icon="faInstagram" size="1x" />
              </a>
            </div>
          </figcaption>
        </figure>
      </sdCards>
    </div>
  </UserCard>
</template>

<script>
import { toRefs, defineComponent } from "vue";
import VueTypes from "vue-types";
import { UserCard } from "../style";
import {
  faFacebookF,
  faDribbble,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default defineComponent({
  name: "TeamCard",
  components: { UserCard },
  props: {
    user: VueTypes.object,
  },
  async setup(props) {
    const { user } = toRefs(props);
    const { name, designation, img } = user.value;
    return {
      name,
      designation,
      img,
      faFacebookF,
      faDribbble,
      faTwitter,
      faInstagram,
    };
  },
});
</script>
