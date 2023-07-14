<template>
  <div>
    <sdPageHeader title="Antd Icons" class="ninjadash-page-header-main">

    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <IconWrapper>
            <sdCards title="Simply beautiful open source icons">
              <AntdIcon />
            </sdCards>
          </IconWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import AntdIcon from "../../components/icons/AntdIcons";
import { IconWrapper } from "./IconStyled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AntdIcons",
  components: {
    Main,
    AntdIcon,
    IconWrapper,
  },
});
</script>
