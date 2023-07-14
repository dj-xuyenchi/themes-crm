<template>
  <div>
    <sdPageHeader title="Form Layout" class="ninjadash-page-header-main">

    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :lg="12" :xs="24">
          <HorizontalForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <HorizontalIconForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <VerticalForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <VerticalIconForm />
        </a-col>
        <a-col :xs="24">
          <MultiColumnForm />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import HorizontalForm from "./overview/HorizontalForm";
import HorizontalIconForm from "./overview/HorizontalIconForm";
import VerticalForm from "./overview/VerticalForm";
import VerticalIconForm from "./overview/VerticalIconForm";
import MultiColumnForm from "./overview/MultiColumnForm";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Form",
  components: {
    Main,
    HorizontalForm,
    HorizontalIconForm,
    VerticalForm,
    VerticalIconForm,
    MultiColumnForm,
  },
});
</script>
