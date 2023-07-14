<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Alerts"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <AlertList>
              <div class="alert-empty-message">
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  description="Success Text"
                  type="success"
                />
              </div>
            </AlertList>
          </sdCards>
          <sdCards title="Closable">
            <AlertList>
              <div class="alert-empty-message">
                <sdAlerts
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  description="Warning Text Warning Text Warning Text Warning Text Warning Text Warning TextWarning Text"
                  type="warning"
                />
              </div>
              <sdAlerts
                :outlined="false"
                :closable="true"
                :showIcon="false"
                message="Error Text"
                description="Error Text Error Text Warning TextW Error Text Error Text Error TextError Text"
                type="error"
              />
            </AlertList>
          </sdCards>
          <sdCards title="Icon">
            <AlertList>
              <div class="alert-empty-message">
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Success Tips"
                  type="success"
                />
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Informational Notes"
                  type="info"
                />
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Warning"
                  type="warning"
                />
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Error"
                  type="error"
                />
              </div>
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
              />
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
              />
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
              />
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Error"
                description="This is an error message about
              copywriting."
                type="error"
              />
            </AlertList>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="More Types">
            <AlertList>
              <div class="alert-empty-message">
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Success Text"
                  type="success"
                />
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Info Text"
                  type="info"
                />
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Warning Text"
                  type="warning"
                />
                <sdAlerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Error Text"
                  type="error"
                />
              </div>
            </AlertList>
          </sdCards>
          <sdCards title="Description">
            <AlertList>
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Success Text"
                description="Success Description Success Description Success Description"
                type="success"
              />
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                type="info"
              />
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                type="warning"
              />
              <sdAlerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                type="error"
              />
            </AlertList>
          </sdCards>
          <sdCards title="Customized Close Text">
            <AlertList>
              <div class="alert-empty-message">
                <sdAlerts
                  closeText="Close Now"
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  message=""
                  description="Info Text"
                  type="info"
                />
              </div>
            </AlertList>
          </sdCards>
          <sdCards title="Smoothly Unmount">
            <AlertList>
              <div class="alert-empty-message">
                <sdAlerts
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  message=""
                  description="Alert Message Text"
                  type="success"
                />
              </div>
            </AlertList>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import config from '../../config/config';
import { Main, AlertList } from '../styled';
const { theme }: any = config;
</script>
