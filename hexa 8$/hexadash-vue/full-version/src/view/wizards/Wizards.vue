<template>
  <sdPageHeader title="Wizards" class="ninjadash-page-header-main">
  </sdPageHeader>
  <Main>
    <a-row :gutter="25">
      <a-col :sm="24" :xs="24">
        <WizardBlock>
          <sdCards headless>
            <a-row justify="center">
              <a-col :xxl="20" :xs="24"
                ><router-view name="child"></router-view>
              </a-col>
            </a-row>
          </sdCards>
        </WizardBlock>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { WizardBlock } from "./Style";
import { Main } from "../styled";

// const WizardsOne = lazy(() => import('./overview/WizardsOne'));
// const WizardsTwo = lazy(() => import('./overview/WizardsTwo'));
// const WizardsThree = lazy(() => import('./overview/WizardsThree'));
// const WizardsFour = lazy(() => import('./overview/WizardsFour'));
// const WizardsFive = lazy(() => import('./overview/WizardsFive'));
// const WizardsSix = lazy(() => import('./overview/WizardsSix'));

const Wizards = {
  name: "Wizards",
  components: { WizardBlock, Main },
};

export default Wizards;
</script>
