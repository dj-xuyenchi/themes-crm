<template>
  <div>
    <sdPageHeader title="FontAwesome Icons" class="ninjadash-page-header-main">

    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <IconWrapper>
            <sdCards title="Simply beautiful open source icons">
              <FontAwesomeIcon />
            </sdCards>
          </IconWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import FontAwesomeIcon from "../../components/icons/FaIcons";
import { IconWrapper } from "./IconStyled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FontAwesome",
  components: {
    Main,
    FontAwesomeIcon,
    IconWrapper,
  },
});
</script>
