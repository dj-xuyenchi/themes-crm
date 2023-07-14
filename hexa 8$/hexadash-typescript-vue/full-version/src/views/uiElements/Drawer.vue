<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Drawer"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :lg="12" :xs="24">
          <div class="ninjadash-drawer">
            <sdCards title="Basic">
              <sdDrawer title="Basic Drawer" placement="right" type="basic">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </sdDrawer>
            </sdCards>
          </div>
        </a-col>
        <a-col :lg="12" :xs="24">
          <div class="ninjadash-drawer">
            <sdCards title="Custom placement">
              <div class="drawer-placement">
                <sdDrawer title="Custom Placement" type="custom">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </sdDrawer>
              </div>
            </sdCards>
          </div>
        </a-col>
        <a-col :lg="12" :xs="24">
          <div class="ninjadash-drawer">
            <sdCards title="Render in current dom">
              <div class="drawer-placement">
                <sdDrawer title="Render in current dom" type="render">
                  <p>Some contents...</p>
                </sdDrawer>
              </div>
            </sdCards>
          </div>
        </a-col>
        <a-col :lg="12" :xs="24">
          <div class="ninjadash-drawer">
            <sdCards title="Submit form in drawer">
              <div class="drawer-placement">
                <sdDrawer title="Create a new account" type="submit">
                  <a-form :model="form" :rules="rules" layout="vertical">
                    <a-row :gutter="16">
                      <a-col :sm="12" :xs="24">
                        <a-form-item label="Name" name="name">
                          <a-input v-model:value="form.name" placeholder="Please enter user name" />
                        </a-form-item>
                      </a-col>
                      <a-col :sm="12" :xs="24">
                        <a-form-item label="Url" name="url">
                          <a-input
                            v-model:value="form.url"
                            style="width: 100%"
                            addon-before="http://"
                            addon-after=".com"
                            placeholder="please enter url"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16">
                      <a-col :sm="12" :xs="24">
                        <a-form-item label="Owner" name="owner">
                          <a-select placeholder="Please choose Owner" v-model:value="value1">
                            <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
                            <a-select-option value="mao">Maomao Zhou</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :sm="12" :xs="24">
                        <a-form-item label="Type" name="type">
                          <a-select placeholder="Please choose the type" v-model:value="value1">
                            <a-select-option value="private">Private</a-select-option>
                            <a-select-option value="public">Public</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16">
                      <a-col :sm="12" :xs="24">
                        <a-form-item label="Approver" name="approver">
                          <a-select placeholder="Please choose the approver" v-model:value="value1">
                            <a-select-option value="jack">Jack Ma</a-select-option>
                            <a-select-option value="tom">Tom Liu</a-select-option>
                          </a-select>
                        </a-form-item>
                      </a-col>
                      <a-col :sm="12" :xs="24">
                        <a-form-item label="DateTime" name="dateTime">
                          <a-date-picker
                            v-model:value="form.dateTime"
                            style="width: 100%"
                            :get-popup-container="(trigger: any) => trigger.parentNode"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>
                    <a-row :gutter="16">
                      <a-col :sm="24" :xs="24">
                        <a-form-item label="Description" name="description">
                          <a-textarea
                            v-model:value="form.description"
                            :rows="4"
                            placeholder="please enter url description"
                          />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-form>
                </sdDrawer>
              </div>
            </sdCards>
          </div>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import { Main } from '../styled';

interface Form {
  name: string;
  url: string;
  owner: string;
  type: string;
  approver: string;
  dateTime: string;
  description: string;
}

let value1 = '';

const form: UnwrapRef<Form> = reactive({
  name: '',
  url: '',
  owner: '',
  type: '',
  approver: '',
  dateTime: '',
  description: '',
});

const rules = {
  name: [
    {
      required: true,
      message: 'Please enter user name',
    },
  ],
  url: [
    {
      required: true,
      message: 'please enter url',
    },
  ],
  owner: [
    {
      required: true,
      message: 'Please select an owner',
    },
  ],
  type: [
    {
      required: true,
      message: 'Please choose the type',
    },
  ],
  approver: [
    {
      required: true,
      message: 'Please choose the approver',
    },
  ],
  dateTime: [
    {
      required: true,
      message: 'Please choose the dateTime',
      type: 'object',
    },
  ],
  description: [
    {
      required: true,
      message: 'Please enter url description',
    },
  ],
};
</script>
