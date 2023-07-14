<script setup lang="ts">
import { toRefs } from 'vue';
import Styled from 'vue3-styled-components';

const CardWrapper = Styled.figure`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0;
  .card-short {
    .card-short__title {
      padding: 25px 25px 0;
			color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .card-short__content {
      padding: 0 25px;
      p {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
    }
    .card-short__title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 18px;
      img {
        max-width: 50px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
      }
    }
    .card-short__bottom {
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      padding: 20px 25px 25px;
      .card-short-actions {
        .ant-btn-circle {
          border-radius: 42px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
          svg,
          img,
          i {
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          }
        }
        .content-action {
          display: flex;
          align-items: center;
          .ant-dropdown-trigger {
            svg,
            img,
            i {
              color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
          }
        }
      }
      .card-short-checkbox {
        display: none;
      }
      .content-installed {
        display: none !important;
      }
      .content-not-installed.content-action {
        justify-content: flex-end;
      }
      &.installed {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-not-installed {
          display: none;
        }
        .content-installed {
          display: flex !important;
        }
        .card-short-checkbox {
          display: block !important;
          .ant-checkbox-checked {
            &:after {
              border-color: ${({ theme }) => theme['success-color']};
            }
            .ant-checkbox-inner {
              border-color: ${({ theme }) => theme['success-color']};
              background: ${({ theme }) => theme['success-color']};
              &:hover {
                border-color: ${({ theme }) => theme['success-color']};
                background: ${({ theme }) => theme['success-color']};
                color: #fff;
              }
            }
          }
          span {
            color: ${({ theme }) => theme['success-color']};
          }
        }
      }
    }
  }
`;

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      id: 1,
      title: 'Adobe CC',
      installed: true,
      content: 'Lorem Ipsum is simply dummy text of the and the typesetting industry.',
      img: 'assets/img/icon/adobe.svg',
    }),
  },
});
const { item } = toRefs(props);
const { id, title, installed, content, img } = item.value;
</script>

<template>
  <CardWrapper>
    <div class="card-short">
      <h4 class="card-short__title align-v-center">
        <img :src="`/src/${img}`" alt="" />
        <span>{{ title }}</span>
      </h4>
      <div class="card-short__content">
        <p>{{ content }}</p>
      </div>
      <div :class="installed ? 'card-short__bottom installed' : 'card-short__bottom'">
        <div class="card-short-checkbox">
          <a-checkbox default-checked>Installed</a-checkbox>
        </div>
        <div class="card-short-actions">
          <div class="content-installed content-action">
            <sdButton type="primary" size="sm" shape="circle" outlined rounded> Open </sdButton>
            <div class="more">
              <sdDropdown :action="['click']" class="wide-dropdwon">
                <template #overlay>
                  <router-link to="#">Edit</router-link>
                  <router-link to="#">Delete</router-link>
                  <router-link to="#">View</router-link>
                </template>
                <router-link to="#">
                  <unicon name="ellipsis-h" width="18"></unicon>
                </router-link>
              </sdDropdown>
            </div>
          </div>
          <div class="content-not-installed content-action">
            <sdButton type="primary" size="sm" shape="circle" raised rounded> Install </sdButton>
            <div class="more">
              <sdDropdown :action="['click']" class="wide-dropdwon">
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <router-link to="#">Edit</router-link>
                    </a-menu-item>
                    <a-menu-item>
                      <router-link to="#">Delete</router-link>
                    </a-menu-item>
                    <a-menu-item>
                      <router-link to="#">View</router-link>
                    </a-menu-item>
                  </a-menu>
                </template>
                <router-link to="#">
                  <unicon name="ellipsis-h" width="18"></unicon>
                </router-link>
              </sdDropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
</template>
