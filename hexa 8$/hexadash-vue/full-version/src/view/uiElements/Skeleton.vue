<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Skeleton">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Basic" caption="The simplest use of Skeleton">
            <a-skeleton />
          </sdCards>
          <sdCards
            title="Complex combination"
            caption="The simplest use of Skeleton"
          >
            <a-skeleton avatar :paragraph="{ rows: 4 }" />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards
            title="Active Animation"
            caption="The simplest use of Skeleton"
          >
            <a-skeleton active />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skeleton",
  components: {
    Main,
  },
});
</script>
