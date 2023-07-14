<template>
  <BorderLessHeading>
    <sdCards title="Team Members">
      <TeamListStyle>
        <a-list :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta
                class="ninjadash-status-online"
                description="online"
              >
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
              <sdButton @click="handleActive" type="primary"> Add </sdButton>
            </a-list-item>
          </template>
        </a-list>
      </TeamListStyle>
    </sdCards>
  </BorderLessHeading>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { TeamListStyle } from "./Style";
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
