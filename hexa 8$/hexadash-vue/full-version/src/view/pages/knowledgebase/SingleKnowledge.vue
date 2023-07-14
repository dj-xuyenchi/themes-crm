<template>
  <div>
    <sdPageHeader title="Single Article" class="ninjadash-page-header-main">

    </sdPageHeader>
    <Main>
      <GeneralKnowledgeTop />
      <KnowledgebaseArticleWrap>
        <div class="knowledgebase-article-container">
          <div class="ninjadash_paginaion">
            <ul>
              <li>
                <router-link
                  class="active"
                  to="/page/knowledgebase/base/plugins"
                >
                  Doc Home
                </router-link>
              </li>
              <li>
                <router-link class="active" to="#">
                  Switch between accounts
                </router-link>
              </li>
              <li>
                <router-link class="active" to="#">
                  Introduction to Plugin
                </router-link>
              </li>
              <li>
                <span>Plugins {{ collapsed }}</span>
              </li>
            </ul>
            <template v-if="responsive <= 991">
              <sdButton
                type="primary"
                class="knowledge-sidebar-trigger"
                @click="toggleCollapsed"
              >
                <unicon
                  :name="collapsed ? 'align-left' : 'align-right'"
                  width="14"
                ></unicon>
              </sdButton>
            </template>
          </div>
          <SingleKnowledgeContent>
            <div v-if="responsive > 991">
              <SidebarNavWrap>
                <div class="knowledge-sidebar">
                  <h4 class="knowledge-sidebar__title">Plugins</h4>
                  <ul>
                    <li>
                      <a
                        @click="setOpen('menu1')"
                        :class="open === 'menu2' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        ></unicon>
                        <span class="menu-text">Introduction to Plugin</span>
                      </a>
                      <ul
                        :class="open === 'menu1' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#" class="active">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                        <li>
                          <a href="#">Understand your actions in lorem</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        @click="setOpen('menu2')"
                        :class="open === 'menu2' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        />
                        <span class="menu-text"
                          >Productivity tools for your Plugin admin & change
                          password</span
                        >
                      </a>
                      <ul
                        :class="open === 'menu2' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                        <li>
                          <a href="#">Understand your actions in lorem</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        @click="setOpen('menu3')"
                        :class="open === 'menu3' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        ></unicon>
                        <span class="menu-text"
                          >Download, install, and upgrade</span
                        >
                      </a>
                      <ul
                        :class="open === 'menu3' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        @click="setOpen('menu4')"
                        :class="open === 'menu4' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        ></unicon>
                        <span class="menu-text"
                          >Download, install, and upgrade</span
                        >
                      </a>
                      <ul
                        :class="open === 'menu4' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        @click="setOpen('menu5')"
                        :class="open === 'menu5' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        ></unicon>
                        <span class="menu-text">Explore plans & features</span>
                      </a>
                      <ul
                        :class="open === 'menu5' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        @click="setOpen('menu6')"
                        :class="open === 'menu6' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        ></unicon>
                        <span class="menu-text">Profile Settings</span>
                      </a>
                      <ul
                        :class="open === 'menu6' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        @click="setOpen('menu7')"
                        :class="open === 'menu7' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        ></unicon>
                        <span class="menu-text">Listings Management</span>
                      </a>
                      <ul
                        :class="open === 'menu7' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        @click="setOpen('menu8')"
                        :class="open === 'menu8' ? 'active' : ''"
                      >
                        <unicon
                          :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                          width="14"
                        ></unicon>
                        <span class="menu-text">Miscellaneous</span>
                      </a>
                      <ul
                        :class="open === 'menu8' ? 'submenu show' : 'submenu'"
                      >
                        <li>
                          <a href="#">Switch between accounts</a>
                        </li>
                        <li>
                          <a href="#"
                            >Installing vendor marketplace lorem vendor
                            marketplace
                          </a>
                        </li>
                        <li>
                          <a href="#">Stop getting emails from lorem</a>
                        </li>
                        <li>
                          <a href="#">Threads to organize discussions</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </SidebarNavWrap>
            </div>
            <div v-else>
              <div
                :class="
                  collapsed
                    ? 'knowledge-sidebar-wrap show'
                    : 'knowledge-sidebar-wrap hide'
                "
              >
                <SidebarNavWrap>
                  <div class="knowledge-sidebar">
                    <h4 class="knowledge-sidebar__title">
                      Plugins
                      <sdButton
                        type="link"
                        class="trigger-close"
                        size="sm"
                        @click="toggleCollapsed"
                      >
                        <unicon name="times" width="16"></unicon>
                      </sdButton>
                    </h4>
                    <ul>
                      <li>
                        <a
                          @click="setOpen('menu1')"
                          :class="open === 'menu2' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text">Introduction to Plugin</span>
                        </a>
                        <ul
                          :class="open === 'menu1' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#" class="active"
                              >Switch between accounts</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                          <li>
                            <a href="#">Understand your actions in lorem</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          @click="setOpen('menu2')"
                          :class="open === 'menu2' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text"
                            >Productivity tools for your Plugin admin & change
                            password</span
                          >
                        </a>
                        <ul
                          :class="open === 'menu2' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#">Switch between accounts</a>
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                          <li>
                            <a href="#">Understand your actions in lorem</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          @click="setOpen('menu3')"
                          :class="open === 'menu3' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text"
                            >Download, install, and upgrade</span
                          >
                        </a>
                        <ul
                          :class="open === 'menu3' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#">Switch between accounts</a>
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          @click="setOpen('menu4')"
                          :class="open === 'menu4' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text"
                            >Download, install, and upgrade</span
                          >
                        </a>
                        <ul
                          :class="open === 'menu4' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#">Switch between accounts</a>
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          @click="setOpen('menu5')"
                          :class="open === 'menu5' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text"
                            >Explore plans & features</span
                          >
                        </a>
                        <ul
                          :class="open === 'menu5' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#">Switch between accounts</a>
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          @click="setOpen('menu6')"
                          :class="open === 'menu6' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text">Profile Settings</span>
                        </a>
                        <ul
                          :class="open === 'menu6' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#">Switch between accounts</a>
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          @click="setOpen('menu7')"
                          :class="open === 'menu7' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text">Listings Management</span>
                        </a>
                        <ul
                          :class="open === 'menu7' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#">Switch between accounts</a>
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          @click="setOpen('menu8')"
                          :class="open === 'menu8' ? 'active' : ''"
                        >
                          <unicon
                            :name="open === 'menu1' ? 'angle-down' : 'angle-up'"
                            width="14"
                          ></unicon>
                          <span class="menu-text">Miscellaneous</span>
                        </a>
                        <ul
                          :class="open === 'menu8' ? 'submenu show' : 'submenu'"
                        >
                          <li>
                            <a href="#">Switch between accounts</a>
                          </li>
                          <li>
                            <a href="#"
                              >Installing vendor marketplace lorem vendor
                              marketplace
                            </a>
                          </li>
                          <li>
                            <a href="#">Stop getting emails from lorem</a>
                          </li>
                          <li>
                            <a href="#">Threads to organize discussions</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </SidebarNavWrap>
              </div>
            </div>
            <SingleKnowledgeDetails />
          </SingleKnowledgeContent>
        </div>
      </KnowledgebaseArticleWrap>
    </Main>
  </div>
</template>

<script>
import { onMounted, ref, defineComponent } from "vue";
import { Main } from "../../styled";
import SingleKnowledgeDetails from "./overview/singleKnowledge/SingleKnowledgeDetails";
import GeneralKnowledgeTop from "./overview/GeneralKnowledgeTop";
import {
  KnowledgebaseArticleWrap,
  SingleKnowledgeContent,
  SidebarNavWrap,
} from "./style";

export default defineComponent({
  name: "SingleKnowledge",
  components: {
    Main,
    SingleKnowledgeDetails,
    GeneralKnowledgeTop,
    KnowledgebaseArticleWrap,
    SingleKnowledgeContent,
    SidebarNavWrap,
  },
  setup() {
    const responsive = ref(0);
    const collapsed = ref(false);
    const open = ref("menu1");
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    const setOpen = (setOpen) => {
      open.value = setOpen;
    };

    onMounted(() => {
      function updateSize() {
        const width = window.innerWidth;
        responsive.value = width;
      }
      window.addEventListener("resize", updateSize);
      updateSize();
    });

    return {
      responsive,
      open,
      toggleCollapsed,
      collapsed,
      setOpen,
    };
  },
});
</script>
