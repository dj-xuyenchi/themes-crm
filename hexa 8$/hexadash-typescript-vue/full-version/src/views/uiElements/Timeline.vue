<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Timeline"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :lg="12" :xs="24">
          <sdCards title="Basic">
            <TimeLinePointerIconWrap>
              <a-timeline>
                <a-timeline-item class="timeline-primary">
                  <template #dot>
                    <SwRocket size="20" :color="themeColor['primary-color']" />
                  </template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
                <a-timeline-item class="timeline-info">
                  <template #dot> <SwShieldCheck size="20" :color="themeColor['info-color']" /></template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
                <a-timeline-item class="timeline-warning">
                  <template #dot>
                    <SwPenTool size="24" :color="themeColor['warning-color']" />
                  </template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
                <a-timeline-item class="timeline-pink">
                  <template #dot>
                    <SwNotification size="17" color="#FF69A5" />
                  </template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
                <a-timeline-item class="timeline-success">
                  <template #dot>
                    <SwUsers size="21" :color="themeColor['success-color']" />
                  </template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
                <a-timeline-item class="timeline-danger">
                  <template #dot>
                    <SwLayers size="21" :color="themeColor['danger-color']" />
                  </template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
                <a-timeline-item class="timeline-primary">
                  <template #dot>
                    <SwPicture size="21" :color="themeColor['primary-color']" />
                  </template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
                <a-timeline-item class="timeline-pink">
                  <template #dot>
                    <SwClock size="21" color="#ff69a5" />
                  </template>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <span class="tags">HTML,CSS,VueJS</span>
                </a-timeline-item>
              </a-timeline>
            </TimeLinePointerIconWrap>
          </sdCards>
          <sdCards title="Basic">
            <TimelineNormalWrap>
              <a-timeline>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
              </a-timeline>
            </TimelineNormalWrap>
          </sdCards>
          <TimelineNormalWrap>
            <sdCards title="Alternate">
              <a-timeline mode="alternate">
                <a-timeline-item class="custom-dot">Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <ClockCircleOutlined :style="{ fontSize: '16px' }" />
                  </template>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </a-timeline-item>
                <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <ClockCircleOutlined :style="{ fontSize: '16px' }" />
                  </template>
                  Technical testing 2015-09-01
                </a-timeline-item>
              </a-timeline>
            </sdCards>
          </TimelineNormalWrap>
          <TimelineNormalWrap>
            <sdCards title="Custom">
              <a-timeline>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                <a-timeline-item color="red">
                  <template #dot>
                    <ClockCircleOutlined :style="{ fontSize: '16px' }" />
                  </template>
                  Technical testing 2015-09-01
                </a-timeline-item>
                <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
              </a-timeline>
            </sdCards>
          </TimelineNormalWrap>
        </a-col>
        <a-col :lg="12" :xs="24">
          <TimelineNormalWrap>
            <sdCards title="Timeline 1">
              <a-timeline>
                <a-timeline-item class="active">
                  <template #dot>
                    <SwEllipse size="10" color="#ADB4D2" />
                  </template>
                  <div class="timeline-content-inner align-center-v justify-content-between">
                    <div class="timeline-content-text">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <span class="timeline-content-time">6:00 am</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#5F63F2" />
                  </template>
                  <div class="timeline-content-inner align-center-v justify-content-between">
                    <div class="timeline-content-text">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <span class="timeline-content-time">1 hrs</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#2C99FF" />
                  </template>
                  <div class="timeline-content-inner align-center-v justify-content-between">
                    <div class="timeline-content-text">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <span class="timeline-content-time">2 days</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#01B81A" />
                  </template>
                  <div class="timeline-content-inner align-center-v justify-content-between">
                    <div class="timeline-content-text">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <span class="timeline-content-time">3 weeks</span>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#FA8B0C" />
                  </template>
                  <div class="timeline-content-inner align-center-v justify-content-between">
                    <div class="timeline-content-text">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <span class="timeline-content-time">2 months</span>
                  </div>
                </a-timeline-item>
              </a-timeline>
            </sdCards>
          </TimelineNormalWrap>

          <TimelineBoxWrap>
            <sdCards title="Timeline 2">
              <a-timeline mode="alternate">
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#ADB4D2" />
                  </template>
                  <h2>10:00 AM</h2>
                  <div class="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the,
                    </p>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#5F63F2" />
                  </template>
                  <h2>10:00 AM</h2>
                  <div class="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the,
                    </p>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#2C99FF" />
                  </template>
                  <h2>10:00 AM</h2>
                  <div class="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the,
                    </p>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#01B81A" />
                  </template>
                  <h2>10:00 AM</h2>
                  <div class="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the,
                    </p>
                  </div>
                </a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <SwEllipse size="10" color="#FA8B0C" />
                  </template>
                  <h2>10:00 AM</h2>
                  <div class="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the,
                    </p>
                  </div>
                </a-timeline-item>
              </a-timeline>
            </sdCards>
          </TimelineBoxWrap>
          <TimelineNormalWrap>
            <sdCards title="Color">
              <a-timeline>
                <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item color="red">
                  <p>Solve initial network problems 1</p>
                  <p>Solve initial network problems 2</p>
                  <p>Solve initial network problems 3 2015-09-01</p>
                </a-timeline-item>
                <a-timeline-item>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </a-timeline-item>
                <a-timeline-item color="gray">
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </a-timeline-item>
                <a-timeline-item color="gray">
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </a-timeline-item>
              </a-timeline>
            </sdCards>
          </TimelineNormalWrap>

          <TimelineNormalWrap>
            <sdCards title="Right alternate">
              <a-timeline mode="right">
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                <a-timeline-item>
                  <template #dot>
                    <ClockCircleOutlined :style="{ fontSize: '16px' }" color="red" />
                  </template>
                  Technical testing 2015-09-01
                </a-timeline-item>
                <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
              </a-timeline>
            </sdCards>
          </TimelineNormalWrap>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { TimeLinePointerIconWrap, TimelineNormalWrap, TimelineBoxWrap } from './ui-elements-styled';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { Main } from '../styled';
import { themeColor } from '../../config/theme/themeVariables';

import {
  SwRocket,
  SwShieldCheck,
  SwPenTool,
  SwNotification,
  SwUsers,
  SwLayers,
  SwPicture,
  SwClock,
  SwEllipse,
} from '../../components/utilities/icons';
</script>
