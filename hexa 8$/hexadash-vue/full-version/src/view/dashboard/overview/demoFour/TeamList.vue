<template>
  <BorderLessHeading>
    <sdCards more title="Team Members">
      <template #more>
        <router-link to="#">
          <unicon name="print" width="16"></unicon>
          <span>Printer</span>
        </router-link>
        <router-link to="#">
          <unicon name="book-open" width="16"></unicon>
          <span>PDF</span>
        </router-link>
        <router-link to="#">
          <unicon name="file-alt" width="16"></unicon>
          <span>Google Sheets</span>
        </router-link>
        <router-link to="#">
          <unicon name="x" width="16"></unicon>
          <span>Excel (XLSX)</span>
        </router-link>
        <router-link to="#">
          <unicon name="file" width="16"></unicon>
          <span>CSV</span>
        </router-link>
      </template>
      <TeamListStyle>
        <div class="teamlist-two">
          <a-list :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar
                      shape="square"
                      :src="
                        require(`../../../../static/img/users/${item.avatar}`)
                      "
                    />
                  </template>
                  <template #title>
                    {{ item.title }}
                  </template>
                </a-list-item-meta>
                <a-list-item-meta
                  class="ninjadash-status-online"
                  description="online"
                ></a-list-item-meta>
                <sdButton @click="handleActive" type="primary"> Add </sdButton>
              </a-list-item>
            </template>
          </a-list>
        </div>
      </TeamListStyle>
    </sdCards>
  </BorderLessHeading>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { TeamListStyle } from "../demoNine/Style";
import { BorderLessHeading } from "../../../styled";
import teamList from "@/demoData/teamList.json";

export default defineComponent({
  components: { TeamListStyle, BorderLessHeading },
  setup() {
    const data = ref(teamList);

    onMounted(() => {
      data.value;
    });

    const handleActive = (e) => {
      e.currentTarget.classList.toggle("active");
    };

    return {
      handleActive,
      data,
    };
  },
});
</script>
