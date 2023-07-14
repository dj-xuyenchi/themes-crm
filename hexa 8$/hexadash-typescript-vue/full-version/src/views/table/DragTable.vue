<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { TableWrapper, DragDropStyle } from '../styled';
import draggable from 'vuedraggable';

const { state } = useStore();
const users = computed(() => state.users.data);
const dragAbleData = ref(users.value);
</script>

<template>
  <DragDropStyle>
    <sdCards title="Drag & Drop">
      <TableWrapper class="table-responsive">
        <div class="ant-table-content">
          <table style="width: 100%">
            <draggable v-model="dragAbleData" tag="tbody" group="people" handle=".handle" item-key="name">
              <template #item="{ element }">
                <tr>
                  <td style="width: 30px" class="ninjadash-drag-arrows">
                    <unicon
                      class="handle"
                      :style="{ cursor: 'pointer', fill: '#999' }"
                      name="expand-arrows"
                      width="16"
                    ></unicon>
                  </td>
                  <td scope="row">
                    <div class="user-info">
                      <figure>
                        <img :style="{ width: '40px' }" :src="`/src/${element.img}`" alt="" />
                      </figure>
                      <figcaption>
                        <sdHeading class="user-name" as="h6">
                          {{ element.name }}
                        </sdHeading>
                      </figcaption>
                    </div>
                  </td>
                  <td><span class="drag_email">john@gmail.com</span></td>
                  <td>
                    <span class="drag_company">Business Development</span>
                  </td>
                  <td>
                    <span class="drag_designation">{{ element.designation }}</span>
                  </td>
                  <td><span class="drag_join-date">January 20, 2021</span></td>
                  <td>
                    <div class="table-actions">
                      <sdButton class="btn-icon" type="info" to="#" shape="circle">
                        <unicon name="edit" width="16"></unicon>
                      </sdButton>
                      <sdButton class="btn-icon" type="danger" to="#" shape="circle">
                        <unicon name="trash-alt" width="16"></unicon>
                      </sdButton>
                    </div>
                  </td>
                </tr>
              </template>
            </draggable>
          </table>
        </div>
      </TableWrapper>
    </sdCards>
  </DragDropStyle>
</template>
