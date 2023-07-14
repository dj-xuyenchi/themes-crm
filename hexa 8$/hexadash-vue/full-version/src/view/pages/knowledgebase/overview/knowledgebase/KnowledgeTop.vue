<template>
  <div>
    <KnowledgebaseTopWrap>
      <div class="ninjadash_knowledgetop">
        <h2 class="ninjadash_knowledgetop__title">Hi, How can we help?</h2>
        <div class="ninjadash_knowledgetop__search--form">
          <a-form :model="formState" name="login" layout="vertical">
            <div class="ninjadash_knowledgetop__formInner">
              <a-form-item>
                <a-select
                  v-model:value="formState.type"
                  default-value="All Products"
                >
                  <a-select-option value="email">Email</a-select-option>
                  <a-select-option value="message">Message</a-select-option>
                  <a-select-option value="event">Event</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item class="ninjadash_search-input">
                <a-input
                  v-model:value="formState.search"
                  placeholder="Search anything"
                />
              </a-form-item>
              <a-form-item>
                <sdButton
                  class="btn-search"
                  html-type="submit"
                  type="primary"
                  size="lg"
                >
                  Search
                </sdButton>
              </a-form-item>
            </div>
          </a-form>
        </div>
        <div class="ninjadash_knowledgetop__popular--topics">
          <ul>
            <li>
              <span class="popular-topics-title">Popular topics:</span>
            </li>
            <li>
              <router-link to="#">Message formatting</router-link>
            </li>
            <li>
              <router-link to="#">Notifications</router-link>
            </li>
            <li>
              <router-link to="#">Change password</router-link>
            </li>
          </ul>
        </div>
      </div>
    </KnowledgebaseTopWrap>
  </div>
</template>

<script>
import { reactive, defineComponent } from "vue";
import { KnowledgebaseTopWrap } from "../../style";
export default defineComponent({
  name: "KnowledgeTop",
  components: {
    KnowledgebaseTopWrap,
  },
  setup() {
    const formState = reactive({
      search: "",
      type: undefined,
    });
    return {
      formState,
    };
  },
});
</script>
