<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Steps">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards title="Basic Step">
            <basic
              size="small"
              :title="['Finished', 'In Progress', 'Waiting']"
              :current="1"
            />
          </sdCards>
          <sdCards title="With Icon Step">
            <basic step="withIcon" size="small" :data="data" />
          </sdCards>
          <sdCards title="Switch Step">
            <basic step="switch" size="small" :data="steps" />
          </sdCards>
          <sdCards title="Vertical Step">
            <basic
              step="direction"
              direction="vertical"
              size="small"
              :data="dataDescription"
              :current="2"
            />
          </sdCards>
          <sdCards title="Error Status Step">
            <basic
              status="error"
              step="direction"
              direction="horizontal"
              size="small"
              :data="dataDescription"
              :current="1"
            />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import Basic from "../../components/steps/Basic";
import stepsData from "../../demoData/step-data.json";
import { defineComponent } from "vue";

const { data, steps, dataDescription } = stepsData;

export default defineComponent({
  name: "Steps",
  components: {
    Main,
    Basic,
  },
  setup() {
    return {
      data,
      dataDescription,
      steps,
    };
  },
});
</script>
