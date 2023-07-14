<script>
import { ListStyle } from "./style";
import VueTypes from "vue-types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "List",
  props: {
    text: VueTypes.oneOfType([VueTypes.string, VueTypes.object, VueTypes.node]),
  },
  components: {
    ListStyle,
  },
  render() {
    return (
      <ListStyle class="list-single">
        <span class="icon">
          <unicon name="check" width="14"></unicon>
        </span>
        <span>{this.text}</span>
      </ListStyle>
    );
  },
});
</script>
