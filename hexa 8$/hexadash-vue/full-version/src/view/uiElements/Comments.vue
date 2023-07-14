/* eslint-disable vue/require-v-for-key */ /* eslint-disable
vue/require-v-for-key */
<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Comments">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards title="Basic comment">
            <a-comment>
              <template v-slot:actions>
                <span key="comment-basic-like">
                  <a-tooltip title="Like">
                    <unicon
                      name="thumbs-up"
                      width="12"
                      :theme="action === 'liked' ? 'filled' : 'outlined'"
                      @click="like"
                    ></unicon>
                  </a-tooltip>
                  <span class="comment-ld-action">
                    {{ likes }}
                  </span>
                </span>
                <span key="comment-basic-dislike">
                  <a-tooltip title="Dislike">
                    <unicon
                      name="thumbs-down"
                      width="12"
                      ::theme="action === 'disliked' ? 'filled' : 'outlined'"
                      @click="dislike"
                    ></unicon>
                  </a-tooltip>
                  <span class="comment-ld-action">
                    {{ dislikes }}
                  </span>
                </span>
                <span key="comment-basic-reply-to">Reply to</span>
              </template>
              <template v-slot:author>
                <a>Han Solo</a>
              </template>

              <template v-slot:avatar>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              </template>
              <template v-slot:content>
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              </template>
              <template v-slot:datetime>
                <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                  <span>{{ dayjs().fromNow() }}</span>
                </a-tooltip>
              </template>
            </a-comment>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Usage with list">
            <a-list
              class="comment-list"
              :header="`${data.length} replies`"
              item-layout="horizontal"
              :data-source="data"
            >
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-comment :author="item.author" :avatar="item.avatar">
                    <template #actions>
                      <span
                        v-for="(action, index) in item.actions"
                        :key="index"
                        >{{ action }}</span
                      >
                    </template>
                    <template #content>
                      <p>
                        {{ item.content }}
                      </p>
                    </template>
                    <template #datetime>
                      <a-tooltip
                        :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')"
                      >
                        <span>{{ item.datetime.fromNow() }}</span>
                      </a-tooltip>
                    </template>
                  </a-comment>
                </a-list-item>
              </template>
            </a-list>
          </sdCards>
        </a-col>

        <a-col :xs="24">
          <sdCards title="Nested comments">
            <a-comment>
              <template v-slot:actions>
                <span key="comment-nested-reply-to">Reply to</span>
              </template>
              <template v-slot:author>
                <a>Han Solo</a>
              </template>
              <template v-slot:avatar>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              </template>
              <template v-slot:content>
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure).
                </p>
              </template>
              <a-comment>
                <template v-slot:actions>
                  <span>Reply to</span>
                </template>
                <template v-slot:author>
                  <a>Han Solo</a>
                </template>
                <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                </template>
                <template v-slot:content>
                  <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure).
                  </p>
                </template>
                <a-comment>
                  <template v-slot:actions>
                    <span>Reply to</span>
                  </template>
                  <template v-slot:author>
                    <a>Han Solo</a>
                  </template>
                  <template v-slot:avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    />
                  </template>
                  <template v-slot:content>
                    <p>
                      We supply a series of design principles, practical
                      patterns and high quality design resources (Sketch and
                      Axure).
                    </p>
                  </template>
                </a-comment>
                <a-comment>
                  <template v-slot:actions>
                    <span>Reply to</span>
                  </template>
                  <template v-slot:author>
                    <a>Han Solo</a>
                  </template>
                  <template v-slot:avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    />
                  </template>
                  <template v-slot:content>
                    <p>
                      We supply a series of design principles, practical
                      patterns and high quality design resources (Sketch and
                      Axure).
                    </p>
                  </template>
                </a-comment>
              </a-comment>
            </a-comment>
          </sdCards>
        </a-col>

        <a-col :lg="12" :xs="24">
          <sdCards title="Reply Editor">
            <a-list
              v-if="comments.length"
              :data-source="comments"
              :header="`${comments.length} ${
                comments.length > 1 ? 'replies' : 'reply'
              }`"
              item-layout="horizontal"
            >
              <template v-slot:renderItem:iteam>
                <a-list-item>
                  <a-comment
                    :author="item.author"
                    :avatar="item.avatar"
                    :content="item.content"
                    :datetime="item.datetime"
                  />
                </a-list-item>
              </template>
            </a-list>
            <a-comment>
              <template v-slot:avatar>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              </template>
              <template v-slot:content>
                <a-textarea :rows="4" :value="value" @change="handleChange" />
                <sdButton
                  html-type="submit"
                  class="add-comment"
                  size="lg"
                  :load="true"
                  type="primary"
                  @click="handleSubmit"
                  style="margin-top: 15px"
                >
                  Add Comment
                </sdButton>
              </template>
            </a-comment>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import dayjs from "dayjs";
import { defineComponent } from "vue";

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

export default defineComponent({
  name: "Comments",
  components: {
    Main,
  },
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      likes: 0,
      dislikes: 0,
      action: null,
      dayjs,
      data: [
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: dayjs().subtract(1, "days"),
        },
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: dayjs().subtract(2, "days"),
        },
      ],
    };
  },
  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: this.value,
            datetime: dayjs().fromNow(),
          },
          ...this.comments,
        ];
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
});
</script>
