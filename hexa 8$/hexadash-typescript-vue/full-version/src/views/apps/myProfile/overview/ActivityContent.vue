<script setup lang="ts">
import { ActivityContents } from './style';
</script>

<template>
  <ActivityContents>
    <sdCards headless>
      <ul class="activity-list">
        <li class="activity-list__single">
          <span class="activity-icon primary">
            <unicon name="inbox" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t1.jpg'" alt="" />
              <p>
                <span class="inline-text color-primary">James</span> Send you a message
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon secondary">
            <unicon name="upload" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t2.jpg'" alt="" />
              <p>
                <span class="inline-text color-primary">Adam </span>upload website template for sale
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon success">
            <unicon name="signout" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t3.jpg'" alt="" />
              <p>
                <span class="inline-text color-primary">Mumtahin</span> has registered
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon info">
            <unicon name="at" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t4.jpg'" alt="" />
              <p>
                <span class="inline-text color-primary">James</span> Send you a message
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon danger">
            <unicon name="heart" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t5.png'" alt="" />
              <p>
                <span class="inline-text color-primary">Adam</span> upload website template for sale
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon warning">
            <unicon name="comment-alt" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t1.jpg'" alt="" />
              <p>
                <span class="inline-text color-primary">Mumtahin</span> has registered
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon info">
            <unicon name="at" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t6.png'" alt="" />
              <p>
                <span class="inline-text color-primary">James</span> Send you a message
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon warning">
            <unicon name="heart" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t7.png'" alt="" />
              <p>
                <span class="inline-text color-primary">Mumtahin</span> has registered
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon danger">
            <unicon name="comment-alt" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t8.png'" alt="" />
              <p>
                <span class="inline-text color-primary">Adam</span> upload website template for sale
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
        <li class="activity-list__single">
          <span class="activity-icon primary">
            <unicon name="heart" width="14"></unicon>
          </span>
          <div class="activity-content">
            <div class="activity-info">
              <img :src="'/src/assets/img/chat-author/t1.jpg'" alt="" />
              <p>
                <span class="inline-text color-primary">James</span> Send you a message
                <span class="hour">5 hours ago</span>
              </p>
            </div>
            <a class="activity-more" to="#">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <a to="#">
                    <span>Hide</span>
                  </a>
                  <a to="#">
                    <span>Delete</span>
                  </a>
                </template>
                <unicon name="ellipsis-h"></unicon>
              </sdDropdown>
            </a>
          </div>
        </li>
      </ul>
    </sdCards>
  </ActivityContents>
</template>
