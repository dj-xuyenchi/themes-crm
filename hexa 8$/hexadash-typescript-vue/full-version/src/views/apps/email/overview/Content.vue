<script setup lang="tsx">
import dayjs from 'dayjs';
import { Style, EmailAuthor, EmailHeader } from './style';
import Topbar from './Topbar.vue';
import { textRefactor } from '../../../../components/utilities/utilities';
import { useStore } from 'vuex';
import { computed, ref, toRefs } from 'vue';

const props = defineProps({
  searchData: {
    type: Array,
    required: true,
    default: () => [],
  },
  email: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const { state, dispatch } = useStore();
const rtl = computed(() => state.themeLayout.rtlData);
const { email, searchData } = toRefs(props);
const emails: any = computed(() => email.value);

const selectedRowKeys: any = ref([]);
const notData = ref(searchData);
const sort = ref(false);
const sortedInfo = ref([]);

const onHandleSort = (e: Event) => {
  e.preventDefault();
  sort.value = !sort.value;
  if (sort.value) {
    dispatch('onSortingAscending');
  } else {
    dispatch('onSortingDescending');
  }
};
const refreshState = (e: Event) => {
  e.preventDefault();
  emails.value = email;
};

const onStaredChange = (id: number | string) => {
  dispatch('onStarUpdate', id);
};

const columns = computed(() => [
  {
    title: <Topbar refreshState={refreshState} />,
    dataIndex: 'name',
  },
  {
    title: (
      <div class="email-top-search">
        <sdAutoComplete placeholder="Search mail" dataSource={searchData.value} width="80%" patterns />
      </div>
    ),
    dataIndex: 'content',
  },
  {
    title: (
      <>
        <div class="email-top-right d-flex align-items-center">
          <span class="page-number">1 - 50 of 235</span>
          <div class="pagination-slider">
            <router-link class="btn-paging" to="#">
              <unicon name={!rtl.value ? 'angle-left' : 'angle-right'} width="18"></unicon>
            </router-link>
            <router-link class="btn-paging" to="#">
              <unicon name={rtl.value ? 'angle-left' : 'angle-right'} width="18"></unicon>
            </router-link>
          </div>
          <div class="email-extra">
            <router-link onClick={onHandleSort} to="#">
              <unicon name="sliders-v-alt" width="16"></unicon>
            </router-link>
            <sdDropdown
              overlay={
                <div>
                  <router-link to="#">
                    <span>Newest</span>
                  </router-link>
                  <router-link to="#">
                    <span>Oldest</span>
                  </router-link>
                  <router-link to="#">
                    <span>Unread</span>
                  </router-link>
                </div>
              }
            >
              <router-link to="#">
                <unicon name="ellipsis-v" width="18"></unicon>
              </router-link>
            </sdDropdown>
          </div>
        </div>
      </>
    ),
    dataIndex: 'time',
    key: 'time',
  },
]);

const data = computed(() =>
  emails.value.map((inbox: any, key: number) => {
    const { id, type, email, userName, status, img, subject, body, attach, stared } = inbox;
    const same = dayjs(id).format('MM-DD-YYYY') === dayjs().format('MM-DD-YYYY');
    return {
      key: id,
      name: (
        <EmailAuthor>
          <router-link
            onClick={(e: Event) => {
              e.preventDefault();
              onStaredChange(id);
            }}
            to="#"
            class={stared ? 'starActive' : 'starDeactivate'}
          >
            <unicon name="star" width="18"></unicon>
          </router-link>
          <img src={`/src/assets/img/chat-author/${img}`} alt="" />
          <sdHeading as="h5">
            <a>{userName}</a>
          </sdHeading>
        </EmailAuthor>
      ),
      email,
      status,
      content: (
        <EmailHeader>
          <sdHeading as="h5">
            <router-link to={`/app/mail-single/${id}`}>{subject}</router-link>
            <span class={`mail-badge ${key <= 1 ? 'primary' : ''}`}>{type}</span>
          </sdHeading>
          <p>{textRefactor(body, 10)}</p>
          {attach.length
            ? attach.map((item: any) => (
                <a key={item} class="btn-attachment" download href={`/src/assets/img/email/${item}`}>
                  <unicon name="paperclip" width="14"></unicon>
                  {item}
                </a>
              ))
            : null}
        </EmailHeader>
      ),
      time: <span class="email-time">{same ? dayjs(id).format('hh:mm A') : dayjs(id).format('MMM D, YYYY')}</span>,
    };
  }),
);

const handleChange = (_: any, __: any, sorter: any) => {
  sortedInfo.value = sorter;
};

const onRowSelection = (filterObj: any) => {
  const { filter, byValue } = filterObj;

  const newSelectedRowKeys = emails.value
    .filter((value: any) => {
      return value[filter] === byValue;
    })
    .map((item: any) => item.id);
  selectedRowKeys.value = newSelectedRowKeys;
};

const onSelectChange = (selectedRowKey: number) => {
  selectedRowKeys.value = selectedRowKey;
};

const rowSelection: any = {
  selectedRowKeys,
  onChange: onSelectChange,
  hideDefaultSelections: true,
  selections: [
    {
      key: 'all',
      text: 'All',
      onSelect: () => {
        const newSelectedRowKeys = email.value.map((item: any) => item.id);
        selectedRowKeys.value = newSelectedRowKeys;
      },
    },
    {
      key: 'read',
      text: 'Read',
      onSelect: onRowSelection.bind(null, {
        filter: 'status',
        byValue: 'read',
      }),
    },
    {
      key: 'unread',
      text: 'Unread',
      onSelect: onRowSelection.bind(null, {
        filter: 'status',
        byValue: 'unread',
      }),
    },
    {
      key: 'stared',
      text: 'Stared',
      onSelect: onRowSelection.bind(null, {
        filter: 'stared',
        byValue: true,
      }),
    },
    {
      key: 'unstared',
      text: 'Unstared',
      onSelect: onRowSelection.bind(null, {
        filter: 'status',
        byValue: false,
      }),
    },
  ],
};
</script>

<template>
  <Style
    class="table-responsive"
    :rowSelection="rowSelection"
    :pagination="false"
    :columns="columns"
    :dataSource="data"
    @change="handleChange"
  ></Style>
</template>
