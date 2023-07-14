<template>
  <sdPageHeader
    title="Support Ticket"
    :routes="pageRoutes"
    class="ninjadash-page-header-main"
  ></sdPageHeader>

  <Main>
    <TicketBox>
      <a-row :gutter="30">
        <OverviewDataList />
        <a-col :md="24">
          <sdCards headless>
            <div class="header">
              <sdHeading as="h4">All Support Ticket</sdHeading>
              <sdButton @click="showModal" type="primary">
                <unicon name="plus"></unicon> Add Ticket
              </sdButton>
            </div>
            <div class="filter-zone">
              <div class="left">
                <div class="filterInput">
                  <span class="label">Id:</span>
                  <a-input
                    @change="handleIdSearch"
                    :style="{ width: '200px' }"
                    placeholder="Search with Id"
                  />
                </div>
                <div class="filterInput">
                  <span class="label">Status:</span>
                  <a-select
                    @change="handleStatusSearch"
                    :style="{ width: '200px' }"
                    defaultValue=""
                  >
                    <a-select-option value="">All</a-select-option>
                    <a-select-option value="open">Open</a-select-option>
                    <a-select-option value="pending">Pending</a-select-option>
                    <a-select-option value="close">Close</a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="right">
                <a-input
                  @change="handleSubjectSearch"
                  placeholder="Search"
                  :prefix="prefix"
                />
              </div>
            </div>
            <div>
              <TableWrapper class="table-data-view table-responsive">
                <a-table
                  :pagination="{ pageSize: 10, showSizeChanger: true }"
                  :dataSource="dataSource"
                  :columns="columns"
                />
              </TableWrapper>
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </TicketBox>
  </Main>
  <SupportCreate
    @onCancel="onCancel"
    @handleSubmit="handleSubmit"
    :visible="visible"
  />
  <SupportEdit
    @onCancel="onCancel"
    @handleSubmit="handleSubmit"
    :visible="visible"
  />
</template>
<script>
import { Main, TableWrapper } from "../../styled";
import { TicketBox } from "./Style";
import { useStore } from "vuex";
import {
  defineComponent,
  onMounted,
  computed,
  ref,
  defineAsyncComponent,
} from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import SupportCreate from "./SupportCreate.vue";
import SupportEdit from "./SupportEdit.vue";
import { idGenerator } from "../../../utility/utility";
import dayjs from "dayjs";
const OverviewDataList = defineAsyncComponent(() =>
  import("./overview/OverviewDataList.vue")
);

const pageRoutes = [
  {
    path: "index",
    breadcrumbName: "Dashboard",
  },
  {
    path: "app",
    breadcrumbName: "Apps",
  },
  {
    path: "first",
    breadcrumbName: "Tickets",
  },
];
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Requested By",
    dataIndex: "requested",
    key: "requested",
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created Date",
    dataIndex: "createAt",
    key: "createAt",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    width: "90px",
  },
];
const prefix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const SupportTicket = defineComponent({
  name: "SupportTicket",
  components: {
    Main,
    TicketBox,
    TableWrapper,
    SupportCreate,
    SupportEdit,
    OverviewDataList,
  },
  setup() {
    const { state, dispatch } = useStore();
    const visible = ref(false);

    const dataSource = computed(() =>
      state.tickets.data.map((item) => {
        const { id, user, status, subject, priority, createAt } = item;

        return {
          key: id,
          id: `#${id}`,
          requested: (
            <div class="requestedBy">
              <img src={require(`@/${user.img}`)} alt="" />
              <p>{user.name}</p>
            </div>
          ),
          status: (
            <span
              class={`ninjadash-support-status ninjadash-support-status-${status}`}
            >
              {status}
            </span>
          ),
          subject,
          priority,
          createAt,
          action: (
            <div class="table-actions">
              <router-link class="view" to={`/app/support/ticketDetails/${id}`}>
                <unicon name="eye" width="14"></unicon>
              </router-link>
              <router-link class="edit" to="#" onClick={showModal}>
                <unicon name="edit" width="14"></unicon>
              </router-link>
              <a-popconfirm
                title="Are you sure to delete this task?"
                onConfirm={(e) => confirm(id, e)}
                // onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <router-link class="delete" to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                </router-link>
              </a-popconfirm>
            </div>
          ),
        };
      })
    );

    const dataState = computed(() => state.tickets.data);

    onMounted(() => {
      dispatch("ticketReadData");
    });

    const handleIdSearch = (e) => {
      const value = e.currentTarget.value;

      dispatch("ticketUpdateSearch", {
        value,
        key: "id",
      });
    };

    const handleStatusSearch = (value) => {
      dispatch("ticketUpdateSearch", {
        value,
        key: "status",
      });
    };

    const handleSubjectSearch = (e) => {
      const { value } = e.currentTarget;
      dispatch("ticketUpdateSearch", {
        value,
        key: "subject",
      });
    };

    const onCancel = () => {
      visible.value = false;
    };

    const showModal = () => {
      visible.value = true;
    };

    const handleSubmit = (values) => {
      const id = idGenerator(dataState.value, 2);
      dispatch(
        "ticketUpdateData",
        dataState.value.concat({
          ...values,
          user: {
            name: "Kellie Marquot",
            img: "static/img/avatar/profileImage.png",
            conversations: [],
          },
          createAt: dayjs().format("MM-DD-yyyy"),
          id,
        })
      );
      visible.value = false;
    };

    return {
      pageRoutes,
      prefix,
      columns,
      dataSource,
      handleIdSearch,
      handleStatusSearch,
      handleSubjectSearch,
      visible,
      onCancel,
      showModal,
      handleSubmit,
    };
  },
});

export default SupportTicket;
</script>
