<template>
  <SVG
    xm-lns="http://www.w3.org/2000/svg"
    :percent="percent"
    width="225.324"
    height="117.766"
    viewBox="0 0 225.324 117.766"
  >
    <g
      id="Group_1657"
      data-name="Group 1657"
      transform="translate(-536.893 -818.88)"
    >
      <text
        id="_70_"
        data-name="70%"
        transform="translate(618 907)"
        font-size="30"
        font-family="Inter-Bold, Inter"
        font-weight="700"
      >
        <tspan x="0" y="0"> {{ percent }}% </tspan>
      </text>
      <text
        id="Progress"
        transform="translate(619 931)"
        fill="#868eae"
        font-size="15"
        font-family="Inter-Regular, Inter"
      >
        <tspan x="0" y="0"> Progress </tspan>
      </text>
      <path
        id="Path_1041"
        data-name="Path 1041"
        d="M253.5,399.119c.718-56.767,49.862-102.114,106.9-100.622,54.969,1.437,100.569,45.944,101.22,100.622"
        transform="translate(292 528.92)"
        fill="none"
        stroke="#e8faf4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="17"
      />
      <path
        id="Path_1042"
        data-name="Path 1042"
        d="M253.5,399.119c.718-56.767,49.862-102.114,106.9-100.622,54.969,1.437,100.569,45.944,101.22,100.622"
        transform="translate(292 528.92)"
        fill="none"
        stroke="#01B81A"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="17"
      />
    </g>
  </SVG>
</template>
<script>
import Styled from "vue3-styled-components";
import VueTypes from "vue-types";
import { defineComponent } from "vue";

const SVG = Styled("svg", ["percent"])`
    #Path_1042{
        stroke-dasharray: 312;
        stroke-dashoffset: ${({ percent }) => (312 * (100 - percent)) / 100};
    }
`;

const HalfProgressBar = defineComponent({
  name: "HalfProgressBar",
  props: {
    percent: VueTypes.number.def(80),
  },
  components: { SVG },
});

export default HalfProgressBar;
</script>
