<template>
  <CardToolbox>
    <ContactPageheaderStyle>
      <sdPageHeader
        title="Contacts"
        class="ninjadash-page-header-main"
        :routes="[]"
      >
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
      <a-col
        v-for="user in users"
        :key="user.id"
        :lg="6"
        :md="8"
        :sm="12"
        :xs="24"
      >
        <sdCards headless>
          <ContactCard :showEditModal="showEditModal" :user="user" />
        </sdCards>
      </a-col>
      <sdModal
        :type="localState.modalType"
        title="Contact Information"
        :visible="localState.visible"
        :footer="null"
        :onCancel="handleCancel"
      >
        <div class="project-modal">
          <AddUser>
            <BasicFormWrapper>
              <a-form
                name="contact"
                :rules="rules"
                :model="addFormState"
                @finish="handleOk"
                layout="vertical"
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
                  size="default"
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
        <div class="project-modal">
          <AddUser>
            <BasicFormWrapper>
              <a-form
                name="contactEdit"
                :rules="rules"
                :model="editFormState"
                @finish="handleEditOk"
                layout="vertical"
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
                  size="default"
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
import { ContactPageheaderStyle } from "./style";
import ContactCard from "./overview/ContactCard";
import { Main, CardToolbox, BasicFormWrapper } from "../../styled";
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
    ContactPageheaderStyle,
    ContactCard,
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
      visible: false,
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

    return {
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
