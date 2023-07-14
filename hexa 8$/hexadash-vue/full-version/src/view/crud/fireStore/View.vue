<template>
    <RecordViewWrapper>
        <sdPageHeader title="Data List" routes="">
            <template #subTitle>
                <div>
                    <sdButton class="btn-add_new" size="default" type="primary">
                        <router-link to="/crud/fireStore-add">
                            <sdFeatherIcons type="plus" size="14" /> Add New
                        </router-link>
                    </sdButton>
                </div>
            </template>
            <template #buttons
                ><div class="search-box">
                    <span class="search-icon">
                        <sdFeatherIcons type="search" size="14" />
                    </span>
                    <input
                        @keyup="onHandleSearch"
                        v-model="searchValue"
                        type="text"
                        name="recored-search"
                        placeholder="Search Here"
                    /></div
            ></template>
        </sdPageHeader>
        <Main>
            <a-row :gutter="15">
                <a-col class="w-100" :md="24">
                    <sdCards headless>
                        <div v-if="isLoading" class="spin">
                            <a-spin />
                        </div>

                        <div v-else>
                            <TableWrapper
                                class="table-data-view table-responsive"
                            >
                                <a-table
                                    :rowSelection="rowSelection"
                                    :pagination="{
                                        pageSize: 10,
                                        showSizeChanger: true,
                                    }"
                                    :dataSource="dataSource"
                                    :columns="columns"
                                />
                            </TableWrapper>
                        </div>
                    </sdCards>
                </a-col>
            </a-row>
        </Main>
    </RecordViewWrapper>
</template>
<script>
import { RecordViewWrapper } from './style';
import { Main, TableWrapper } from '../../styled';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import dayjs from 'dayjs';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Joining Date',
        dataIndex: 'jdate',
        key: 'jdate',
    },
    {
        title: 'Actions',
        dataIndex: 'action',
        key: 'action',
        width: '90px',
    },
];

const ViewPage = {
    name: 'ViewPage',
    components: { RecordViewWrapper, Main, TableWrapper },
    setup() {
        const { state, dispatch } = useStore();
        const crud = computed(() => state.fireStore.data);
        const isLoading = computed(() => state.fireStore.loading);
        const selectedRowKeys = ref([]);
        const searchValue = ref('');

        onMounted(() => {
            dispatch('fireStoreCrudGetData');
        });

        const handleDelete = (id) => {
            const confirm = window.confirm('Are you sure delete this?');
            if (confirm) {
                dispatch('fireStoreDataDelete', id);
            }
            return false;
        };

        const onHandleSearch = () => {
            dispatch('fireStoreDataSearch', searchValue.value);
        };

        const dataSource = computed(
            () =>
                crud.value.length &&
                crud.value.map((person, key) => {
                    const {
                        id,
                        name,
                        email,
                        company,
                        position,
                        join,
                        status,
                        city,
                        country,
                        image,
                    } = person;

                    return {
                        key: key + 1,
                        name: (
                            <div class='record-img align-center-v'>
                                <img
                                    src={
                                        image
                                            ? image
                                            : require('@/static/img/avatar/profileImage.png')
                                    }
                                    alt={id}
                                />
                                <span>
                                    <span>{name}</span>
                                    <span class='record-location'>
                                        {city},{country}
                                    </span>
                                </span>
                            </div>
                        ),
                        email,
                        company,
                        position,
                        jdate: dayjs(join).format('YYYY-MM-DD'),
                        status: (
                            <span class={`status ${status}`}>{status}</span>
                        ),
                        action: (
                            <div class='table-actions'>
                                <router-link
                                    class='edit'
                                    to={`/crud/fireStore-edit/${id}`}
                                >
                                    <unicon name='edit' size={14} />
                                </router-link>
                                &nbsp;&nbsp;&nbsp;
                                <router-link
                                    class='delete'
                                    onClick={() => handleDelete(id)}
                                    to='#'
                                >
                                    <unicon name='trash-alt' size={14} />
                                </router-link>
                            </div>
                        ),
                    };
                })
        );

        const onSelectChange = (selectedRowKey) => {
            selectedRowKeys.value = selectedRowKey;
        };

        const rowSelection = {
            selectedRowKeys,
            onChange: onSelectChange,
        };

        return {
            crud,
            isLoading,
            selectedRowKeys,
            onHandleSearch,
            handleDelete,
            rowSelection,
            onSelectChange,
            dataSource,
            columns,
            searchValue,
        };
    },
};

export default ViewPage;
</script>
