<script setup lang="ts">
import { SwEllipse } from '@/components/utilities/icons';
import { TimelineNormalWrap } from '../../uiElements/ui-elements-styled';
import { BorderLessHeading } from '../../styled';
import { TimelineStyleWrap } from '../style';
</script>

<template>
  <BorderLessHeading>
    <TimelineStyleWrap>
      <TimelineNormalWrap>
        <sdCards title="Timeline" more>
          <template #more>
            <router-link to="#">
              <unicon name="print" width="16"></unicon>
              <span>Printer</span>
            </router-link>
            <router-link to="#">
              <unicon name="book-open" width="16"></unicon>
              <span>PDF</span>
            </router-link>
            <router-link to="#">
              <unicon name="file-alt" width="16"></unicon>
              <span>Google Sheets</span>
            </router-link>
            <router-link to="#">
              <unicon name="x" width="16"></unicon>
              <span>Excel (XLSX)</span>
            </router-link>
            <router-link to="#">
              <unicon name="file" width="16"></unicon>
              <span>CSV</span>
            </router-link>
          </template>
          <a-timeline>
            <a-Timeline-item>
              <template #dot>
                <SwEllipse :size="10" color="#8231D3" />
              </template>
              <p>
                <span>Create a services site 2015-09-01</span>
                <span class="ninjadash-time">10 minutes</span>
              </p>
            </a-Timeline-item>

            <a-Timeline-item>
              <template #dot>
                <SwEllipse :size="10" color="#5840FF" />
              </template>
              <p>
                <span>Solve initial network problems 2015-09-01</span>
                <span class="ninjadash-time">10 minutes</span>
              </p>
            </a-Timeline-item>

            <a-Timeline-item>
              <template #dot>
                <SwEllipse :size="10" color="#01B81A" />
              </template>
              <p>
                <span>Network problems being solved 2015-09-01</span>
                <span class="ninjadash-time">10 minutes</span>
              </p>
            </a-Timeline-item>

            <a-Timeline-item>
              <template #dot>
                <SwEllipse :size="10" color="#00AAFF" />
              </template>
              <p>
                <span>Technical testing 2015-09-01</span>
                <span class="ninjadash-time">10 minutes</span>
              </p>
            </a-Timeline-item>

            <a-Timeline-item>
              <template #dot>
                <SwEllipse :size="10" color="#FA8B0C" />
              </template>
              <p>
                <span>Network problems being solved 2015-09-01</span>
                <span class="ninjadash-time">10 minutes</span>
              </p>
            </a-Timeline-item>

            <a-Timeline-item>
              <template #dot>
                <SwEllipse :size="10" color="#FF0F0F" />
              </template>
              <p>
                <span>Solve initial network problems 2015-09-01</span>
                <span class="ninjadash-time">10 minutes</span>
              </p>
            </a-Timeline-item>
          </a-timeline>
        </sdCards>
      </TimelineNormalWrap>
    </TimelineStyleWrap>
  </BorderLessHeading>
</template>
