<template>
  <CardWrapper>
    <img :src="require(`../../../${img}`)" alt="" />
    <figcaption>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <router-link to="#">Learn More</router-link>
    </figcaption>
  </CardWrapper>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import Styled from "vue3-styled-components";
const CardWrapper = Styled.figure`
  background: ${({ theme }) => theme[theme.mainContent]["white-background"]};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 0;
  figcaption {
    h2 {
      margin: 18px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
			color: ${({ theme }) => theme[theme.mainContent]["dark-text"]}
    }
    p {
      line-height: 1.79;
      color: ${({ theme }) => theme[theme.mainContent]["gray-text"]};
    }
    a {
      color: ${({ theme }) => theme["primary-color"]};
      font-size: 15px;
      font-weight: 600;
    }
  }
`;
import VueTypes from "vue-types";
export default defineComponent({
  name: "SampleCardTwo",
  components: { CardWrapper },
  props: {
    item: VueTypes.object.def({
      id: 1,
      title: "Technology Change the World",
      content:
        "Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled",
      img: "static/img/sampleCards/1.png",
    }),
  },
  setup(props) {
    const { item } = toRefs(props);
    const { id, title, content, img } = item.value;
    return { id, title, content, img };
  },
});
</script>
