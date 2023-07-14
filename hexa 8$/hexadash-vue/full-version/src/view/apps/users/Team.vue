<template>
  <CardToolbox>
    <sdPageHeader
      title="Team Members"
      :routes="[]"
      class="ninjadash-page-header-main"
    >
      <template #subTitle>
        <span class="title-counter">274 Users</span>
        <sdAutoComplete
          :dataSource="searchData"
          width="100%"
          placeholder="Search by Name"
          patterns
        />
      </template>
      <template #buttons>
        <sdButton class="btn-add_new" size="default" key="1" type="primary">
          <unicon name="plus" width="14"></unicon> Add New Member
        </sdButton>
      </template>
    </sdPageHeader>
  </CardToolbox>

  <Main>
    <a-row :gutter="25">
      <a-col
        v-for="user in team"
        :key="user.id"
        :xxl="6"
        :lg="8"
        :sm="12"
        :xs="24"
      >
        <Suspense>
          <template #fallback>
            <sdCards headless>
              <a-skeleton avatar active />
            </sdCards>
          </template>
          <template #default>
            <TeamCard :user="user">
              <template #item>
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  <span>View</span>
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  <span>Edit</span>
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  <span>Delete</span>
                </a>
              </template>
            </TeamCard>
          </template>
        </Suspense>
      </a-col></a-row
    >
  </Main>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent } from "vue";
import { useStore } from "vuex";
import { Main, CardToolbox } from "../../styled";
const TeamCard = defineAsyncComponent(() => import("./overview/TeamCard"));

const Team = defineComponent({
  name: "Team",
  components: { Main, CardToolbox, TeamCard },
  setup() {
    const { state } = useStore();
    const searchData = computed(() => state.headerSearchData.data);
    const team = computed(() => state.team.data);
    return {
      searchData,
      team,
    };
  },
});

export default Team;
</script>
