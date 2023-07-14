<template>
    <a-menu
        :open-keys="openKeys"
        v-model:selectedKeys="selectedKeys"
        :mode="mode"
        :theme="darkMode ? 'dark' : 'light'"
        class="scroll-menu"
        @openChange="onOpenChange"
        @click="onClick"
    >
        <a-sub-menu key="dashboard">
            <template #icon>
                <unicon name="create-dashboard"></unicon>
            </template>
            <template #title>{{ t('dashboard') }}</template>
            <a-menu-item @click="toggleCollapsed" key="home-one">
                <router-link to="/demo-one">
                    {{ t('demo') }} {{ t('1') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="home-two">
                <router-link to="/demo-two">
                    {{ t('demo') }} {{ t('2') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="home-three">
                <router-link to="/demo-three">
                    {{ t('demo') }} {{ t('3') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="home-four">
                <router-link to="/demo-four">
                    {{ t('demo') }} {{ t('4') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="home-five">
                <router-link to="/demo-five">
                    {{ t('demo') }} {{ t('5') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="demo-six">
                <router-link to="/demo-six">
                    {{ t('demo') }} {{ t('6') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="demo-seven">
                <router-link to="/demo-seven"
                    >{{ t('demo') }} {{ t('7') }}</router-link
                >
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="demo-eight">
                <router-link to="/demo-eight"
                    >{{ t('demo') }} {{ t('8') }}</router-link
                >
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="demo-nine">
                <router-link to="/demo-nine"
                    >{{ t('demo') }} {{ t('9') }}</router-link
                >
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="layout">
            <template #icon>
                <unicon name="window-section"></unicon>
            </template>
            <template #title>{{ t('layouts') }}</template>
            <a-menu-item @click="toggleCollapsed" key="light">
                <a
                    @click="
                        (e) => {
                            e.preventDefault();
                            toggleCollapsed();
                            modeChangeLight();
                        }
                    "
                    to="#"
                >
                    {{ t('light') }}{{ t('mode') }}
                </a>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="dark">
                <a
                    @click="
                        (e) => {
                            e.preventDefault();
                            toggleCollapsed();
                            modeChangeDark();
                        }
                    "
                    to="#"
                >
                    {{ t('dark') }}{{ t('mode') }}
                </a>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="topMenu">
                <a
                    @click="
                        (e) => {
                            e.preventDefault();
                            toggleCollapsed();
                            modeChangeTopNav();
                        }
                    "
                    to="#"
                >
                    {{ t('top') }}{{ t('menu') }}
                </a>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="sideMenu">
                <a
                    @click="
                        (e) => {
                            e.preventDefault();
                            toggleCollapsed();
                            modeChangeSideNav();
                        }
                    "
                    to="#"
                >
                    {{ t('side') }}{{ t('menu') }}
                </a>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="rtl">
                <a
                    @click="
                        (e) => {
                            e.preventDefault();
                            toggleCollapsed();
                            onRtlChange();
                        }
                    "
                    to="#"
                >
                    {{ t('rtl') }}
                </a>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="ltr">
                <a
                    @click="
                        (e) => {
                            e.preventDefault();
                            toggleCollapsed();
                            onLtrChange();
                        }
                    "
                    to="#"
                >
                    {{ t('ltr') }}
                </a>
            </a-menu-item>
        </a-sub-menu>

        <a-menu-item @click="toggleCollapsed" key="changelog">
            <template #icon>
                <unicon name="arrow-growth"></unicon>
            </template>
            <router-link to="/changelog">
                {{ t('changelog') }}
                <span class="badge badge-primary menuItem">{{
                    versions[0].version
                }}</span>
            </router-link>
        </a-menu-item>

        <NavTitle class="ninjadash-sidebar-nav-title">{{
            t('application')
        }}</NavTitle>
        <a-sub-menu key="mail">
            <template #icon>
                <unicon name="envelope"></unicon>
            </template>
            <template #title>{{ t('email') }}</template>
            <a-menu-item @click="toggleCollapsed" key="inbox">
                <router-link to="/app/mail/inbox"> {{ t('inbox') }} </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="singleMail">
                <router-link to="/app/mail-single/1585118055048">
                    {{ t('read') }}{{ t('email') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="chat">
            <template #icon>
                <unicon name="chat"></unicon>
            </template>
            <template #title>{{ t('chat') }}</template>
            <a-menu-item @click="toggleCollapsed" key="privateSingle">
                <router-link to="/app/chat/private/rofiq@gmail.com">
                    {{ t('private') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="groupSingle">
                <router-link to="/app/chat/group/1">
                    {{ t('group') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="allSingle">
                <router-link to="/app/chat/all/rofiq@gmail.com">
                    {{ t('all') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="ecommerce">
            <template #icon>
                <unicon name="shopping-cart"></unicon>
            </template>
            <template #title>{{ t('eCommerce') }}</template>
            <a-menu-item @click="toggleCollapsed" key="ecommerce-product">
                <router-link to="/app/ecommerce/product/grid">
                    {{ t('products') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="detail">
                <router-link to="/app/ecommerce/productDetails/5">
                    {{ t('product') }} {{ t('details') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="add-product">
                <router-link to="/app/ecommerce/add-product">
                    {{ t('product') }} {{ t('add') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="edit-product">
                <router-link to="/app/ecommerce/edit-product">
                    {{ t('product') }} {{ t('update') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="orders">
                <router-link to="/app/ecommerce/orders">
                    {{ t('orders') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="sellers">
                <router-link to="/app/ecommerce/sellers">
                    {{ t('sellers') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="invoice">
                <router-link to="/app/ecommerce/invoice">
                    {{ t('invoices') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="cart">
                <router-link to="/app/ecommerce/cart">
                    {{ t('cart') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="social">
            <template #icon>
                <unicon name="500px"></unicon>
            </template>
            <template #title>{{ t('social') }} {{ t('app') }}</template>
            <a-menu-item @click="toggleCollapsed" key="overview">
                <router-link to="/app/social/profile/overview">
                    {{ t('my') }} {{ t('profile') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="timeline">
                <router-link to="/app/social/profile/timeline">
                    {{ t('timeline') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="activity">
                <router-link to="/app/social/profile/activity">
                    {{ t('activity') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="calendar">
            <template #icon>
                <unicon name="schedule"></unicon>
            </template>
            <template #title>{{ t('calendar') }}</template>
            <a-menu-item @click="toggleCollapsed" key="month">
                <router-link to="/app/calendar/month">
                    {{ t('month') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="year">
                <router-link to="/app/calendar/year">
                    {{ t('year') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="day">
                <router-link to="/app/calendar/day">
                    {{ t('day') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="schedule">
                <router-link to="/app/calendar/schedule">
                    {{ t('schedule') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="users">
            <template #icon>
                <unicon name="users-alt"></unicon>
            </template>
            <template #title>{{ t('users') }}</template>
            <a-menu-item @click="toggleCollapsed" key="team">
                <router-link to="/app/users/team">
                    {{ t('team') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="user-grid">
                <router-link to="/app/users/users/user-grid">
                    {{ t('users') }} {{ t('grid') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="user-list">
                <router-link to="/app/users/users/user-list">
                    {{ t('users') }} {{ t('list') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="grid-style">
                <router-link to="/app/users/users/grid-style">
                    {{ t('users') }} {{ t('grid') }} {{ t('style') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="grid-group">
                <router-link to="/app/users/users/grid-group">
                    {{ t('users') }} {{ t('grid') }} {{ t('group') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="add-user">
                <router-link to="/app/users/add-user/info">
                    {{ t('add') }} {{ t('users') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="dataTable">
                <router-link to="/app/users/dataTable">
                    {{ t('users') }} {{ t('table') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="project">
            <template #icon>
                <unicon name="bag"></unicon>
            </template>
            <template #title>{{ t('project') }}</template>
            <a-menu-item @click="toggleCollapsed" key="project-grid">
                <router-link to="/app/project/project-grid">
                    {{ t('project') }} {{ t('grid') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="project-list">
                <router-link to="/app/project/project-list">
                    {{ t('project') }} {{ t('list') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="createProject">
                <router-link to="/app/createProject/create-grid">
                    {{ t('project') }} {{ t('create') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="projectDetails">
                <router-link to="/app/project/projectDetails/1">
                    {{ t('project') }} {{ t('details') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="contact">
            <template #icon>
                <unicon name="at"></unicon>
            </template>
            <template #title>{{ t('contact') }} </template>
            <a-menu-item @click="toggleCollapsed" key="contact-grid">
                <router-link to="/app/contact/contact-grid">
                    {{ t('contact') }} {{ t('grid') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="contact-list">
                <router-link to="/app/contact/contact-list">
                    {{ t('contact') }} {{ t('list') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="contact-create">
                <router-link to="/app/contact/contact-create">
                    {{ t('contact') }} {{ t('create') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="note">
            <template #icon>
                <unicon name="clipboard-notes"></unicon>
            </template>
            <template #title>{{ t('note') }} </template>
            <a-menu-item @click="toggleCollapsed" key="note-all">
                <router-link to="/app/note/all"> {{ t('all') }} </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="note-favorite">
                <router-link to="/app/note/favorite">
                    {{ t('favorite') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="note-personal">
                <router-link to="/app/note/personal">
                    {{ t('personal') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="note-work">
                <router-link to="/app/note/work"> {{ t('work') }} </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="social-note">
                <router-link to="/app/note/social">
                    {{ t('social') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="note-important">
                <router-link to="/app/note/important">
                    {{ t('important') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-menu-item @click="toggleCollapsed" key="to-do">
            <template #icon>
                <unicon name="check-square"></unicon>
            </template>
            <router-link to="/app/to-do">
                {{ t('to') }} {{ t('do') }}
            </router-link>
        </a-menu-item>

        <a-menu-item @click="toggleCollapsed" key="kanban">
            <template #icon>
                <unicon name="expand-arrows"></unicon>
            </template>
            <router-link to="/app/kanban">
                {{ t('kanban Board') }}
            </router-link>
        </a-menu-item>

        <a-sub-menu key="import-export">
            <template #icon>
                <unicon name="exchange"></unicon>
            </template>
            <template #title>{{ t('import') }} {{ t('export') }} </template>
            <a-menu-item @click="toggleCollapsed" key="import">
                <router-link to="/app/import"> {{ t('import') }} </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="export">
                <router-link to="/app/export"> {{ t('export') }} </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="task">
            <template #icon>
                <unicon name="file"></unicon>
            </template>
            <template #title>{{ t('task') }} </template>
            <a-menu-item @click="toggleCollapsed" key="all">
                <router-link to="/app/task/all"> {{ t('all') }} </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="favorites">
                <router-link to="/app/task/favorites">
                    {{ t('favorites') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="completed">
                <router-link to="/app/task/completed">
                    {{ t('completed') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="tickets">
            <template #icon>
                <unicon name="headphones"></unicon>
            </template>
            <template #title>{{ t('support') }} </template>
            <a-menu-item @click="toggleCollapsed" key="tickets">
                <router-link to="/app/support/tickets">
                    {{ t('tickets') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="ticketDetails">
                <router-link to="/app/support/ticketDetails/01">
                    {{ t('ticket') }} {{ t('details') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="learning">
            <template #icon>
                <unicon name="at"></unicon>
            </template>
            <template #title>{{ t('learning') }} {{ t('app') }} </template>
            <a-menu-item @click="toggleCollapsed" key="course">
                <router-link to="/app/learning/course">
                    {{ t('course') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="courseDetails">
                <router-link to="/app/learning/courseDetails/1">
                    {{ t('course') }} {{ t('single') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="jobSearch">
            <template #icon>
                <unicon name="headphones"></unicon>
            </template>
            <template #title>{{ t('job') }} {{ t('search') }} </template>
            <a-menu-item @click="toggleCollapsed" key="grid">
                <router-link to="/app/jobSearch/grid">
                    {{ t('grid') }} {{ t('style') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="list">
                <router-link to="/app/jobSearch/list">
                    {{ t('list') }} {{ t('style') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <NavTitle class="ninjadash-sidebar-nav-title"
            >{{ t('crud') }}
        </NavTitle>
        <a-sub-menu key="axios">
            <template #icon>
                <unicon name="server"></unicon>
            </template>
            <template #title>{{ t('axios') }} </template>
            <a-menu-item @click="toggleCollapsed" key="axios-view">
                <router-link to="/crud/axios-view">
                    {{ t('view') }} {{ t('all') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="axios-add">
                <router-link to="/crud/axios-add">
                    {{ t('add') }} {{ t('new') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="fireStore">
            <template #icon>
                <unicon name="database"></unicon>
            </template>
            <template #title>{{ t('firestore') }} </template>
            <a-menu-item @click="toggleCollapsed" key="fireStore-view">
                <router-link to="/crud/fireStore-view">
                    {{ t('view') }} {{ t('all') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="fireStore-add">
                <router-link to="/crud/fireStore-add">
                    {{ t('add') }} {{ t('new') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <NavTitle class="ninjadash-sidebar-nav-title"
            >{{ t('features') }}
        </NavTitle>
        <a-sub-menu key="components">
            <template #icon>
                <unicon name="layer-group"></unicon>
            </template>
            <template #title>{{ t('ui elements') }} </template>
            <a-menu-item @click="toggleCollapsed" key="alerts">
                <router-link to="/components/alerts">
                    {{ t('alerts') }}
                </router-link>
            </a-menu-item>

            <a-menu-item @click="toggleCollapsed" key="avatar">
                <router-link to="/components/avatar">
                    {{ t('avatar') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="badge">
                <router-link to="/components/badge">
                    {{ t('badge') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="breadcrumb">
                <router-link to="/components/breadcrumb">
                    {{ t('breadcrumb') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="button">
                <router-link to="/components/button">
                    {{ t('button') }}
                </router-link>
            </a-menu-item>

            <a-menu-item @click="toggleCollapsed" key="calendar">
                <router-link to="/components/calendar">
                    {{ t('calendar') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="cards">
                <router-link to="/components/cards">
                    {{ t('cards') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="carousel">
                <router-link to="/components/carousel">
                    {{ t('carousel') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="cascader">
                <router-link to="/components/cascader">
                    {{ t('cascader') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="checkbox">
                <router-link to="/components/checkbox">
                    {{ t('checkbox') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="collapse">
                <router-link to="/components/collapse">
                    {{ t('collapse') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="comments">
                <router-link to="/components/comments">
                    {{ t('comments') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="dash-base">
                <router-link to="/components/dash-base">
                    {{ t('dashboard') }} {{ t('base') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="datePicker">
                <router-link to="/components/datePicker">
                    {{ t('datepicker') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="drag">
                <router-link to="/components/drag-drop">
                    {{ t('drag') }} & {{ t('drop') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="drawer">
                <router-link to="/components/drawer">
                    {{ t('drawer') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="dropdown">
                <router-link to="/components/dropdown">
                    {{ t('dropdown') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="empty">
                <router-link to="/components/empty">
                    {{ t('empty') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="grids">
                <router-link to="/components/grid">
                    {{ t('grid') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="input">
                <router-link to="/components/input">
                    {{ t('input') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="list">
                <router-link to="/components/list">
                    {{ t('list') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="menu">
                <router-link to="/components/menu">
                    {{ t('menu') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="message">
                <router-link to="/components/message">
                    {{ t('message') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="modal">
                <router-link to="/components/modal">
                    {{ t('modals') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="notification">
                <router-link to="/components/notification">
                    {{ t('notification') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="pageHeader">
                <router-link to="/components/pageHeader">
                    {{ t('page') }} {{ t('headers') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="pagination">
                <router-link to="/components/pagination">
                    {{ t('paginations') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="popConfirm">
                <router-link to="/components/popConfirm">
                    {{ t('popconfirm') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="popover">
                <router-link to="/components/popover"> {{ t('popover') }} </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="progressbar">
                <router-link to="/components/progressbar">
                    {{ t('progress') }} {{ t('bar') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="radio">
                <router-link to="/components/radio">
                    {{ t('radio') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="rate">
                <router-link to="/components/rate">
                    {{ t('rate') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="result">
                <router-link to="/components/result">
                    {{ t('result') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="select">
                <router-link to="/components/select">
                    {{ t('select') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="skeleton">
                <router-link to="/components/skeleton">
                    {{ t('skeleton') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="slider">
                <router-link to="/components/slider">
                    {{ t('slider') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="spiner">
                <router-link to="/components/spiner">
                    {{ t('spinner') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="statistic">
                <router-link to="/components/statistic">
                    {{ t('statistics') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="steps">
                <router-link to="/components/steps">
                    {{ t('steps') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="switch">
                <router-link to="/components/switch">
                    {{ t('switch') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="tabs">
                <router-link to="/components/tabs">
                    {{ t('tabs') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="tags">
                <router-link to="/components/tags">
                    {{ t('tags') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="timeline">
                <router-link to="/components/timeline">
                    {{ t('timeline') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="time-picker">
                <router-link to="/components/time-picker">
                    {{ t('timepicker') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="tree-select">
                <router-link to="/components/tree-select">
                    {{ t('treeselect') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="upload">
                <router-link to="/components/upload">
                    {{ t('upload') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="charts">
            <template #icon>
                <unicon name="chart-bar"></unicon>
            </template>
            <template #title>{{ t('charts') }}</template>
            <a-menu-item @click="toggleCollapsed" key="chart-js">
                <router-link to="/chart/chart-js">
                    {{ t('chart') }} {{ t('js') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="googleChart">
                <router-link to="/chart/google-chart">
                    {{ t('google') }} {{ t('chart') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="apexchart">
            <template #icon>
                <unicon name="chart"></unicon>
            </template>
            <template #title>{{ t('apex') }} {{ t('charts') }} </template>
            <a-menu-item @click="toggleCollapsed" key="columnChart">
                <router-link to="/apexchart/column-chart">
                    {{ t('column') }} {{ t('charts') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="lineChart">
                <router-link to="/apexchart/line-chart">
                    {{ t('line') }} {{ t('charts') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="areaChart">
                <router-link to="/apexchart/area-chart">
                    {{ t('area') }} {{ t('charts') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="barChart">
                <router-link to="/apexchart/bar-chart">
                    {{ t('bar') }} {{ t('charts') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="pieChart">
                <router-link to="/apexchart/pie-chart">
                    {{ t('pie') }} {{ t('charts') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="radialbarChart">
                <router-link to="/apexchart/radialbar-chart">
                    {{ t('radialbar') }} {{ t('charts') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="radarChart">
                <router-link to="/apexchart/radar-charts">
                    {{ t('radar') }} {{ t('charts') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="forms">
            <template #icon>
                <unicon name="compact-disc"></unicon>
            </template>
            <template #title>{{ t('forms') }} </template>
            <a-menu-item @click="toggleCollapsed" key="formLayout">
                <router-link to="/forms/form-layout">
                    {{ t('form') }} {{ t('layout') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="formElements">
                <router-link to="/forms/form-elements">
                    {{ t('form') }} {{ t('elements') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="formComponents">
                <router-link to="/forms/form-components">
                    {{ t('form') }} {{ t('components') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="formValidation">
                <router-link to="/forms/form-validation">
                    {{ t('form') }} {{ t('validation') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="tables">
            <template #icon>
                <unicon name="table"></unicon>
            </template>
            <template #title>{{ t('table') }} </template>
            <a-menu-item @click="toggleCollapsed" key="table">
                <router-link to="/tables/basic">
                    {{ t('basic') }} {{ t('table') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="DataTable">
                <router-link to="/tables/dataTable">
                    {{ t('data') }} {{ t('table') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="widgets">
            <template #icon>
                <unicon name="server"></unicon>
            </template>
            <template #title>{{ t('widgets') }} </template>
            <a-menu-item @click="toggleCollapsed" key="widgetCharts">
                <router-link to="/widgets/chart">
                    {{ t('charts') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="widgetsCard">
                <router-link to="/widgets/card"> {{ t('card') }} </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="widgetMixed">
                <router-link to="/widgets/mixed">
                    {{ t('mixed') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="wizard">
            <template #icon>
                <unicon name="square-full"></unicon>
            </template>
            <template #title>{{ t('Wizards') }} </template>
            <a-menu-item @click="toggleCollapsed" key="wizard1">
                <router-link to="/wizard/wizard1">
                    {{ t('Wizard') }} {{ t('1') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="wizard2">
                <router-link to="/wizard/wizard2">
                    {{ t('Wizard') }} {{ t('2') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="wizard3">
                <router-link to="/wizard/wizard3">
                    {{ t('Wizard') }} {{ t('3') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="wizard4">
                <router-link to="/wizard/wizard4">
                    {{ t('Wizard') }} {{ t('4') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="wizard5">
                <router-link to="/wizard/wizard5">
                    {{ t('Wizard') }} {{ t('5') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="wizard6">
                <router-link to="/wizard/wizard6">
                    {{ t('Wizard') }} {{ t('6') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="icons">
            <template #icon>
                <unicon name="apps"></unicon>
            </template>
            <template #title>{{ t('icons') }} </template>
            <a-menu-item @click="toggleCollapsed" key="unicons">
                <router-link to="/icons/unicons">
                    {{ t('unicons') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="featherIcons">
                <router-link to="/icons/featherIcons">
                    {{ t('feather') }} {{ t('icons') }}
                </router-link>
            </a-menu-item>
            <!-- <a-menu-item @click="toggleCollapsed" key="antdIcons">
        <router-link to="/icons/antdIcons"> Ant Design Icons </router-link>
      </a-menu-item> -->
            <a-menu-item @click="toggleCollapsed" key="fa">
                <router-link to="/icons/fa">
                    {{ t('fontawesome') }} {{ t('icons') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="maps">
            <template #icon>
                <unicon name="map"></unicon>
            </template>
            <template #title>{{ t('maps') }} </template>
            <a-menu-item @click="toggleCollapsed" key="google">
                <router-link to="/maps/google">
                    {{ t('google') }} {{ t('maps') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="leaflet">
                <router-link to="/maps/leaflet">
                    {{ t('leaflet') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="vector">
                <router-link to="/maps/vector"> {{ t('vector') }} </router-link>
            </a-menu-item>
        </a-sub-menu>

        <NavTitle class="ninjadash-sidebar-nav-title"
            >{{ t('pages') }}
        </NavTitle>
        <a-sub-menu key="settings">
            <template #icon>
                <unicon name="setting"></unicon>
            </template>
            <template #title>{{ t('settings') }} </template>
            <a-menu-item @click="toggleCollapsed" key="profile-settings">
                <router-link to="/page/profile-settings">
                    {{ t('settings') }}
                </router-link>
            </a-menu-item>

            <a-menu-item @click="toggleCollapsed" key="set-profile">
                <router-link to="/page/profile-settings/profile">
                    {{ t('profile') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="set-account">
                <router-link to="/page/profile-settings/account">
                    {{ t('account') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="set-password">
                <router-link to="/page/profile-settings/password">
                    {{ t('password') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="set-social">
                <router-link to="/page/profile-settings/social">
                    {{ t('social') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="set-notification">
                <router-link to="/page/profile-settings/notification">
                    {{ t('notification') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-menu-item @click="toggleCollapsed" key="gallery">
            <template #icon>
                <unicon name="images"></unicon>
            </template>
            <router-link to="/page/gallery"> {{ t('gallery') }} </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="pricing">
            <template #icon>
                <unicon name="usd-circle"></unicon>
            </template>
            <router-link to="/page/pricing"> {{ t('pricing') }} </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="banners">
            <template #icon>
                <unicon name="presentation"></unicon>
            </template>
            <router-link to="/page/banners"> {{ t('banners') }} </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="testimonials">
            <template #icon>
                <unicon name="book-open"></unicon>
            </template>
            <router-link to="/page/testimonials">
                {{ t('testimonials') }}
            </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="faq`s">
            <template #icon>
                <unicon name="question-circle"></unicon>
            </template>
            <router-link to="/page/faqs"> {{ t('faqs') }} </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="search">
            <template #icon>
                <unicon name="search"></unicon>
            </template>
            <router-link to="/page/search"> {{ t('search') }} </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="starter">
            <template #icon>
                <unicon name="circle"></unicon>
            </template>
            <router-link to="/starter">
                {{ t('blank') }} {{ t('page') }}
            </router-link>
        </a-menu-item>
        <a-sub-menu key="knowledgebase">
            <template #icon>
                <unicon name="book-alt"></unicon>
            </template>
            <template #title>{{ t('knowledge') }} {{ t('base') }} </template>
            <a-menu-item @click="toggleCollapsed" key="base">
                <router-link to="/page/knowledgebase/base/plugins">
                    {{ t('knowledge') }} {{ t('base') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="all-articles">
                <router-link to="/page/knowledgebase/all-articles">
                    {{ t('all') }} {{ t('articles') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="knowledge-base-singale">
                <router-link to="/page/knowledgebase/single/1">
                    {{ t('single') }} {{ t('articles') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="blog">
            <template #icon>
                <unicon name="document-layout-left"></unicon>
            </template>
            <template #title>{{ t('blog') }} </template>
            <a-menu-item @click="toggleCollapsed" key="blog1">
                <router-link to="/page/blog/blog1">
                    {{ t('blog') }} {{ t('one') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="blog2">
                <router-link to="/page/blog/blog2">
                    {{ t('blog') }} {{ t('two') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="blog3">
                <router-link to="/page/blog/blog3">
                    {{ t('blog') }} {{ t('three') }}
                </router-link>
            </a-menu-item>
            <a-menu-item @click="toggleCollapsed" key="details">
                <router-link to="/page/blog/details/1">
                    {{ t('blog') }} {{ t('details') }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-menu-item @click="toggleCollapsed" key="support">
            <template #icon>
                <unicon name="headphones"></unicon>
            </template>
            <router-link to="/page/support">
                {{ t('support') }} {{ t('center') }}
            </router-link>
        </a-menu-item>

        <a-menu-item @click="toggleCollapsed" key="maintenance">
            <template #icon>
                <unicon name="airplay"></unicon>
            </template>
            <router-link to="/page/maintenance">
                {{ t('maintanance') }}
            </router-link>
        </a-menu-item>

        <a-menu-item @click="toggleCollapsed" key="404">
            <template #icon>
                <unicon name="info-circle"></unicon>
            </template>
            <router-link to="/page/404"> {{ t('404') }} </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="comingSoon">
            <template #icon>
                <unicon name="clock"></unicon>
            </template>
            <router-link to="/page/comingSoon">
                {{ t('coming') }} {{ t('soon') }}
            </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="termsConditions">
            <template #icon>
                <unicon name="file-shield-alt"></unicon>
            </template>
            <router-link to="/page/termsConditions">
                {{ t('terms') }} & {{ t('conditions') }}
            </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script>
import {
    computed,
    reactive,
    ref,
    toRefs,
    watch,
    watchEffect,
    defineComponent,
} from 'vue';
import VueTypes from 'vue-types';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import versions from '../demoData/changelog.json';
import { NavTitle } from './style';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'AsideItems',
    props: {
        toggleCollapsed: VueTypes.func,
        events: VueTypes.object,
    },
    components: {
        NavTitle,
    },
    setup(props) {
        const { t } = useI18n();
        const store = useStore();
        const darkMode = computed(() => store.state.themeLayout.data);
        const mode = ref('inline');
        const { events } = toRefs(props);
        const {
            onRtlChange,
            onLtrChange,
            modeChangeDark,
            modeChangeLight,
            modeChangeTopNav,
            modeChangeSideNav,
        } = events.value;

        const router = computed(() => useRoute());
        const state = reactive({
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
            selectedKeys: ['home'],
            openKeys: ['dashboard'],
            preOpenKeys: ['dashboard'],
        });

        const onOpenChange = (keys) => {
            state.openKeys =
                keys[keys.length - 1] !== 'recharts'
                    ? [keys.length && keys[keys.length - 1]]
                    : keys;
        };

        const onClick = (item) => {
            if (item.keyPath.length === 1) state.openKeys = [];
        };

        watchEffect(() => {
            if (router.value.matched.length) {
                if (router.value.matched.length > 2) {
                    state.selectedKeys = [router.value.matched[2].name];
                    state.openKeys = [router.value.matched[1].name];
                    state.preOpenKeys = [router.value.matched[1].name];
                } else if (router.value.matched.length > 3) {
                    state.selectedKeys = [router.value.matched[3].name];
                    state.openKeys = [router.value.matched[1].name];
                    state.preOpenKeys = [router.value.matched[1].name];
                } else {
                    state.selectedKeys = [router.value.matched[1].name];
                    state.openKeys = [router.value.matched[1].name];
                    state.preOpenKeys = [router.value.matched[1].name];
                }
            }
        });

        watch(
            () => state.openKeys,
            (val, oldVal) => {
                state.preOpenKeys = oldVal;
            }
        );

        return {
            mode,
            ...toRefs(state),
            darkMode,
            onRtlChange,
            onLtrChange,
            modeChangeDark,
            modeChangeLight,
            modeChangeTopNav,
            modeChangeSideNav,
            versions,
            onOpenChange,
            onClick,
            t,
        };
    },
});
</script>
