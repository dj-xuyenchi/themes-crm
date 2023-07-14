<template>
  <MailBox>
    <div class="body">
      <div
        v-if="!text"
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }"
        class="group"
      >
        <div
          class="reply-inner"
          :style="{ display: 'flex', alignItems: 'center' }"
        >
          <span v-if="replay" class="reply-title">Replay To</span>
          <tags-input
            element-id="tags"
            :placeholder="replay ? null : 'To'"
            :existing-tags="selectedTags"
            v-model:value="selectedTags"
            ><template v-slot:selected-tag="{ tag, index, removeTag }">
              <span class="tagsinput-tag">
                <span v-html="tag.value"></span>
                <a
                  v-show="!disabled"
                  href="#"
                  class="tags-input-remove"
                  @click.prevent="removeTag(index)"
                  ><unicon name="times" width="14"></unicon
                ></a>
              </span>
            </template>
          </tags-input>
        </div>
        <span class="mail-cc">Cc</span>
      </div>
      <div class="group mail-editor">
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
      </div>
    </div>

    <div v-if="!text" class="footer">
      <div class="left d-flex align-items-center">
        <sdButton size="default" type="primary" @click="onSubmit" raised>
          Send
        </sdButton>
        <router-link to="#">
          <unicon name="paperclip" width="16"></unicon>
        </router-link>
        <router-link to="#">
          <unicon name="info-circle" width="16"></unicon>
        </router-link>
      </div>
      <div class="right">
        <router-link to="#">
          <unicon name="trash-alt" width="16"></unicon>
        </router-link>
      </div>
    </div>
  </MailBox>
</template>
<script>
import VoerroTagsInput from "@voerro/vue-tagsinput";
import { MailBox } from "./style";
import { ref, toRefs, defineComponent } from "vue";
import VueTypes from "vue-types";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MailComposer = defineComponent({
  name: "mailComposer",
  components: { MailBox, "tags-input": VoerroTagsInput },
  props: {
    onChange: VueTypes.func.def(() => {}),
    onSend: VueTypes.func.def(() => {}),
    defaultTag: VueTypes.string,
    replay: VueTypes.bool.def(false),
    text: VueTypes.bool.def(false),
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  setup(props) {
    const { defaultTag, onSend } = toRefs(props);

    const tags = ref(["hello"]);
    const handleChange = (tag) => {
      tags.value = [...tags.value, tag];
    };
    const editorData = ref(
      "<p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>"
    );

    const onSubmit = () => {
      onSend.value && onSend.value(editorData.value);
    };

    const selectedTags = ref(
      defaultTag.value
        ? [{ key: defaultTag.value, value: defaultTag.value }]
        : []
    );

    return {
      handleChange,
      tags,
      onSubmit,
      selectedTags,
      ClassicEditor,
      disabled: false,
      editorData,
    };
  },
});
export default MailComposer;
</script>
