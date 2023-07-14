<template>
  <div>
    <sdPageHeader title="Changelog" class="ninjadash-page-header-main" :routes="pageRoutes"></sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xxl="19" :md="16" :xs="24">
          <ChangelogWrapper>
            <sdCards>
              <template #title>
                <span class="v-num">Version {{ versions[0].version }} </span>
                <span class="sign"> - </span>
                <span class="rl-date">{{ versions[0].date }}</span>
              </template>
              <div class="changelog-featured">
                <div class="version-list">
                  <div class="version-list__single" v-if="versions[0].new">
                    <div class="version-list__top">
                      <span class="badge badge-lg badge-success">New</span>
                    </div>
                    <ul class="version-success">
                      <li v-for="(item, index) in versions[0].new" :key="index + 1">
                        {{ item }}
                      </li>
                    </ul>
                  </div>

                  <div class="version-list__single" v-if="versions[0].fixed">
                    <div class="version-list__top">
                      <span class="badge badge-lg badge-info">Fixed</span>
                    </div>
                    <ul class="version-info">
                      <li v-for="(item, index) in versions[0].fixed" :key="index + 1">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div class="version-list__single" v-if="versions[0].updated">
                    <div class="version-list__top">
                      <span class="badge badge-lg badge-primary">Updated</span>
                    </div>
                    <ul class="version-primary">
                      <li v-for="(item, index) in versions[0].updated" :key="index + 1">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="changelog-accordion">
                <a-collapse accordion>
                  <a-collapse-panel v-for="(version, index) in versionData" :key="index + 1">
                    <template #header>
                      <span class="v-num">Version {{ version.version }} </span>
                      <span class="sign">-</span>
                      <span class="rl-date">{{ version.date }}</span>
                    </template>

                    <div class="version-list">
                      <div class="version-list__single" v-if="version.new">
                        <div class="version-list__top">
                          <span class="badge badge-lg badge-success">New</span>
                        </div>
                        <ul class="version-success">
                          <li v-for="(item, index) in version.new" :key="index + 1">
                            {{ item }}
                          </li>
                        </ul>
                      </div>

                      <div class="version-list__single" v-if="version.fixed">
                        <div class="version-list__top">
                          <span class="badge badge-lg badge-info">Fixed</span>
                        </div>
                        <ul class="version-info">
                          <li v-for="(item, index) in version.fixed" :key="index + 1">
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                      <div class="version-list__single" v-if="version.updated">
                        <div class="version-list__top">
                          <span class="badge badge-lg badge-primary">Updated</span>
                        </div>
                        <ul class="version-primary">
                          <li v-for="(item, index) in version.updated" :key="index + 1">
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a-collapse-panel>
                </a-collapse>
              </div>
            </sdCards>
          </ChangelogWrapper>
        </a-col>
        <a-col :xxl="5" :md="8" :xs="24">
          <VersionHistoryList>
            <sdCards title="CHANGELOG">
              <h4 class="history-title">VERSION HISTORY</h4>
              <ul class="v-history-list">
                <li v-for="version in versions" :key="version.id">
                  <span class="version-name">Version {{ version.version }}</span>
                  <span class="version-date">{{ version.date }}</span>
                </li>
              </ul>
            </sdCards>
          </VersionHistoryList>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { ChangelogWrapper, VersionHistoryList } from './style';
import versions from '../../demoData/changelog.json';

const versionData = versions.slice(1);

const pageRoutes = [
  {
    path: '#',
    breadcrumbName: 'Pages',
  },
  {
    path: 'changelog',
    breadcrumbName: 'Changelog',
  },
];
</script>
