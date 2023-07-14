<script lang="ts">
import { BasicFormWrapper } from '../../../styled';
import { ProjectModalFooter } from '../style';
import { reactive, ref, toRefs, defineComponent } from 'vue';

const options = [
  {
    label: 'Privet',
    value: 'privet',
  },
  {
    label: 'Team',
    value: 'team',
  },
  {
    label: 'Public',
    value: 'public',
  },
];

const dateFormat = 'MM/DD/YYYY';

const CreateProject = defineComponent({
  name: 'CreateProject',
  components: { BasicFormWrapper, ProjectModalFooter },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    onCancel: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const modalType = ref('primary');
    const checked = ref([]);
    const { onCancel } = toRefs(props);
    const formState = reactive({
      project: '',
      category: '',
      description: '',
      privacy: [''],
      members: '',
      start: '',
      end: '',
      layout: 'vertical',
    });
    const handleOk = () => {
      onCancel.value();
    };

    const handleCancel = () => {
      onCancel.value();
    };

    return {
      options,
      handleOk,
      handleCancel,
      modalType,
      checked,
      dateFormat,
      formState,
    };
  },
});

export default CreateProject;
</script>

<template>
  <sdModal :type="modalType" title="Create Project" :visible="visible" :onCancel="handleCancel">
    <div class="project-modal">
      <BasicFormWrapper>
        <a-form :model="formState" @finish="handleOk" :layout="formState.layout">
          <a-form-item name="project" label="">
            <a-input v-model:value="formState.project" placeholder="Project Name" />
          </a-form-item>
          <a-form-item name="category" label="">
            <a-select v-model:value="formState.category" style="width: 100%">
              <a-select-option value="">Project Category</a-select-option>
              <a-select-option value="one">Project One</a-select-option>
              <a-select-option value="two">Project Two</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item name="description" label="">
            <a-textarea :rows="4" placeholder="Project Description" />
          </a-form-item>
          <a-form-item name="privacy" label="Project Privacy">
            <a-checkbox-group v-model:value="formState.privacy" :options="options" />
          </a-form-item>
          <a-form-item name="members" label="Project Members">
            <a-input v-model:value="formState.members" placeholder="Search Members" />
          </a-form-item>
          <div class="projects-members mb-30">
            <img style="width: 35px" :src="`/src/assets/img/users/1.png`" alt="" />
            <img style="width: 35px" :src="`/src/assets/img/users/2.png`" alt="" />
            <img style="width: 35px" :src="`/src/assets/img/users/3.png`" alt="" />
            <img style="width: 35px" :src="`/src/assets/img/users/4.png`" alt="" />
            <img style="width: 35px" :src="`/src/assets/img/users/5.png`" alt="" />
          </div>
          <a-row :gutter="15">
            <a-col :md="12">
              <a-form-item name="start" label="Start Date">
                <a-date-picker v-model:value="formState.start" placeholder="mm/dd/yyyy" :format="dateFormat" />
              </a-form-item>
            </a-col>
            <a-col :md="12">
              <a-form-item name="end" label="End Date">
                <a-date-picker v-model:value="formState.end" placeholder="mm/dd/yyyy" :format="dateFormat" />
              </a-form-item>
            </a-col>
            <a-col :md="12">
              <a-form-item>
                <ProjectModalFooter>
                  <sdButton size="default" type="primary" key="submit" @click="handleOk"> Add New Project </sdButton>
                  <sdButton size="default" type="light" key="back" outlined @click="handleCancel"> Cancel </sdButton>
                </ProjectModalFooter>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </BasicFormWrapper>
    </div>
  </sdModal>
</template>
