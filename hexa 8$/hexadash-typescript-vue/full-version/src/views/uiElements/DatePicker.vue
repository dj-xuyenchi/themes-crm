<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="DatePicker"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <DatePickerWrapper>
              <a-date-picker @change="onChange" />
              <br />
              <a-month-picker placeholder="Select month" @change="onChange" />
              <br />
              <a-range-picker @change="onChange" />
              <br />
              <a-week-picker placeholder="Select week" @change="onChange" />
            </DatePickerWrapper>
          </sdCards>
          <sdCards title="Date Formate">
            <DatePickerWrapper>
              <a-date-picker :default-value="dayjs('2015/01/01', dateFormat)" :format="dateFormat" />
              <br />
              <a-date-picker :default-value="dayjs('01/01/2015', dateFormatList[0])" :format="dateFormatList" />
              <br />
              <a-month-picker :default-value="dayjs('2015/01', monthFormat)" :format="monthFormat" />
              <br />
              <a-range-picker
                :default-value="[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]"
                :format="dateFormat"
              />
            </DatePickerWrapper>
          </sdCards>
          <sdCards title="Disabled">
            <DatePickerWrapper>
              <a-date-picker :default-value="dayjs('2015/01/01', dateFormat)" :format="dateFormat" disabled />
              <br />
              <a-date-picker
                :default-value="dayjs('01/01/2015', dateFormatList[0])"
                :format="dateFormatList"
                disabled
              />
              <br />
              <a-month-picker :default-value="dayjs('2015/01', monthFormat)" :format="monthFormat" disabled />
              <br />
              <a-range-picker
                :default-value="[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]"
                :format="dateFormat"
                disabled
              />
            </DatePickerWrapper>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Preset Ranges ">
            <DatePickerWrapper>
              <a-range-picker
                :ranges="{
                  Today: [dayjs(), dayjs()],
                  'This Month': [dayjs(), dayjs().endOf('month')],
                }"
                @change="onChange"
              />
              <br />
              <a-range-picker
                :ranges="{
                  Today: [dayjs(), dayjs()],
                  'This Month': [dayjs(), dayjs().endOf('month')],
                }"
                show-time
                format="YYYY/MM/DD HH:mm:ss"
                @change="onChange"
              />
            </DatePickerWrapper>
          </sdCards>
          <sdCards title="Extra Footer">
            <DatePickerWrapper>
              <a-date-picker>
                <template v-slot:renderExtraFooter> extra footer </template>
              </a-date-picker>
              <a-date-picker show-time>
                <template v-slot:renderExtraFooter> extra footer </template>
              </a-date-picker>
              <a-range-picker>
                <template v-slot:renderExtraFooter> extra footer </template>
              </a-range-picker>
              <a-range-picker show-time>
                <template v-slot:renderExtraFooter> extra footer </template>
              </a-range-picker>
              <a-month-picker placeholder="Select month">
                <template v-slot:renderExtraFooter> extra footer </template>
              </a-month-picker>
            </DatePickerWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main, DatePickerWrapper } from '../styled';
import dayjs from 'dayjs';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const onChange = (date: any, dateString: any) => {
  console.log(date, dateString);
};
</script>
