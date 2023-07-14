<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Buttons"></sdPageHeader>
    <Main class="button-example">
      <a-row :gutter="25">
        <a-col :md="12">
          <sdCards title="Basic" size="default">
            <sdButton size="default" type="primary"> Primary </sdButton>
            <sdButton size="default" type="secondary"> Secondary </sdButton>
            <sdButton size="default" type="success"> Success </sdButton>
            <sdButton size="default" type="info"> Info </sdButton>
            <sdButton size="default" type="warning"> Warning </sdButton>
            <sdButton size="default" type="danger"> Danger </sdButton>
            <sdButton size="default" type="link"> Link </sdButton>
            <sdButton size="default" type="dark"> Dark </sdButton>
            <sdButton size="default" type="light"> Light </sdButton>
            <sdButton size="default" type="white"> White </sdButton>
          </sdCards>
          <sdCards title="Light Color" size="default">
            <sdButton size="default" :transparented="true" type="primary"> Primary </sdButton>
            <sdButton size="default" :transparented="true" type="secondary"> Secondary </sdButton>
            <sdButton size="default" :transparented="true" type="success"> Success </sdButton>
            <sdButton size="default" :transparented="true" type="info"> Info </sdButton>
            <sdButton size="default" :transparented="true" type="warning"> Warning </sdButton>
            <sdButton size="default" :transparented="true" type="danger"> Danger </sdButton>
            <sdButton size="default" :transparented="true" type="dark"> Dark </sdButton>
            <sdButton class="btn-transparent" size="default" :transparented="true" type="light"> Light </sdButton>
          </sdCards>
          <sdCards title="Rounded" size="default">
            <sdButton size="default" shape="circle" type="primary"> Primary </sdButton>
            <sdButton size="default" shape="circle" type="secondary"> Secondary </sdButton>
            <sdButton size="default" shape="circle" type="success"> Success </sdButton>
            <sdButton size="default" shape="circle" type="info"> Info </sdButton>
            <sdButton size="default" shape="circle" type="warning"> Warning </sdButton>
            <sdButton size="default" shape="circle" type="danger"> Danger </sdButton>
            <sdButton size="default" shape="circle" type="dark"> Dark </sdButton>
            <sdButton size="default" shape="circle" type="light"> Light </sdButton>
            <sdButton size="default" shape="circle" type="white"> White </sdButton>
          </sdCards>
          <sdCards title="Icon" size="default">
            <sdButton size="default" type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" transparented type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" outlined type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" type="white">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" type="light">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" raised type="white">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton class="btn-icon" size="default" type="primary">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon" size="default" outlined type="primary">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon" size="default" type="light">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon btn-outlined" size="default" :outlined="true" type="light">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
          </sdCards>
          <sdCards title="Size" size="default">
            <a-row>
              <ButtonSizeWrapper>
                <sdButton size="lg" type="primary"> Large Button </sdButton>
                <sdButton size="default" type="secondary"> Default </sdButton>
                <sdButton size="sm" type="success"> Small </sdButton>
              </ButtonSizeWrapper>
            </a-row>
          </sdCards>

          <sdCards title="Multiple Buttons" size="default">
            <sdButton size="default" type="primary"> Primary </sdButton>

            <sdButton size="default" type="secondary"> Secondary </sdButton>

            <sdDropdown :action="['click']" placement="bottomLeft">
              <BtnWithIcon>
                <sdButton size="default" :outlined="true" type="white">
                  Actions
                  <unicon name="angle-down"></unicon>
                </sdButton>
              </BtnWithIcon>
            </sdDropdown>
          </sdCards>

          <sdCards title="Group Button" size="default">
            <ButtonsGroupWrapper>
              <div class="button-group-single">
                <h4>Basic</h4>
                <a-row>
                  <sdBtnGroup>
                    <sdButton size="sm" type="primary"> Today </sdButton>
                    <sdButton size="sm" rise type="white" class="btn-outlined"> Week </sdButton>
                    <sdButton size="sm" rise type="white" class="btn-outlined"> Month </sdButton>
                    <sdButton size="sm" rise type="white" class="btn-outlined"> Year </sdButton>
                  </sdBtnGroup>
                  <sdBtnGroup>
                    <sdButton size="sm" :outlined="true" type="white"> Cancel </sdButton>
                    <sdButton size="sm" :outlined="true" type="white"> Ok </sdButton>
                  </sdBtnGroup>
                  <sdBtnGroup>
                    <sdButton size="sm" type="light"> Left </sdButton>
                    <sdButton size="sm" type="light"> Middle </sdButton>
                    <sdButton size="sm" type="light"> Right </sdButton>
                  </sdBtnGroup>
                </a-row>
              </div>

              <div class="button-group-single">
                <h4>With Icon</h4>
                <a-row>
                  <BtnWithIcon>
                    <sdBtnGroup>
                      <sdButton size="sm" type="primary" class="active">
                        <unicon name="angle-left"></unicon>
                        Go Back
                      </sdButton>
                      <sdButton size="sm" type="primary">
                        Go Forward
                        <unicon name="angle-right"></unicon>
                      </sdButton>
                    </sdBtnGroup>
                  </BtnWithIcon>
                </a-row>
              </div>
            </ButtonsGroupWrapper>
          </sdCards>

          <sdCards title="Block" size="default">
            <BlockButtonsWrapper>
              <sdButton size="lg" type="primary" block> Large Button </sdButton>
              <sdButton size="default" type="secondary" block> Default </sdButton>
              <sdButton size="sm" type="success" block> Small </sdButton>
            </BlockButtonsWrapper>
          </sdCards>
        </a-col>
        <a-col :md="12">
          <sdCards title="Outline" size="default">
            <sdButton size="default" :outlined="true" type="primary"> Primary </sdButton>
            <sdButton size="default" :outlined="true" type="secondary"> Secondary </sdButton>
            <sdButton size="default" :outlined="true" type="success"> Success </sdButton>
            <sdButton size="default" :outlined="true" type="info"> Info </sdButton>
            <sdButton size="default" :outlined="true" type="warning"> Warning </sdButton>
            <sdButton size="default" :outlined="true" type="danger"> Danger </sdButton>
            <sdButton size="default" :outlined="true" type="dark"> Dark </sdButton>
            <sdButton class="btn-outlined" size="default" :outlined="true" type="light"> Light </sdButton>
            <sdButton size="default" :outlined="true" type="dashed"> Dashed </sdButton>
          </sdCards>

          <sdCards title="Raised" size="default">
            <sdButton size="default" :raised="true" type="primary"> Primary </sdButton>
            <sdButton size="default" :raised="true" type="secondary"> Secondary </sdButton>
            <sdButton size="default" :raised="true" type="success"> Success </sdButton>
            <sdButton size="default" :raised="true" type="info"> Info </sdButton>
            <sdButton size="default" :raised="true" type="warning"> Warning </sdButton>
            <sdButton size="default" :raised="true" type="danger"> Danger </sdButton>
            <sdButton size="default" :raised="true" type="dark"> Dark </sdButton>
            <sdButton size="default" :raised="true" type="white"> White </sdButton>
          </sdCards>

          <sdCards title="Rounded Outline" size="default">
            <sdButton size="default" :outlined="true" shape="circle" type="primary"> Primary </sdButton>
            <sdButton size="default" :outlined="true" shape="circle" type="secondary"> Secondary </sdButton>
            <sdButton size="default" :outlined="true" shape="circle" type="success"> Success </sdButton>
            <sdButton size="default" :outlined="true" shape="circle" type="info"> Info </sdButton>
            <sdButton size="default" :outlined="true" shape="circle" type="warning"> Warning </sdButton>
            <sdButton size="default" :outlined="true" shape="circle" type="danger"> Danger </sdButton>
            <sdButton size="default" :outlined="true" shape="circle" type="dark"> Dark </sdButton>
            <sdButton class="btn-outlined" size="default" :outlined="true" shape="circle" type="light">
              Light
            </sdButton>
            <sdButton size="default" :outlined="true" shape="circle" type="dashed"> Dashed </sdButton>
          </sdCards>

          <sdCards title="Rounded with Icon" size="default">
            <sdButton size="default" shape="circle" type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" :transparented="true" type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" :outlined="true" type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton class="btn-outlined" size="default" shape="circle" :outlined="true" type="light">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" type="light">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" :raised="true" type="white">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton class="btn-icon" size="default" shape="round" type="primary">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon" size="default" :outlined="true" shape="round" type="primary">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon btn-outlined" size="default" :outlined="true" shape="round" type="light">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon" size="default" shape="round" type="light">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
          </sdCards>

          <sdCards title="Disabled" size="default">
            <a-row>
              <sdButton size="default" type="primary"> Primary </sdButton>
              <sdButton size="default" type="primary" disabled> Primary(Disabled) </sdButton>
            </a-row>
            <a-row>
              <sdButton size="default" :outlined="true" type="white"> Default </sdButton>
              <sdButton size="default" :outlined="true" type="white" disabled> Default(Disabled) </sdButton>
            </a-row>
          </sdCards>

          <sdCards title="Loading" size="default">
            <sdButton size="default" shape="circle" type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" :transparented="true" type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" :outlined="true" type="primary">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" :outlined="true" type="white">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" type="light">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton size="default" shape="circle" :raised="true" type="white">
              <unicon name="layer-group" width="14"></unicon>
              <span>Default</span>
            </sdButton>
            <sdButton class="btn-icon" size="default" shape="round" type="primary">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon" size="default" :outlined="true" shape="round" type="primary">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon btn-outlined" size="default" :outlined="true" shape="round" type="light">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
            <sdButton class="btn-icon" size="default" shape="round" type="light">
              <unicon name="layer-group" width="14"></unicon>
            </sdButton>
          </sdCards>

          <sdCards
            :bodyStyle="{
              backgroundImage: `linear-gradient(90deg, ${theme['primary-color']}, ${theme['secondary-color']})`,
              borderRadius: `0 0 10px 10px`,
            }"
            title="Ghost"
            size="default"
          >
            <sdButton size="default" type="primary" :ghost="true"> Primary </sdButton>
            <sdButton size="default" type="secondary" :ghost="true"> Secondary </sdButton>
            <sdButton size="default" type="success" :ghost="true"> Default </sdButton>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main, ButtonsGroupWrapper, BlockButtonsWrapper, ButtonSizeWrapper, BtnWithIcon } from '../styled';
import { theme } from '../../config/theme/themeVariables';
</script>
