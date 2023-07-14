<template>
  <UserTableStyleWrapper>
    <TableWrapper class="table-responsive">
      <a-table
        :rowSelection="rowSelection"
        :dataSource="usersTableData"
        :columns="usersTableColumns"
        :pagination="{
          defaultPageSize: 5,
          total: usersTableData.length,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }"
      />
    </TableWrapper>
  </UserTableStyleWrapper>
</template>
<script>
import { UserTableStyleWrapper } from "../style";
import { TableWrapper } from "../../../styled";
import users from "@/demoData/usersData.json";
import { computed, defineComponent } from "vue";
const usersTableColumns = [
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Join Date",
    dataIndex: "joinDate",
    key: "joinDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    width: "90px",
  },
];
const UserListTable = defineComponent({
  name: "UserListTable",
  components: { UserTableStyleWrapper, TableWrapper },
  setup() {
    const usersTableData = computed(() =>
      users.map((user) => {
        const { id, name, designation, img, status } = user;

        return {
          key: id,
          user: (
            <div class="user-info">
              <figure>
                <img
                  style={{ width: "40px" }}
                  src={require(`@/${img}`)}
                  alt=""
                />
              </figure>
              <figcaption>
                <sdHeading class="user-name" as="h6">
                  {name}
                </sdHeading>
                <span class="user-designation">San Francisco, CA</span>
              </figcaption>
            </div>
          ),
          email: "john@gmail.com",
          company: "Business Development",
          position: designation,
          joinDate: "January 20, 2021",
          status: <span class={`status-text ${status}`}>{status}</span>,
          action: (
            <div class="table-actions">
              <>
                <sdButton class="btn-icon" type="default" to="#" shape="circle">
                  <unicon name="eye" width="16"></unicon>
                </sdButton>
                <sdButton class="btn-icon" type="default" to="#" shape="circle">
                  <unicon name="edit" width="16"></unicon>
                </sdButton>
                <sdButton class="btn-icon" type="default" to="#" shape="circle">
                  <unicon name="trash-alt" width="16"></unicon>
                </sdButton>
              </>
            </div>
          ),
        };
      })
    );

    const rowSelection = {
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
      }),
    };

    return { usersTableColumns, usersTableData, rowSelection };
  },
});

export default UserListTable;
</script>
