<template>
  <sdPageHeader class="ninjadash-page-header-main" title="Drag & Drop">
  </sdPageHeader>
  <Main>
    <a-row :gutter="15">
      <a-col :xs="24">
        <DragAndDropTable />
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { Main } from "../styled";
import DragAndDropTable from "../table/DragTable";
import { defineComponent } from "vue";

const UserListDataTable = defineComponent({
  name: "UserListDataTable",
  components: { Main, DragAndDropTable },
});

export default UserListDataTable;
</script>
