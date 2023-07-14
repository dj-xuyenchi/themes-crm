<template>
  <sdPageHeader title="Update Your Recored">
    <template #buttons>
      <sdButton class="btn-add_new" size="default" key="1" type="primary">
        <router-link to="/crud/fireStore-view">View All</router-link>
      </sdButton>
    </template>
  </sdPageHeader>
  <Main>
    <a-row :gutter="15">
      <a-col :xs="24">
        <div v-if="isLoading" class="spin">
          <a-spin />
        </div>
        <RecordFormWrapper v-else>
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
                      <img :src="url === null ? require('@/static/img/avatar/profileImage.png') : url" alt="" />
                      <figcaption>
                        <a-upload v-bind="props">
                          <a class="upload-btn" to="#">
                            <sdFeatherIcons type="camera" size="16" />
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
                      <sdButton size="default" htmlType="Save" type="primary">
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
<script>
import { RecordFormWrapper } from './style';
import { Main, BasicFormWrapper } from '../../styled';
import { useStore } from 'vuex';
import { computed, onMounted, reactive, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';

const dateFormat = 'YYYY/MM/DD';

const UpdateData = {
  name: 'UpdateData',
  components: { RecordFormWrapper, Main, BasicFormWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const { params } = useRoute();
    const isLoading = computed(() => state.fireStore.loading);
    const crud = computed(() => state.fireStore.data);
    const url = computed(() => state.fireStore.url);
    const isFileLoading = computed(() => state.fireStore.fileLoading);
    const join = ref('2021/04/14');

    const handleSubmit = values => {
      dispatch('fireStoreDataUpdate', {
        id: params.id,
        data: {
          ...values,
          join: dayjs(join.value).format('YYYY/MM/DD'),
          image: url.value,
        },
      });
      dispatch('fireStoreFileClear');
    };

    onMounted(() => {
      dispatch('fireStoreSingleDataGet', params.id);
    });

    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      multiple: false,
      showUploadList: false,
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          dispatch('fireStoreFileUploader', info.file.originFileObj);
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

    watchEffect(() => {
      if (crud.value.name) {
        formState.name = crud.value.name;
        formState.email = crud.value.email;
        formState.country = crud.value.country;
        formState.city = crud.value.city;
        formState.company = crud.value.company;
        join.value = crud.value.join;
        formState.position = crud.value.position;
        formState.status = crud.value.status;
      }
    });

    return {
      isLoading,
      url,
      isFileLoading,
      handleSubmit,
      props,
      dateFormat,
      formState,
      join,
    };
  },
};

export default UpdateData;
</script>
