<template>
  <a-row :gutter="25">
    <a-col :xs="24">
      <ProjectList>
        <div class="table-responsive">
          <a-table
            :pagination="false"
            :dataSource="dataSource"
            :columns="columns"
          />
        </div>
      </ProjectList>
    </a-col>
    <a-col :xs="24" class="pb-30">
      <ProjectPagination v-if="projects.length">
        <a-pagination
          @change="onHandleChange"
          showSizeChanger
          @showSizeChange="onShowSizeChange"
          :pageSize="10"
          :defaultCurrent="1"
          :total="40"
        />
      </ProjectPagination>
    </a-col>
  </a-row>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import {
  ProjectPagination,
  ProjectListTitle,
  ProjectListAssignees,
  ProjectList,
} from "../style";

const columns = [
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Deadline",
    dataIndex: "deadline",
    key: "deadline",
  },
  {
    title: "Assigned To",
    dataIndex: "assigned",
    key: "assigned",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Completion",
    dataIndex: "completion",
    key: "completion",
  },

  {
    title: "",
    dataIndex: "action",
    key: "action",
  },
];

const ProjectLists = {
  name: "ProjectLists",
  components: {
    ProjectPagination,
    ProjectListTitle,
    ProjectListAssignees,
    ProjectList,
  },
  setup() {
    const { state } = useStore();
    const projects = computed(() => state.project.data);
    const current = ref(0);
    const pageSize = ref(0);

    const onShowSizeChange = (c, p) => {
      current.value = c;
      pageSize.value = p;
    };

    const onHandleChange = (c, p) => {
      current.value = c;
      pageSize.value = p;
    };

    const dataSource = computed(
      () =>
        projects.value.length &&
        projects.value.map((value) => {
          const { id, title, status, category, percentage } = value;
          return {
            key: id,
            project: (
              <ProjectListTitle>
                <sdHeading as="h4">
                  <router-link to={`/app/project/projectDetails/${id}`}>
                    {title}
                  </router-link>
                </sdHeading>
                <p>{category}</p>
              </ProjectListTitle>
            ),
            startDate: <span class="date-started">26 Dec 2019</span>,
            deadline: <span class="date-finished">18 Mar 2021</span>,
            assigned: (
              <ProjectListAssignees>
                <ul>
                  <li>
                    <img src={require(`@/static/img/users/1.png`)} alt="" />
                  </li>
                  <li>
                    <img src={require(`@/static/img/users/2.png`)} alt="" />
                  </li>
                  <li>
                    <img src={require(`@/static/img/users/3.png`)} alt="" />
                  </li>
                  <li>
                    <img src={require(`@/static/img/users/4.png`)} alt="" />
                  </li>
                  <li>
                    <img src={require(`@/static/img/users/5.png`)} alt="" />
                  </li>
                  <li>
                    <img src={require(`@/static/img/users/6.png`)} alt="" />
                  </li>
                  <li>
                    <img src={require(`@/static/img/users/7.png`)} alt="" />
                  </li>
                </ul>
              </ProjectListAssignees>
            ),
            status: <a-tag class={status}>{status}</a-tag>,
            completion: (
              <div class="project-list-progress">
                <a-progress
                  percent={status === "complete" ? 100 : percentage}
                  strokeWidth={5}
                  class="progress-primary"
                />
                <p>12/15 Task Completed</p>
              </div>
            ),
            action: (
              <sdDropdown
                class="wide-dropdwon"
                overlay={
                  <>
                    <a to="#">View</a>
                    <a to="#">Edit</a>
                    <a to="#">Delete</a>
                  </>
                }
              >
                <a to="#" class="project-action">
                  <unicon name="ellipsis-h" width="18"></unicon>
                </a>
              </sdDropdown>
            ),
          };
        })
    );
    return {
      dataSource,
      onHandleChange,
      onShowSizeChange,
      columns,
      projects,
    };
  },
};

export default ProjectLists;
</script>
