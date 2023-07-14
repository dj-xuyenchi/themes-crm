<template>
  <div>
    <sdPageHeader title="Credit Page" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <DocumentationStyleWrap>
        <a-row :gutter="25">
          <a-col :sm="24" :xs="24">
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <h2>Credits/Plugins</h2>
                <p>
                  Here is the list of plugin with the official documentation.
                  <strong>HexaDash</strong> won't be easy to build without
                  using them and we are thankful to them.
                </p>
                <div class="card-table table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Plugins</th>
                        <th>Url</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Vue CLI</td>
                        <td>
                          <a href="">https://cli.vuejs.org/</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Vue</td>
                        <td><a href="">https://vuejs.org/index.html</a></td>
                      </tr>
                      <tr>
                        <td>Vue Composition API</td>
                        <td>
                          <a href=""
                            >https://vuejs.org/guide/extras/composition-api-faq.html</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Vue Router</td>
                        <td>
                          <a href="">https://router.vuejs.org/</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Vuex</td>
                        <td><a href="">https://vuex.vuejs.org/</a></td>
                      </tr>
                      <tr>
                        <td>Webpack 4+</td>
                        <td><a href="">https://webpack.js.org/</a></td>
                      </tr>
                      <tr>
                        <td>Ant Design</td>
                        <td><a href="">https://antdv.com/</a></td>
                      </tr>
                      <tr>
                        <td>Moment js</td>
                        <td><a href="">https://momentjs.com/</a></td>
                      </tr>
                      <tr>
                        <td>Styled Components</td>
                        <td><a href="">https://styled-components.com/</a></td>
                      </tr>
                      <tr>
                        <td>Vue Types</td>
                        <td>
                          <a href="">https://dwightjack.github.io/vue-types</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Axios</td>
                        <td><a href="">https://github.com/axios/axios</a></td>
                      </tr>
                      <tr>
                        <td>Firebase</td>
                        <td>
                          <a href="https://firebase.google.com/"
                            >https://firebase.google.com/</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Chart js</td>
                        <td>
                          <a href="https://www.chartjs.org/"
                            >https://www.chartjs.org/</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Apex Chart</td>
                        <td>
                          <a href="https://apexcharts.com/"
                            >https://apexcharts.com/</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Google Chart js</td>
                        <td>
                          <a
                            href="https://www.npmjs.com/package/vue3-googl-chart"
                            >https://www.npmjs.com/package/vue3-googl-chart</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Font Awesome</td>
                        <td>
                          <a href="https://fontawesome.com/"
                            >https://fontawesome.com/</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Unicons</td>
                        <td>
                          <a href="https://www.npmjs.com/package/vue-unicons"
                            >https://www.npmjs.com/package/vue-unicons</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Vue3 Perfect Scrollbar</td>
                        <td>
                          <a
                            href="https://www.npmjs.com/package/vue3-perfect-scrollbar"
                            >https://www.npmjs.com/package/vue3-perfect-scrollbar</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Swiper</td>
                        <td>
                          <a href="https://www.npmjs.com/package/swiper"
                            >https://www.npmjs.com/package/swiper</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Vue Masonry</td>
                        <td>
                          <a href="https://www.npmjs.com/package/vue-masonry"
                            >https://www.npmjs.com/package/vue-masonry</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </sdCards>
          </a-col>
        </a-row>
      </DocumentationStyleWrap>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { defineComponent } from "vue";
import { DocumentationStyleWrap } from "./style";

export default defineComponent({
  name: "Credits",
  components: {
    Main,
    DocumentationStyleWrap,
  },
});
</script>
