<template>
  <sdPageHeader
    class="ninjadash-page-header-main"
    title="Introduction"
    :routes="PageRoutes"
  />
  <Main>
    <DocumentationStyleWrap>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards headless>
            <div class="ninjadash-template-documentation">
              <h2>Welcome</h2>
              <p>
                HexaDash is a feature-enriched Vue3 admin template and
                component library with hundreds of ready-to-use components & 15
                custom apps. With its rich component library, the possibilities
                are limitless. The theme includes a beautiful dashboard, many
                ready-to-use hand-crafted components, widgets, pages, and many
                more. The components can be used very easily on any page. Most
                importantly, the theme is fully responsive and customizable.
                Meaning, it fits any device no matter whether it is a smartphone
                or a personal computer. Again, it's powerful and super flexible,
                which suits the best for web applications including CRM, CMS,
                Admin Panels, Dashboards, etc. Also, we have tried to implement
                the concept of modularity while developing this theme. And, it
                surely helps you to reduce the development time and cost. Again,
                this documentation is the ultimate guideline for all users from
                beginners to seasoned web developers.
              </p>
              <p>
                <strong>HexaDash</strong> has 5 Unique demo pages and 15 apps.
                It is a perfect solution for any kind of custom project like
                E-commerce, Project Management, Support, Educational Dashboard,
                CRM, Marketing Dashboard, and so on...
              </p>
              <p>
                <strong>HexaDash</strong> 150+ pages, 100+ components, 60+
                Charts, and 100+ widgets developed with a mobile-first design
                approach.
              </p>
              <h2>Featured App</h2>
              <ul>
                <li>Email</li>
                <li>Chat</li>
                <li>E-commerce</li>
                <li>Social App</li>
                <li>Project</li>
                <li>Calendar</li>
                <li>Users</li>
                <li>Contact</li>
                <li>Note</li>
                <li>Todo</li>
                <li>Kanban Board</li>
                <li>Import Export</li>
                <li>Task</li>
                <li>Support</li>
                <li>Learning App</li>
                <li>Job Search</li>
              </ul>

              <h2>Key Feature</h2>
              <p>
                HexaDash comes up with a host of incredible features listed
                below.
              </p>
              <ul>
                <li>Built with <strong>Vue 3</strong></li>
                <li>Modern Design</li>
                <li>Fully Responsive Design</li>
                <li>Vue 3 Styled Components</li>
                <li><strong>ant-design-vue 3.1.0-rc.2</strong> compatible</li>
                <li>
                  <strong>Firebase</strong> Authentication & CRUD with APIs
                </li>
                <li>
                  <strong>Axios</strong> CRUD with <strong>Rest APIs</strong>
                </li>
                <li><strong>Vuex</strong></li>
                <li>
                  <strong>Multi-language</strong> support with i18n ( JSON
                  object )
                </li>
                <li>Multiple Layouts</li>
                <li>
                  Vue 3 Library Based components<strong> (No jQuery)</strong>
                </li>
                <li>
                  Easy to Customize with <strong>Ant Design</strong> variables
                </li>
                <li>
                  Email, eCommerce, Calendar, Projects, Tasks, Supports,
                  Learning, Note, Contact, Calendar & many more apps.
                </li>
                <li>
                  Profile, Settings, Gallery, Pricing, Banners, Testimonial,
                  Faqs, Maintenance, 404, Terms & Conditions, Coming Soon, and
                  many more pages.
                </li>
                <li>Clean Code</li>
                <li>Async Loading</li>
                <li>Code Splitting</li>
              </ul>
              <h2>Layout Features</h2>
              <ul>
                <li>Light & Dark Mode Supported</li>
                <li>Sidebar & Top menu supported</li>
                <li>LTR & RTL Supported</li>
              </ul>
              <h2>Dependencies</h2>
              <ul>
                <li>Vue 3</li>
                <li>ant-design-vue</li>
                <li>Vuex</li>
                <li>Vue-router</li>
                <li>Composition api</li>
                <li>Styled Component</li>
                <li>No jQuery</li>
              </ul>
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </DocumentationStyleWrap>
  </Main>
</template>

<script>
import { defineComponent } from "vue";
import { Main } from "../styled";
import { DocumentationStyleWrap } from "./style";

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "Overview Page",
  },
];

export default defineComponent({
  components: { Main, DocumentationStyleWrap },
  setup() {
    return {
      PageRoutes,
    };
  },
});
</script>
