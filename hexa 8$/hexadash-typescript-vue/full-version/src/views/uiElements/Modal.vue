<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Modals"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <p>
              When requiring users to interact with the application, but without jumping to a new page and interrupting
              the user's workflow, you can use Modal to create a new floating layer over the current page to get user
              feedback or display information. Additionally
            </p>
            <sdModal title="Basic Modal" :type="modalType" :onOk="handleOk" :visible="visible" :onCancel="handleCancel">
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user's workflow, you can use Modal to create a new floating layer over the current page
                to get user feedback or display information. Additionally
              </p>
            </sdModal>
            <a-space class="ninjadash-action-btn-list">
              <sdButton
                @click="
                  () => {
                    showModal();
                    changeType('primary');
                  }
                "
                size="sm"
                type="primary"
                >Primary</sdButton
              >
              <sdButton
                @click="
                  () => {
                    showModal();
                    changeType('success');
                  }
                "
                size="sm"
                type="success"
                >Success</sdButton
              >
              <sdButton
                @click="
                  () => {
                    showModal();
                    changeType('warning');
                  }
                "
                size="sm"
                type="warning"
                >Warning</sdButton
              >
              <sdButton
                @click="
                  () => {
                    showModal();
                    changeType('error');
                  }
                "
                size="sm"
                type="error"
                >Error</sdButton
              >
            </a-space>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Color Modal">
            <p>
              When requiring users to interact with the application, but without jumping to a new page and interrupting
              the user's workflow, you can use Modal to create a new floating layer over the current page to get user
              feedback or display information. Additionally
            </p>
            <sdModal
              title="Color Modal"
              :color="true"
              :type="modalType"
              :onOk="handleOk"
              :visible="colorVisible"
              :onCancel="handleCancel"
            >
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user's workflow, you can use Modal to create a new floating layer over the current page
                to get user feedback or display information. Additionally
              </p>
            </sdModal>
            <a-space class="ninjadash-action-btn-list">
              <sdButton
                @click="
                  () => {
                    showColorModal();
                    changeType('primary');
                  }
                "
                size="sm"
                type="primary"
                >Primary</sdButton
              >
              <sdButton
                @click="
                  () => {
                    showColorModal();
                    changeType('success');
                  }
                "
                size="sm"
                type="success"
                >Success</sdButton
              >
              <sdButton
                @click="
                  () => {
                    showColorModal();
                    changeType('warning');
                  }
                "
                size="sm"
                type="warning"
                >Warning</sdButton
              >
              <sdButton
                @click="
                  () => {
                    showColorModal();
                    changeType('error');
                  }
                "
                size="sm"
                type="error"
                >Error</sdButton
              >
            </a-space>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Color Modal" class="Information Modal">
            <p>
              When requiring users to interact with the application, but without jumping to a new page and interrupting
              the user's workflow, you can use Modal to create a new floating layer over the current page to get user
              feedback or display information. Additionally
            </p>
            <sdModal
              title="Information Modal"
              :color="true"
              :type="modalType"
              :onOk="handleOk"
              :visible="colorVisible"
              :onCancel="handleCancel"
            >
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user's workflow, you can use Modal to create a new floating layer over the current page
                to get user feedback or display information. Additionally
              </p>
            </sdModal>
            <a-space class="ninjadash-action-btn-list">
              <sdButton type="info" size="sm" @click="info"> Info </sdButton>
              <sdButton type="success" size="sm" @click="success"> Success </sdButton>
              <sdButton type="error" size="sm" @click="error"> Error </sdButton>
              <sdButton type="warning" size="sm" @click="warning"> Warning </sdButton>
            </a-space>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="tsx">
import { Main } from '../styled';
import { Modal } from 'ant-design-vue';
import { h, ref } from 'vue';

let visible = ref(false);
let colorVisible = ref(false);
let confirmLoading = ref(false);
let modalType = ref('primary');

function showModal() {
  visible.value = true;
}

function showColorModal() {
  colorVisible.value = true;
}

function handleOk() {
  confirmLoading.value = true;
  setTimeout(() => {
    visible.value = false;
    colorVisible.value = false;
    confirmLoading.value = false;
  }, 2000);
}

function handleCancel() {
  visible.value = false;
  colorVisible.value = false;
}
function changeType(type: string) {
  modalType.value = type;
}

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: h('div', {}, [h('p', 'some messages...some messages...'), h('p', 'some messages...some messages...')]),
    onOk() {
      console.log('ok');
    },
  });
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}
</script>
