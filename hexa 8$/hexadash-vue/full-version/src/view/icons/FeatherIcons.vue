<template>
  <div>
    <sdPageHeader title="FeatherIcons" class="ninjadash-page-header-main">

    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <IconWrapper>
            <sdCards title="Simply beautiful open source icons">
              <FeatherIcon />
            </sdCards>
          </IconWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import FeatherIcon from "../../components/icons/FeatherIcon";
import { IconWrapper } from "./IconStyled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeatherIcons",
  components: {
    Main,
    FeatherIcon,
    IconWrapper,
  },
});
</script>
