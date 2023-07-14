<template>
  <sdUserCard>
    <div class="card team-card">
      <sdCards headless>
        <figure>
          <img :src="require(`@/${user.img}`)" alt="" />
          <figcaption>
            <div class="edit">
              <sdDropdown :action="['click']" class="wide-dropdwon">
                <template #overlay>
                  <slot name="item"></slot>
                </template>
                <a class="card__more_actions" to="#">
                  <unicon name="ellipsis-h" width="16"></unicon>
                </a>
              </sdDropdown>
            </div>
            <sdHeading class="card__name" as="h6">
              <a to="#">{{ user.name }}</a>
            </sdHeading>
            <span class="card__designation">{{ user.designation }}</span>
            <div class="card__social">
              <a class="btn-icon facebook" to="#">
                <font-awesome-icon
                  class="super-crazy-colors"
                  :icon="faFacebookF"
                  size="1x"
                  :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                />
              </a>
              <a class="btn-icon twitter" to="#">
                <font-awesome-icon
                  class="super-crazy-colors"
                  :icon="faTwitter"
                  size="1x"
                  :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                />
              </a>
              <a class="btn-icon dribble" to="#">
                <font-awesome-icon
                  class="super-crazy-colors"
                  :icon="faDribbble"
                  size="1x"
                  :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                />
              </a>
              <a class="btn-icon instagram" to="#">
                <font-awesome-icon
                  class="super-crazy-colors"
                  :icon="faInstagram"
                  size="1x"
                  :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                />
              </a>
            </div>
          </figcaption>
        </figure>
      </sdCards>
    </div>
  </sdUserCard>
</template>
<script>
import PropTypes from "vue-types";
import { defineComponent } from "vue";
import {
  faFacebookF,
  faDribbble,
  faTwitter,
  faInstagram,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

const TeamCard = defineComponent({
  name: "TeamCard",
  props: {
    user: PropTypes.object,
    actions: PropTypes.node,
  },
  setup() {
    return {
      faFacebookF,
      faDribbble,
      faTwitter,
      faInstagram,
      faGithub,
      faMediumM,
    };
  },
});

export default TeamCard;
</script>
