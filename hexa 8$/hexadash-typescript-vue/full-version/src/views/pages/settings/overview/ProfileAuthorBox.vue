<template>
  <sdCards headless>
    <div class="author-info">
      <figure>
        <img :src="'/src/assets/img/users/1.png'" alt="" />
        <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
          <a to="#">
            <unicon name="camera" width="16"></unicon>
          </a>
        </a-upload>
      </figure>
      <figcaption>
        <div class="info">
          <sdHeading as="h4">Duran Clayton</sdHeading>
          <p>UI/UX Designer</p>
        </div>
      </figcaption>
    </div>
    <nav class="settings-menmulist">
      <ul>
        <li>
          <router-link :to="{ name: 'set-profile' }">
            <unicon name="user" width="14"></unicon>
            Edit Profile
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'set-account' }">
            <unicon name="setting" width="14"></unicon>
            Account Settings
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'set-password' }">
            <unicon name="key-skeleton" width="14"></unicon>
            Change Password
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'set-social' }">
            <unicon name="users-alt" width="14"></unicon>
            Social Profile
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'set-notification' }">
            <unicon name="list-ul" width="14"></unicon> Notification
          </router-link>
        </li>
      </ul>
    </nav>
  </sdCards>
</template>
<script setup lang="ts"></script>
