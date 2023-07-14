<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueTagsInput from '@james090500/vue-tagsinput';
import { MailBox } from './style';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default defineComponent({
  name: 'MailComposer',
  components: { MailBox, 'tags-input': VueTagsInput },
  props: {
    onChange: Function,
    onSend: Function,
    defaultTag: String,
    replay: Boolean,
    text: Boolean,
  },
  setup(props) {
    const tags = ref(['hello']);
    const selectedTags = ref(props.defaultTag ? [{ key: props.defaultTag, value: props.defaultTag }] : []);
    const editorData = ref(
      "<p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>",
    );

    const handleChange = (tag: string) => {
      tags.value = [...tags.value, tag];
    };

    const onSubmit = () => {
      if (props.onSend) props.onSend(editorData.value);
    };

    return {
      tags,
      selectedTags,
      editorData,
      handleChange,
      onSubmit,
      ClassicEditor,
      disabled: false,
    };
  },
});
</script>

<template>
  <MailBox>
    <div class="body">
      <div
        v-if="!text"
        :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }"
        class="group"
      >
        <div class="reply-inner" :style="{ display: 'flex', alignItems: 'center' }">
          <span v-if="replay" class="reply-title">Replay To</span>
          <tags-input
            element-id="tags"
            :placeholder="replay ? null : 'To'"
            :existing-tags="selectedTags"
            v-model:value="selectedTags"
          >
            <template v-slot:selected-tag="{ tag, index, removeTag }">
              <span class="tagsinput-tag">
                <span v-html="tag.value"></span>
                <a v-show="!disabled" href="#" class="tags-input-remove" @click.prevent="removeTag(index)">
                  <unicon name="times" width="14"></unicon>
                </a>
              </span>
            </template>
          </tags-input>
        </div>
        <span class="mail-cc">Cc</span>
      </div>
      <div class="group mail-editor">
        <ckeditor :editor="ClassicEditor" v-model="editorData"></ckeditor>
      </div>
    </div>

    <div v-if="!text" class="footer">
      <div class="left d-flex align-items-center">
        <sd-button size="default" type="primary" @click="onSubmit" raised> Send </sd-button>
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
