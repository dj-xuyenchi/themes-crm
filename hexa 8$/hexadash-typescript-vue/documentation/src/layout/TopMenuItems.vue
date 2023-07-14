<template>
  <TopMenuStyle>
    <div class="ninjaDash-top-menu">
      <ul>
        <li @click="addParentActive">
          <router-link :to="`/page/starter`"> Blank Page </router-link>
        </li>
      </ul>
    </div>
  </TopMenuStyle>
</template>
<script>
import { onMounted, defineComponent } from "vue";
import { TopMenuStyle } from "./style";

export default defineComponent({
  name: "TopMenu",
  components: {
    TopMenuStyle,
  },
  setup() {
    onMounted(() => {
      const active = document.querySelector(".ninjaDash-top-menu a.active");
      const activeDefault = () => {
        const megaMenu = active.closest(".megaMenu-wrapper");
        const hasSubMenuLeft = active.closest(".has-subMenu-left");
        if (!megaMenu) {
          active.closest("ul").previousSibling.classList.add("active");
          if (hasSubMenuLeft)
            hasSubMenuLeft
              .closest("ul")
              .previousSibling.classList.add("active");
        } else {
          active
            .closest(".megaMenu-wrapper")
            .previousSibling.classList.add("active");
        }
      };
      window.addEventListener("load", active && activeDefault);
      // return () => window.removeEventListener('load', activeDefault);
    });

    const addParentActive = (event) => {
      document.querySelectorAll(".parent").forEach((element) => {
        element.classList.remove("active");
      });

      const hasSubMenuLeft = event.currentTarget.closest(".has-subMenu-left");
      const megaMenu = event.currentTarget.closest(".megaMenu-wrapper");
      if (!megaMenu) {
        event.currentTarget
          .closest("ul")
          .previousSibling.classList.add("active");
        if (hasSubMenuLeft)
          hasSubMenuLeft.closest("ul").previousSibling.classList.add("active");
      } else {
        event.currentTarget
          .closest(".megaMenu-wrapper")
          .previousSibling.classList.add("active");
      }
    };

    return { addParentActive };
  },
});
</script>
