<template>
  <NoteStyleCard :class="data.label">
    <sdCards headless>
      <h4>
        <span>
          {{ data.title }}
          <span :class="`status-bullet ${data.label}`" />
        </span>
        <unicon class="handle" name="expand-arrows" width="16"></unicon>
        <!-- <Dragger /> -->
      </h4>
      <p>{{ data.description }}</p>
      <div class="actions">
        <span>
          <a
            :class="data.stared ? 'star active' : 'star'"
            @click="onStarUpdate"
            to="#"
          >
            <unicon name="star" width="16"></unicon>
          </a>
          <a @click="() => onHandleDelete()" to="#">
            <unicon name="trash-alt" width="16"></unicon>
          </a>
        </span>
        <sdDropdown>
          <template #overlay>
            <div class="nav-labels">
              <ul>
                <li>
                  <a @click="() => onLabelChange('personal')" to="#">
                    <Bullet class="personal" /> Personal
                  </a>
                </li>
                <li>
                  <a @click="() => onLabelChange('work')" to="#">
                    <Bullet class="work" /> Work
                  </a>
                </li>
                <li>
                  <a @click="() => onLabelChange('social')" to="#">
                    <Bullet class="social" /> Social
                  </a>
                </li>
                <li>
                  <a @click="() => onLabelChange('important')" to="#">
                    <Bullet class="important" /> Important
                  </a>
                </li>
              </ul>
            </div>
          </template>
          <a to="#" class="ant-dropdown-trigger">
            <unicon name="ellipsis-v" width="20"></unicon>
          </a>
        </sdDropdown>
      </div>
    </sdCards>
  </NoteStyleCard>
</template>
<script>
import PropTypes from "vue-types";
import { computed, toRefs, defineComponent } from "vue";
import { useStore } from "vuex";
import { NoteStyleCard, Bullet } from "./style";

const NoteCard = defineComponent({
  name: "NoteCard",
  props: {
    data: PropTypes.object,
  },
  components: { NoteStyleCard, Bullet },
  setup(props) {
    const { state, dispatch } = useStore();
    const noteData = computed(() => state.note.data);
    const { data } = toRefs(props);
    const onLabelChange = (labels) => {
      dispatch("onLabelUpdate", {
        data: noteData.value,
        id: data.value.key,
        value: labels,
      });
    };

    const onHandleDelete = () => {
      const value = noteData.value.filter(
        (item) => item.key !== data.value.key
      );
      dispatch("noteDeleteData", value);
    };

    const onStarUpdate = () => {
      dispatch("onStarUpdate", { data: noteData.value, id: data.value.key });
    };

    return {
      onStarUpdate,
      noteData,
      dispatch,
      onHandleDelete,
      onLabelChange,
    };
  },
});

export default NoteCard;
</script>
