<script setup lang="ts">
import { ProjectDetailsWrapper, TaskLists } from './style';
import FileListCard from './overview/FileListCard.vue';
import { Main } from '../../styled';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { state, dispatch } = useStore();
const project = computed(() => state.project.singleData);
const { params, matched } = useRoute();

const id = Array.isArray(params.id) ? params.id.join('') : params.id;
onMounted(() => dispatch('filterSinglePage', parseInt(id, 10)));
</script>

<template>
  <ProjectDetailsWrapper>
    <sdPageHeader v-if="project" :routes="[]" class="ninjadash-page-header-main">
      <template #title>
        <div key="1" class="project-header">
          <sdHeading as="h2">{{ project[0].title }}</sdHeading>
          <sdButton type="primary" size="sm"> <unicon name="plus" width="14"></unicon> <span>Add Task</span> </sdButton>
          <sdButton class="btn-markComplete" :outlined="true" type="light" size="sm">
            <unicon name="check" width="14"></unicon>
            <span>Mark as Complete</span>
          </sdButton>
        </div></template
      >
      <template #buttons>
        <div :key="1" class="project-action">
          <a :key="1" to="#" class="project-edit">
            <unicon name="edit-alt" width="14"></unicon>
            Edit
          </a>
          <a :key="2" to="#" class="project-remove">
            <unicon name="trash-alt" width="14"></unicon>
            Remove
          </a>
        </div>
      </template>
    </sdPageHeader>
    <Main>
      <div v-if="!project" class="spin">
        <a-spin />
      </div>
      <a-row v-else :gutter="25">
        <a-col :xxl="6" :xl="8" :md="24" :xs="24">
          <div class="project-progress">
            <h3>Progress</h3>
            <a-progress :percent="65" :stroke-width="5" status="active" />
          </div>
          <sdCards headless>
            <div class="state-single">
              <div class="color-primary">
                <a to="#">
                  <unicon name="list-ul" width="25"></unicon>
                </a>
              </div>
              <div>
                <sdHeading as="h5">47</sdHeading>
                <p>Total Task</p>
              </div>
            </div>
            <div class="state-single">
              <div class="color-secondary">
                <a to="#">
                  <unicon name="chart-pie" width="25"></unicon>
                </a>
              </div>
              <div>
                <sdHeading as="h5">34</sdHeading>
                <p>Task Completed</p>
              </div>
            </div>
            <div class="state-single">
              <div class="color-success">
                <a to="#">
                  <unicon name="apps" width="25"></unicon>
                </a>
              </div>
              <div>
                <sdHeading as="h5">$27,500</sdHeading>
                <p>Spendings</p>
              </div>
            </div>
            <div class="state-single">
              <div class="color-warning">
                <a to="#">
                  <unicon name="clock" width="25"></unicon>
                </a>
              </div>
              <div>
                <sdHeading as="h5">250</sdHeading>
                <p>Hours Spent</p>
              </div>
            </div>
          </sdCards>
        </a-col>
        <a-col :xxl="12" :xl="16" :md="24" :xs="24">
          <div class="about-project-wrapper">
            <sdCards title="About Project">
              <div class="about-content">
                <p>{{ project[0].content }}</p>
              </div>
              <div class="about-project">
                <div>
                  <span>Project Owner</span>
                  <p>Peter Jackson</p>
                </div>
                <div>
                  <span>Budget</span>
                  <p>$56,700</p>
                </div>
                <div>
                  <span>Start Date</span>
                  <p class="color-primary">28 Dec 2019</p>
                </div>
                <div>
                  <span>Deadline</span>
                  <p class="color-danger">18 Mar 2021</p>
                </div>
              </div>
            </sdCards>
          </div>
        </a-col>
        <a-col :xxl="6" :lg="9" :xs="24">
          <div class="project-users-wrapper">
            <sdCards title="Users">
              <template #button>
                <sdButton :outlined="true" type="light" size="sm">
                  <unicon name="user-plus" width="14"></unicon>
                  <span>Add Users</span>
                </sdButton>
              </template>
              <div class="project-users">
                <div class="porject-user-single">
                  <div>
                    <img :src="`/src/assets/img/users/1.png`" alt="" />
                  </div>
                  <div>
                    <sdHeading as="h5">Meyri Carles</sdHeading>
                    <p>Web Developer</p>
                  </div>
                </div>
                <div class="porject-user-single">
                  <div>
                    <img :src="`/src/assets/img/users/3.png`" alt="" />
                  </div>
                  <div>
                    <sdHeading as="h5">Tuhin Molla</sdHeading>
                    <p>Project Manager</p>
                  </div>
                </div>
                <div class="porject-user-single">
                  <div>
                    <img :src="`/src/assets/img/users/9.jpg`" alt="" />
                  </div>
                  <div>
                    <sdHeading as="h5">Billal Hossain</sdHeading>
                    <p>App Developer</p>
                  </div>
                </div>
                <div class="porject-user-single">
                  <div>
                    <img :src="`/src/assets/img/users/4.png`" alt="" />
                  </div>
                  <div>
                    <sdHeading as="h5">Khalid Hasan</sdHeading>
                    <p>App Developer</p>
                  </div>
                </div>
                <div class="porject-user-single">
                  <div>
                    <img :src="`/src/assets/img/users/5.png`" alt="" />
                  </div>
                  <div>
                    <sdHeading as="h5">Meyri Carles</sdHeading>
                    <p>Ui Designer</p>
                  </div>
                </div>
              </div>
            </sdCards>
          </div>
        </a-col>
        <a-col :xxl="16" :lg="15" :xs="24">
          <TaskLists>
            <sdCards>
              <template #title>
                <nav>
                  <router-link :to="`${matched[1].path.split('/:')[0]}/${params.id}/tasklist`">Task List</router-link>
                  &nbsp; &nbsp;
                  <router-link :to="`${matched[1].path.split('/:')[0]}/${params.id}/activities`"
                    >Activities</router-link
                  >
                </nav>
              </template>
              <router-view name="child"></router-view>
            </sdCards>
          </TaskLists>
        </a-col>
        <a-col :xxl="8" :xs="24">
          <FileListCard />
        </a-col>
      </a-row>
    </Main>
  </ProjectDetailsWrapper>
</template>
