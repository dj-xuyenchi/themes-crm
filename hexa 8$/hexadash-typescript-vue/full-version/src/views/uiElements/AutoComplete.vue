<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Auto Complete"> </sdPageHeader>
    <Main>
      <AutoCompleteWrapper>
        <a-row :gutter="25">
          <a-col :md="12" :sm="24" :xs="24">
            <sdCards title="Basic Usage">
              <div class="auto-complete-input">
                <sdAutoComplete :dataSource="searchData" @onSearch="onSearch" />
                <sdAutoComplete :dataSource="searchData" @onSearch="onSearch" />
              </div>
            </sdCards>
            <sdCards title="Customize Input Component">
              <div class="auto-complete-input">
                <sdAutoComplete customComponent :dataSource="searchData" @onSearch="onSearch">
                  <a-textarea placeholder="input here" class="custom" :style="{ height: 50 }" />
                </sdAutoComplete>
              </div>
            </sdCards>
            <sdCards title="Lookup-Patterns - Certain Category">
              <sdAutoComplete @onSearch="patternSearch" :dataSource="searchData" width="100%" patterns />
            </sdCards>
          </a-col>
          <a-col :md="12" :sm="24" :xs="24">
            <div class="auto-complete-input">
              <sdCards title="Customize">
                <sdAutoComplete :dataSource="searchData" @onSearch="onSearch" />
              </sdCards>
            </div>

            <sdCards title="Lookup-Patterns - Uncertain Category">
              <div class="autocomplete-with-btn">
                <sdAutoComplete
                  :dataSource="searchData"
                  @onSearch="patternSearch"
                  width="100%"
                  patterns
                  patternButtons
                />
              </div>
            </sdCards>
          </a-col>
        </a-row>
      </AutoCompleteWrapper>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main, AutoCompleteWrapper } from '../styled';
import { ref } from 'vue';

const searchData = ref([
  {
    id: 1,
    title: 'AntDesign',
    count: 10000,
  },
  {
    id: 2,
    title: 'Design UI',
    count: 10600,
  },

  {
    id: 3,
    title: 'Bootstrap Design UI',
    count: 60100,
  },
  {
    id: 4,
    title: 'Meterial design',
    count: 30010,
  },

  {
    id: 5,
    title: 'AntDesign design language',
    count: 100000,
  },
]);
const onSearch = (searchText: any) => {
  console.log(searchText);
};

const patternSearch = (searchText: any) => {
  const data = searchData.value.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
  console.log(data);
};
</script>
