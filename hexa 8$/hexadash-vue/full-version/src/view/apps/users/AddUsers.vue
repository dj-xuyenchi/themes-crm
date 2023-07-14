<template>
  <sdPageHeader title="Add User" :routes="[]" />
  <Main>
    <a-row :gutter="15">
      <a-col :xs="24">
        <AddUser>
          <sdCards>
            <template #title>
              <div class="card-nav">
                <ul>
                  <li>
                    <router-link :to="`info`">
                      <unicon name="user" width="14"></unicon>
                      Personal Info
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="`work`">
                      <unicon name="briefcase-alt" width="14"></unicon>
                      Work Info
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="`social`">
                      <unicon name="share-alt" width="14"></unicon>
                      Social
                    </router-link>
                  </li>
                </ul>
              </div>
            </template>
            <router-view name="descendant" />
          </sdCards>
        </AddUser>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { AddUser } from "./style";
import { Main } from "../../styled";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";

const AddNew = defineComponent({
  name: "AddNew",
  components: { Main, AddUser },
  setup() {
    const { matched } = useRoute();
    return {
      matched,
    };
  },
});

export default AddNew;
</script>
