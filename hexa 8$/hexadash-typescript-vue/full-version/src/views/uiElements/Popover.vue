<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Popover"> </sdPageHeader>
    <DropdownStyle>
      <Main>
        <a-row :gutter="25">
          <a-col :md="12" :xs="24">
            <sdCards title="Basic Popover">
              <sdPopover placement="bottomLeft">
                <a to="#">Hover me</a>
              </sdPopover>
            </sdCards>
            <sdCards title="Event menu">
              <sdPopover action="hover" placement="bottomLeft">
                <sdButton type="primary" size="sm">hover </sdButton>
              </sdPopover>
              <sdPopover action="click" placement="bottom">
                <sdButton type="primary" size="sm">click </sdButton>
              </sdPopover>
            </sdCards>
          </a-col>
          <a-col :md="12" :xs="24">
            <sdCards title="Placement">
              <sdPopover placement="bottomLeft">
                <sdButton size="sm" type="primary"> Bottom Left </sdButton>
              </sdPopover>
              <sdPopover placement="bottom">
                <sdButton size="sm" type="primary"> Bottom Center </sdButton>
              </sdPopover>
              <sdPopover placement="bottomRight">
                <sdButton size="sm" type="primary"> Bottom Right </sdButton>
              </sdPopover>
              <br />
              <sdPopover placement="topLeft">
                <sdButton size="sm" type="primary"> Top Left </sdButton>
              </sdPopover>
              <sdPopover placement="top">
                <sdButton size="sm" type="primary"> Top Center </sdButton>
              </sdPopover>
              <sdPopover placement="topRight">
                <sdButton size="sm" type="primary"> Top Right </sdButton>
              </sdPopover>
            </sdCards>
          </a-col>
        </a-row>
      </Main>
    </DropdownStyle>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { DropdownStyle } from './ui-elements-styled';

const handleButtonClick = () => {
  // this.$message.info("Click on left button.");
};
</script>
