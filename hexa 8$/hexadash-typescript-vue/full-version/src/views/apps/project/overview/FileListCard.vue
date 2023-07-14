<script setup lang="ts"></script>

<template>
  <sdCards title="Files">
    <div class="file-list">
      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="`/src/assets/img/files/zip.png`" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Main-admin-design.zip</span>
            <span class="file-size">7.05 MB</span>
            <span class="file-content-action">
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <a to="#">
                <unicon name="eye" width="14"></unicon>
                View
              </a>
              <a to="#">
                <unicon name="edit" width="14"></unicon>
                Edit
              </a>
              <a to="#">
                <unicon name="trash-alt" width="14"></unicon>
                Delete
              </a>
            </template>
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="`/src/assets/img/files/pdf.png`" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Product-guidelines.pdf</span>
            <span class="file-size">522 KB</span>
            <span class="file-content-action">
              <a to="#">View</a>
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <a to="#">
                <unicon name="eye" width="14"></unicon>
                View
              </a>
              <a to="#">
                <unicon name="edit" width="14"></unicon>
                Edit
              </a>
              <a to="#">
                <unicon name="trash-alt" width="14"></unicon>
                Delete
              </a>
            </template>
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="`/src/assets/img/files/psd.png`" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">admin-wireframe.psd</span>
            <span class="file-size">2.05 MB</span>
            <span class="file-content-action">
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="`/src/assets/img/files/jpg.png`" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Wirefram-escreenshots.jpg</span>
            <span class="file-size">522 KB</span>
            <span class="file-content-action">
              <a to="#">View</a>
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <a to="#">
                <unicon name="eye" width="14"></unicon>
                View
              </a>
              <a to="#">
                <unicon name="edit" width="14"></unicon>
                Edit
              </a>
              <a to="#">
                <unicon name="trash-alt" width="14"></unicon>
                Delete
              </a>
            </template>
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="`/src/assets/img/files/png.png`" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Logo.png</span>
            <span class="file-size">522 KB</span>
            <span class="file-content-action">
              <a to="#">View</a>
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <div class="dropdown-more">
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  View
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  Edit
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  Delete
                </a>
              </div>
            </template>
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </div>
    </div>
  </sdCards>
</template>
