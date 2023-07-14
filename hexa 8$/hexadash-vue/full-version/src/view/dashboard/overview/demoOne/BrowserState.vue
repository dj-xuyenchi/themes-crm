<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <Cards>
        <template #title>
          <div class="ninjadash-card-title-wrap">
            <span class="ninjadash-card-title-text"> Browser State </span>
          </div>
        </template>
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li
                :class="
                  browserTab === 'today'
                    ? 'ninjadash-active'
                    : 'ninjadash-today'
                "
              >
                <router-link
                  @click="(e) => handleChangePeriod(e, 'today')"
                  to="#"
                >
                  Today
                </router-link>
              </li>
              <li
                :class="
                  browserTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'
                "
              >
                <router-link
                  @click="(e) => handleChangePeriod(e, 'week')"
                  to="#"
                >
                  Week
                </router-link>
              </li>
              <li
                :class="
                  browserTab === 'month'
                    ? 'ninjadash-active'
                    : 'ninjadash-month'
                "
              >
                <router-link
                  @click="(e) => handleChangePeriod(e, 'month')"
                  to="#"
                >
                  Month
                </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg">
          <BrowserStateWrap>
            <div class="table-bordered browser-state-table table-responsive">
              <a-table
                :columns="browserColumns"
                :dataSource="sellingData"
                :pagination="false"
              />
            </div>
          </BrowserStateWrap>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  </div>
</template>
<script>
import { computed, onMounted, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import Cards from "../../../../components/cards/frame/CardsFrame.vue";
import { BrowserStateWrap } from "../../style";
import { BorderLessHeading, TableDefaultStyle } from "../../../styled";

const browserColumns = [
  {
    title: "Browsers",
    dataIndex: "browser",
    key: "browser",
  },
  {
    title: "Session",
    dataIndex: "session",
    key: "session",
  },
  {
    title: "Bounce rate",
    dataIndex: "bounceRate",
    key: "bounceRate",
  },
  {
    title: "cte",
    dataIndex: "cte",
    key: "cte",
  },
  {
    title: "goal conv. rate",
    dataIndex: "goalRate",
    key: "goalRate",
  },
];

const BrowsersStates = defineComponent({
  name: "BrowsersState",
  components: {
    Cards,
    BrowserStateWrap,
    BorderLessHeading,
    TableDefaultStyle,
  },
  setup() {
    const { state, dispatch } = useStore();
    const browsersStateData = computed(
      () => state.chartContent.browserStateData
    );
    const browserTab = ref("today");

    const handleChangePeriod = (event, value) => {
      event.preventDefault();
      browserTab.value = value;
      dispatch("browserStateFilterData", value);
    };

    const sellingData = computed(() =>
      browsersStateData.value
        ? browsersStateData.value.map((value) => {
            const { key, name, session, bounceRate, cte, goalRate } =
              value;
            return {
              key,
              browser: (
                <div className="ninjadash-product-info align-center-v">
                  <span className="ninjadash-product-name">{name}</span>
                </div>
              ),
              session,
              bounceRate,
              cte,
              goalRate,
            };
          })
        : []
    );

    onMounted(() => dispatch("browserStateGetData"));

    return {
      browsersStateData,
      handleChangePeriod,
      browserColumns,
      sellingData,
      browserTab,
    };
  },
});

export default BrowsersStates;
</script>
