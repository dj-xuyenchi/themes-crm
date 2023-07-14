<script setup lang="ts">
import { RecordFormWrapper } from './style';
import { Main, BasicFormWrapper } from '../../styled';
import { useStore } from 'vuex';
import { computed, reactive, ref, onMounted } from 'vue';
import dayjs from 'dayjs';

const dateFormat = 'YYYY/MM/DD';

const { state, dispatch } = useStore();

const isLoading = computed(() => state.crud.loading);
const url = computed(() => state.crud.url);
const isFileLoading = computed(() => state.crud.fileLoading);
const join = ref('');

onMounted(async () => {
  await dispatch('axiosFileClear');
});

const handleSubmit = (values: any) => {
  dispatch('axiosCrudSubmitData', {
    ...values,
    image: url.value,
    join: dayjs(join.value).format(dateFormat),
    id: new Date().getTime(),
  });
  dispatch('axiosFileClear');
};

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  multiple: false,
  showUploadList: false,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      dispatch('axiosFileUploader', info.file.originFileObj);
    }
  },
};

const formState = reactive({
  name: '',
  email: '',
  country: '',
  city: '',
  company: '',
  position: '',
  status: '',
});
</script>

<template>
  <sdPageHeader :routes="[]" class="ninjadash-page-header-main" title="Add New Recored">
    <template #buttons>
      <sdButton class="btn-add_new" size="default" key="1" type="primary">
        <router-link to="/crud/axios-view">View All</router-link>
      </sdButton>
    </template>
  </sdPageHeader>
  <Main>
    <a-row :gutter="15">
      <a-col :xs="24">
        <RecordFormWrapper>
          <sdCards headless>
            <a-row justify="center">
              <a-col :xl="10" :md="16" :xs="24">
                <BasicFormWrapper>
                  <a-form
                    class="add-record-form"
                    :style="{ width: '100%' }"
                    layout="vertical"
                    name="addnew"
                    :model="formState"
                    @finish="handleSubmit"
                  >
                    <figure class="pro-image align-center-v">
                      <img
                        :src="url === null ? '/src/assets/img/avatar/profileImage.png' : `http://api.masudr.com/${url}`"
                        alt=""
                      />
                      <figcaption>
                        <a-upload v-bind="props">
                          <a class="upload-btn" to="#">
                            <unicon name="camera" size="16"></unicon>
                          </a>
                        </a-upload>
                        <div class="info">
                          <sdHeading as="h4">Profile Photo</sdHeading>
                        </div>

                        <div v-if="isFileLoading" class="isUploadSpain">
                          <a-spin />
                        </div>
                      </figcaption>
                    </figure>
                    <a-form-item name="name" label="Name">
                      <a-input v-model:value="formState.name" placeholder="Input Name" />
                    </a-form-item>
                    <a-form-item name="email" label="Email">
                      <a-input v-model:value="formState.email" type="email" placeholder="example@gmail.com" />
                    </a-form-item>
                    <a-form-item name="country" label="Country">
                      <a-select v-model:value="formState.country" :style="{ width: '100%' }">
                        <a-select-option value="">Please Select</a-select-option>
                        <a-select-option value="bangladesh">Bangladesh</a-select-option>
                        <a-select-option value="india">India</a-select-option>
                        <a-select-option value="pakistan">Pakistan</a-select-option>
                        <a-select-option value="srilanka">Srilanka</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item name="city" label="City">
                      <a-select v-model:value="formState.city" :style="{ width: '100%' }">
                        <a-select-option value="">Please Select</a-select-option>
                        <a-select-option value="dhaka">Dhaka</a-select-option>
                        <a-select-option value="mymensingh">Mymensingh</a-select-option>
                        <a-select-option value="khulna">Khulna</a-select-option>
                        <a-select-option value="barisal">Barisal</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item name="company" label="Company">
                      <a-input v-model:value="formState.company" placeholder="Company Name" />
                    </a-form-item>
                    <a-form-item name="position" label="Position">
                      <a-input v-model:value="formState.position" placeholder="Position" />
                    </a-form-item>
                    <a-form-item label="Joining Date">
                      <a-date-picker :style="{ width: '100%' }" v-model:value="join" :format="dateFormat" />
                    </a-form-item>
                    <a-form-item name="status" label="Status">
                      <a-radio-group v-model:value="formState.status">
                        <a-radio value="active">Active</a-radio>
                        <a-radio value="deactivated">Deactivated</a-radio>
                        <a-radio value="blocked">Blocked</a-radio>
                      </a-radio-group>
                    </a-form-item>
                    <div class="record-form-actions text-right">
                      <sdButton :disabled="isLoading" size="default" htmlType="Save" type="primary">
                        {{ isLoading ? 'Loading...' : 'Submit' }}
                      </sdButton>
                    </div>
                  </a-form>
                </BasicFormWrapper>
              </a-col>
            </a-row>
          </sdCards>
        </RecordFormWrapper>
      </a-col>
    </a-row>
  </Main>
</template>
