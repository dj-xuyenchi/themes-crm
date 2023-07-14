<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Theme Configuration"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <DashboardBaseStyleWrap>
            <sdCards :border="false" headless title="Theme Colors" size="default">
              <a-row :gutter="15">
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['primary-color']">Primary</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['secondary-color']">Secondary</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['success-color']">Success</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['info-color']">Info</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['warning-color']">Warning</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['error-color']">Error</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['dark-color']">Dark</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['gray-color']">Gray</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['light-color']">Light</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['extra-light-color']">Extra Light</Palette>
                </a-col>
              </a-row>
            </sdCards>
          </DashboardBaseStyleWrap>
        </a-col>
        <a-col :xs="24">
          <DashboardBaseStyleWrap>
            <sdCards :border="false" headless title="Hover Colors" size="default">
              <a-row :gutter="15">
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['primary-hover']">Primary</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['secondary-hover']">Secondary</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['success-hover']">Success</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['info-hover']">Info</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['warning-hover']">Warning</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['error-hover']">Error</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['dark-hover']">Dark</Palette>
                </a-col>
                <a-col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="12">
                  <Palette :colorCode="theme['gray-hover']">Gray</Palette>
                </a-col>
              </a-row>
            </sdCards>
          </DashboardBaseStyleWrap>
        </a-col>
        <a-col :xs="24">
          <DashboardBaseStyleWrap>
            <sdCards :border="false" headless title="Gradient Colors" size="default">
              <a-row :gutter="15">
                <a-col :md="5">
                  <Palette
                    gradient
                    content
                    direction="90deg"
                    :colorCode="[theme['primary-color'], theme['secondary-color']]"
                  >
                    {{ theme['primary-color'] }}
                  </Palette>
                </a-col>
                <a-col :md="5">
                  <Palette
                    gradient
                    content
                    direction="90deg"
                    :colorCode="[theme['secondary-color'], theme['warning-color']]"
                  >
                    {{ theme['secondary-color'] }}
                  </Palette>
                </a-col>
                <a-col :md="5">
                  <Palette
                    gradient
                    content
                    direction="90deg"
                    :colorCode="[theme['primary-color'], theme['info-color']]"
                  >
                    {{ theme['primary-color'] }}
                  </Palette>
                </a-col>
              </a-row>
            </sdCards>
          </DashboardBaseStyleWrap>
        </a-col>
        <a-col :xs="24">
          <DashboardBaseStyleWrap>
            <sdCards :border="false" headless title="Border Colors" size="default">
              <a-row :gutter="15">
                <a-col :md="6">
                  <Palette :bordered="true" :content="true" :colorCode="theme['border-color-light']">
                    Border Color 1
                  </Palette>
                </a-col>
                <a-col :md="6">
                  <Palette :bordered="true" :content="true" :colorCode="theme['border-color-normal']">
                    Border Color 2
                  </Palette>
                </a-col>
                <a-col :md="6">
                  <Palette :bordered="true" :content="true" :colorCode="theme['border-color-deep']">
                    Border Color 3
                  </Palette>
                </a-col>
              </a-row>
            </sdCards>
          </DashboardBaseStyleWrap>
        </a-col>
        <a-col :xs="24">
          <DashboardBaseStyleWrap>
            <sdCards :border="false" headless title="Background Gray Colors" size="default">
              <a-row :gutter="15">
                <a-col :md="6">
                  <Palette bg content :colorCode="theme['bg-color-light']"> BG Color 1 </Palette>
                </a-col>
                <a-col :md="6">
                  <Palette bg content :colorCode="theme['bg-color-normal']"> BG Color 2 </Palette>
                </a-col>
                <a-col :md="6">
                  <Palette bg content :colorCode="theme['bg-color-deep']"> BG Color 3 </Palette>
                </a-col>
              </a-row>
            </sdCards>
          </DashboardBaseStyleWrap>
        </a-col>
        <a-col :xs="24">
          <DashboardBaseStyleWrap>
            <sdCards headless title="Buttons">
              <a-row :gutter="15">
                <a-col :md="6">
                  <sdButton type="primary" size="sm" :style="{ marginRight: '10px', marginBottom: '10px' }">
                    Small
                  </sdButton>
                  <sdButton type="primary" :style="{ marginRight: '10px', marginBottom: '10px' }"> Normal </sdButton>
                  <sdButton type="primary" size="lg" :style="{ marginRight: '10px', marginBottom: '10px' }">
                    Large Button
                  </sdButton>
                  <sdButton outlined type="primary" size="sm" :style="{ marginRight: '10px', marginBottom: '10px' }">
                    Small
                  </sdButton>
                  <sdButton outlined type="primary" :style="{ marginRight: '10px', marginBottom: '10px' }">
                    Normal
                  </sdButton>
                  <sdButton outlined type="primary" size="lg" :style="{ marginRight: '10px', marginBottom: '10px' }">
                    Large Button
                  </sdButton>
                  <sdButton type="secondary" size="sm" :style="{ marginRight: '10px', marginBottom: '10px' }">
                    Small
                  </sdButton>
                  <sdButton type="secondary" :style="{ marginRight: '10px', marginBottom: '10px' }"> Normal </sdButton>
                  <sdButton type="secondary" size="lg" :style="{ [rtl ? 'marginRight' : '']: '10px' }">
                    Large Button
                  </sdButton>
                </a-col>
              </a-row>
            </sdCards>
          </DashboardBaseStyleWrap>
        </a-col>
        <a-col :xs="24">
          <DashboardBaseStyleWrap>
            <sdCards headless title="Typography Inter">
              <a-row :gutter="15">
                <a-col :xs="24">
                  <a-row>
                    <a-col :lg="9" :sm="24" :xs="24">
                      <sdHeading>h1. Default Heading</sdHeading>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font Size - 30px</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font weight - 600</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Line Height - 38px</p>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :xs="24">
                  <a-row>
                    <a-col :lg="9" :sm="24" :xs="24">
                      <sdHeading as="h2">h2. Default Heading</sdHeading>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font Size - 24px</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font weight - 600</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Line Height - 30px</p>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :xs="24">
                  <a-row>
                    <a-col :lg="9" :sm="24" :xs="24">
                      <sdHeading as="h3">h3. Default Heading</sdHeading>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font Size - 22px</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font weight - 600</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Line Height - 27px</p>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :xs="24">
                  <a-row>
                    <a-col :lg="9" :sm="24" :xs="24">
                      <sdHeading as="h4">h4. Default Heading</sdHeading>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font Size - 20px</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font weight - 600</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Line Height - 24px</p>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :xs="24">
                  <a-row>
                    <a-col :lg="9" :sm="24" :xs="24">
                      <sdHeading as="h5">h5. Default Heading</sdHeading>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font Size - 18px</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font weight - 600</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Line Height - 22px</p>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :xs="24">
                  <a-row>
                    <a-col :lg="9" :sm="24" :xs="24">
                      <sdHeading as="h6">h6. Default Heading</sdHeading>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font Size - 16px</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Font weight - 600</p>
                    </a-col>
                    <a-col :lg="5" :sm="24" :xs="24">
                      <p>Line Height - 20px</p>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </sdCards>
          </DashboardBaseStyleWrap>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Main } from '../styled';
import { DashboardBaseStyleWrap } from './ui-elements-styled';
import Palette from '../../components/color-palette/ColorPalette.vue';
import { theme } from '../../config/theme/themeVariables';

const { state } = useStore();
const rtl = computed(() => state.themeLayout.rtlData);
</script>
