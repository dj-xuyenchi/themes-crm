<template>
  <sdCards title="Note Lists">
    <NoteCardWrap>
      <draggable
        v-model="myList"
        tag="div"
        :component-data="getComponentData()"
        handle=".handle"
        item-key="key"
      >
        <template #item="{ element }">
          <a-col :xxl="8" :xl="12" :lg="12" :sm="12" :xs="24">
            <NoteCard :data="element" />
          </a-col>
        </template>
      </draggable>
    </NoteCardWrap>
  </sdCards>
</template>
<script>
import { NoteCardWrap } from "../style";
import NoteCard from "@/components/note/Card";
import draggable from "vuedraggable";
import { defineComponent } from "vue";
const Work = defineComponent({
  name: "Work",
  components: { NoteCardWrap, NoteCard, draggable },
  setup() {
    function getComponentData() {
      return {
        gutter: 24,
        class: "ant-row",
      };
    }

    return {
      getComponentData,
    };
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.note.data.filter(
          (item) => item.label === "work"
        );
      },
      set(value) {
        this.$store.dispatch("noteDraggable", value);
      },
    },
  },
});
export default Work;
</script>
