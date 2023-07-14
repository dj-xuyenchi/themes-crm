<template>
  <CardToolbox>
    <ContactPageheaderStyle>
      <sdPageHeader title="Contacts" :routes="[]">
        <template #subTitle>
          <a-input
            v-model:value="searchValue"
            @change="handleSearch"
            placeholder="Search by Name"
          >
            <template #suffix>
              <unicon name="search" width="16"></unicon>
            </template>
          </a-input>
        </template>
        <template #buttons>
          <sdButton
            @click="showModal"
            class="btn-add_new"
            size="default"
            type="primary"
            key="1"
          >
            <a to="#">+ Add New</a>
          </sdButton>
        </template>
      </sdPageHeader>
    </ContactPageheaderStyle>
  </CardToolbox>

  <Main>
    <a-row :gutter="25">
      <a-col :md="24">
        <sdCards headless>
          <UserTableStyleWrapper>
            <div class="contact-table">
              <TableWrapper class="table-responsive">
                <a-table
                  :rowSelection="rowSelection"
                  :dataSource="usersTableData"
                  :columns="usersTableColumns"
                  :pagination="{
                    defaultPageSize: 7,
                    total: usersTableData.length,
                    showTotal: (total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`,
                  }"
                />
              </TableWrapper>
            </div>
          </UserTableStyleWrapper>
        </sdCards>
      </a-col>
      <sdModal
        :type="localState.modalType"
        title="Contact Information"
        :visible="localState.visible"
        :footer="null"
        :onCancel="handleCancel"
      >
        <div class="project-modal create-contact-modal">
          <AddUser>
            <BasicFormWrapper>
              <a-form
                name="contact"
                :rules="rules"
                :model="addFormState"
                @finish="handleOk"
                :layout="addFormState.layout"
              >
                <a-form-item label="Name" name="name">
                  <a-input
                    v-model:value="addFormState.name"
                    placeholder="Input Name"
                  />
                </a-form-item>

                <a-form-item label="Email Address" name="email">
                  <a-input
                    v-model:value="addFormState.email"
                    placeholder="name@example.com"
                  />
                </a-form-item>
                <a-form-item name="phone" label="Phone Number">
                  <a-input
                    v-model:value="addFormState.phone"
                    placeholder="+440 2546 5236"
                  />
                </a-form-item>

                <a-form-item name="designation" label="Position">
                  <a-input
                    v-model:value="addFormState.designation"
                    placeholder="Input Position"
                  />
                </a-form-item>

                <a-form-item name="company" label="Company Name">
                  <a-input
                    v-model:value="addFormState.company"
                    placeholder="Company Name"
                  />
                </a-form-item>

                <sdButton
                  htmlType="submit"
                  size="lg"
                  type="primary"
                  key="submit"
                >
                  Add New Contact
                </sdButton>
              </a-form>
            </BasicFormWrapper>
          </AddUser>
        </div>
      </sdModal>
      <sdModal
        :type="localState.modalType"
        title="Contact Edit"
        :visible="localState.editVisible"
        :footer="null"
        :onCancel="handleCancel"
      >
        <div class="project-modal create-contact-modal">
          <AddUser>
            <BasicFormWrapper>
              <a-form
                name="contactEdit"
                :rules="rules"
                :model="editFormState"
                @finish="handleEditOk"
                :layout="editFormState.layout"
              >
                <a-form-item label="Name" name="name">
                  <a-input
                    v-model:value="editFormState.name"
                    placeholder="Input Name"
                  />
                </a-form-item>

                <a-form-item label="Email Address" name="email">
                  <a-input
                    v-model:value="editFormState.email"
                    placeholder="name@example.com"
                  />
                </a-form-item>
                <a-form-item name="phone" label="Phone Number">
                  <a-input
                    v-model:value="editFormState.phone"
                    placeholder="+440 2546 5236"
                  />
                </a-form-item>

                <a-form-item name="designation" label="Position">
                  <a-input
                    v-model:value="editFormState.designation"
                    placeholder="Input Position"
                  />
                </a-form-item>

                <a-form-item name="company" label="Company Name">
                  <a-input
                    v-model:value="editFormState.company"
                    placeholder="Company Name"
                  />
                </a-form-item>

                <sdButton
                  htmlType="submit"
                  size="lg"
                  type="primary"
                  key="submit"
                >
                  Update Contact
                </sdButton>
              </a-form>
            </BasicFormWrapper>
          </AddUser>
        </div>
      </sdModal>
    </a-row>
  </Main>
</template>
<script>
import { ContactPageheaderStyle, Action, UserTableStyleWrapper } from "./style";
import ContactCard from "./overview/ContactCard";
import {
  Main,
  CardToolbox,
  BasicFormWrapper,
  TableWrapper,
} from "../../styled";
import { AddUser } from "../../pages/style";
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";

const ContactGrid = {
  name: "ContactGrid",
  components: {
    Main,
    CardToolbox,
    BasicFormWrapper,
    AddUser,
    TableWrapper,
    UserTableStyleWrapper,
    ContactPageheaderStyle,
    ContactCard,
    Action,
  },
  setup() {
    const { state, dispatch } = useStore();
    const users = computed(() => state.contact.data);
    const addFormState = reactive({
      name: "",
      email: "",
      phone: "",
      designation: "",
      company: "",
      layout: "vertical",
    });

    const editFormState = reactive({
      name: "",
      email: "",
      phone: "",
      designation: "",
      company: "",
      time: "",
      img: "",
      stared: "",
      layout: "vertical",
    });

    const rules = {
      email: [
        {
          type: "email",
          message: "Please input a valid email!",
          trigger: "blur",
        },
      ],
    };

    const localState = reactive({
      selectedRowKeys: 0,
      selectedRows: 0,
      visible: true,
      editVisible: false,
      modalType: "primary",
      url: null,
    });
    const searchValue = ref("");

    const handleSearch = () => {
      dispatch("contactSearchData", searchValue.value);
    };
    const showModal = () => {
      localState.visible = true;
    };

    const showEditModal = (data) => {
      localState.editVisible = true;
      editFormState.name = data.name;
      editFormState.id = data.id;
      editFormState.email = data.email;
      editFormState.phone = data.phone;
      editFormState.designation = data.designation;
      editFormState.company = data.company;
      editFormState.time = data.time;
      editFormState.img = data.img;
    };

    const onCancel = () => {
      localState.visible = false;
      localState.editVisible = false;
      localState.update = {};
    };

    const handleOk = (values) => {
      onCancel();
      const arrayData = [];
      users.value.map((data) => {
        return arrayData.push(data.id);
      });
      const max = Math.max(...arrayData);
      dispatch("contactAddData", [
        ...users.value,
        {
          ...values,
          id: max + 1,
          time: new Date().getTime(),
          img: "static/img/users/6.png",
          live: false,
          stared: false,
        },
      ]);
    };

    const handleEditOk = (values) => {
      const updateUsers = users.value;

      updateUsers.map((item) => {
        if (item.id === editFormState.id) {
          const updateUser = item;
          updateUser.id = editFormState.id;
          updateUser.name = values.name;
          updateUser.email = values.email;
          updateUser.phone = values.phone;
          updateUser.designation = values.designation;
          updateUser.company = values.company;
          updateUser.time = editFormState.time;
          updateUser.img = editFormState.img;
          updateUser.stared = editFormState.stared;
        }
        return true;
      });
      dispatch("contactAddData", updateUsers);
      onCancel();
    };

    const handleCancel = () => {
      onCancel();
    };

    const onHandleDelete = (id) => {
      const value = users.value.filter((item) => item.id !== id);
      dispatch("contactDeleteData", value);
    };

    const usersTableData = computed(() =>
      state.contact.data
        .sort((a, b) => {
          return b.time - a.time;
        })
        .map((user) => {
          const { id, name, designation, img, stared, email, phone, company } =
            user;

          return {
            key: id,
            user: (
              <div class="user-info">
                <figure>
                  <img
                    style={{ width: "40px" }}
                    src={require(`../../../${img}`)}
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
            email,
            company,
            position: designation,
            phone,
            action: (
              <Action class="table-actions">
                <sdButton
                  onClick={() =>
                    dispatch("onStarUpdate", { data: users.value, id })
                  }
                  class="btn-icon"
                  type="primary"
                  to="#"
                  shape="circle"
                >
                  <unicon
                    class={stared ? "active" : "deactivate"}
                    name="star"
                    width={16}
                  />
                </sdButton>
                <sdDropdown
                  class="wide-dropdwon"
                  overlay={
                    <>
                      <a onClick={() => showEditModal(user, id)} to="#">
                        <span>Edit</span>
                      </a>
                      <a onClick={() => onHandleDelete(id)} to="#">
                        <span>Delete</span>
                      </a>
                    </>
                  }
                  action={["click"]}
                >
                  <sdButton class="btn-icon" type="info" to="#" shape="circle">
                    <unicon name="ellipsis-v" width="16"></unicon>
                  </sdButton>
                </sdDropdown>
              </Action>
            ),
          };
        })
    );

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
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "",
        dataIndex: "action",
        key: "action",
        width: "90px",
      },
    ];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        selectedRowKeys.value = selectedRowKeys;
        selectedRows.value = selectedRows;
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
      }),
    };

    return {
      rowSelection,
      usersTableColumns,
      usersTableData,
      handleCancel,
      handleEditOk,
      handleOk,
      onCancel,
      showEditModal,
      showModal,
      handleSearch,
      localState,
      users,
      searchValue,
      addFormState,
      rules,
      editFormState,
    };
  },
};

export default ContactGrid;
</script>
