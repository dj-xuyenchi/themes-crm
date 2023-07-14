<template>
  <sdPageHeader title="Export" class="ninjadash-page-header-main">
  </sdPageHeader>
  <Main>
    <a-row :gutter="25">
      <a-col :sm="24" :xs="24">
        <ExportStyleWrap>
          <sdCards headless>
            <div class="ninjadash_export-box">
              <template v-if="selectedRows.length">
                <sdButton
                  class="btn-export"
                  @click="showModal"
                  type="primary"
                  size="lg"
                >
                  Export
                </sdButton>
                <sdModal
                  title="Export File"
                  wrapclass="ninjadash_export-wrap"
                  :visible="isModalVisible"
                  :footer="null"
                  :onCancel="handleCancel"
                  class="export-modal"
                >
                  <a-form name="contact">
                    <a-form-item name="f_name">
                      <a-input
                        placeholder="File Name"
                        v-model:value="fileName"
                        @change="updateFileName"
                      />
                    </a-form-item>
                    <a-form-item name="f_type">
                      <a-select default-value="xlxs" @change="updateFileType">
                        <!-- <a-select-option value="csv">CSV</a-select-option> -->
                        <a-select-option value="xlxs">xlxs</a-select-option>
                      </a-select>
                    </a-form-item>
                    <div class="ninjadash-button-grp">
                      <!-- <CSVLink v-if="convertedTo === 'csv'" :filename="`${fileName}.csv`" :data="csvJsonData">
                        <sdButton @click="handleCancel" class="btn-export" type="primary">
                          Export
                        </sdButton>
                      </CSVLink> -->

                      <sdButton
                        class="btn-export"
                        @click="() => exportToXLSX(csvData, fileName)"
                        type="primary"
                      >
                        Export
                      </sdButton>

                      <sdButton
                        htmlType="button"
                        @click="handleCancel"
                        size="lg"
                        type="light"
                        outlined
												class="btn-cancel"
                      >
                        Cancel
                      </sdButton>
                    </div>
                  </a-form>
                </sdModal>
              </template>

              <sdButton
                v-else
                class="btn-export"
                @click="warning"
                type="primary"
              >
                Export
              </sdButton>

              <div class="certain-category-search">
                <a-input
                  v-model:value="searchData"
                  @change="handleSearch"
                  placeholder="Search by Name"
                >
                  <template #suffix>
                    <unicon name="search" width="14"></unicon>
                  </template>
                </a-input>
              </div>
            </div>
            <div
              class="ninjadash_export-file-table table-bordered table-responsive"
            >
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
            </div>
          </sdCards>
        </ExportStyleWrap>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Main, ExportStyleWrap } from "../../styled";
import { useStore } from "vuex";
import { computed, ref, watchEffect } from "vue";
import { Modal } from "ant-design-vue";

const Import = {
  name: "Import",
  components: { Main, ExportStyleWrap },
  setup() {
    const { state, dispatch } = useStore();
    const users = computed(() => state.contact.data);
    const isModalVisible = ref(false);
    const fileName = ref("strikingDash");
    const convertedTo = ref("csv");
    const selectedRowKeys = ref(0);
    const selectedRows = ref([]);
    const searchData = ref("");

    const showModal = () => {
      isModalVisible.value = true;
    };

    const handleCancel = () => {
      isModalVisible.value = false;
    };

    const handleSearch = () => {
      dispatch("contactSearchData", searchData.value);
    };
    const csvData = [["id", "name", "email", "company", "joining", "position"]];
    const csvJsonData = [
      {
        id: "id",
        name: "name",
        email: "email",
        company: "company",
        joining: "joining",
        position: "position",
      },
    ];
    const usersTableData = computed(() =>
      users.value
        .sort((a, b) => {
          return b.time - a.time;
        })
        .map((user) => {
          const { id, name, designation, email, joining, company } = user;
          return {
            key: id,
            user: name,
            email,
            company,
            joining: joining,
            position: designation,
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
        title: "Joining Date",
        dataIndex: "joining",
        key: "joining",
      },
      {
        title: "Position",
        dataIndex: "position",
        key: "position",
      },
    ];

    const rowSelection = {
      onChange: (keys, rows) => {
        selectedRowKeys.value = keys;
        selectedRows.value = rows;
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
      }),
    };

    const warning = () => {
      Modal.warning({
        title: "Please Select your Required Rows!",
      });
    };

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const xlsxExtension = ".xlsx";

    const exportToXLSX = (inputData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(inputData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + xlsxExtension);
      isModalVisible.value = false;
    };

    const updateFileName = (e) => {
      fileName.value = e.target.value;
    };
    const updateFileType = (value) => {
      convertedTo.value = value;
    };

    watchEffect(() => {
      selectedRows.value.map((member) => {
        const { key, user, position, email, company } = member;
        csvJsonData.push({ id: key, name: user, email, company, position });
        return csvData.push([key, user, email, company, position]);
      });
    });

    return {
      usersTableColumns,
      exportToXLSX,
      updateFileName,
      updateFileType,
      fileType,
      xlsxExtension,
      rowSelection,
      warning,
      usersTableData,
      handleSearch,
      searchData,
      handleCancel,
      showModal,
      fileName,
      convertedTo,
      selectedRowKeys,
      selectedRows,
      isModalVisible,
      csvData,
      csvJsonData,
    };
  },
};

export default Import;
</script>
