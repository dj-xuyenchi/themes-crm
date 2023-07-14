<template>
  <div>
    <sdPageHeader
      title="Unicons"
      class="ninjadash-page-header-main"
    ></sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <IconWrapper>
            <sdCards title="Simply beautiful open source icons">
              <Unicon />
            </sdCards>
          </IconWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import Unicon from "../../components/icons/UniconCompo.vue";
import { IconWrapper } from "./IconStyled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Unicons",
  components: {
    Main,
    Unicon,
    IconWrapper,
  },
});
</script>
