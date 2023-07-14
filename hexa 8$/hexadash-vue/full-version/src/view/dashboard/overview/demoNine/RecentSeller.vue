<template>
  <BorderLessHeading>
    <sdCards title="Recent Seller">
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li
              :class="
                sellerStatus === 'today'
                  ? 'ninjadash-active'
                  : 'ninjadash-today'
              "
            >
              <router-link @click="(e) => handleTabChange('today', e)" to="#">
                All
              </router-link>
            </li>
            <li
              :class="
                sellerStatus === 'week' ? 'ninjadash-active' : 'ninjadash-week'
              "
            >
              <router-link @click="(e) => handleTabChange('week', e)" to="#">
                Done
              </router-link>
            </li>
            <li
              :class="
                sellerStatus === 'month'
                  ? 'ninjadash-active'
                  : 'ninjadash-month'
              "
            >
              <router-link @click="(e) => handleTabChange('month', e)" to="#">
                Pending
              </router-link>
            </li>
          </ul>
        </div>
      </template>
      <TableDefaultStyle class="ninjadash-having-header-bg">
        <RecentSellerStyle>
          <div class="table-responsive">
            <a-table
              :data-source="dataSource"
              :columns="columns"
              :pagination="false"
              :showHeader="false"
            />
          </div>
        </RecentSellerStyle>
      </TableDefaultStyle>
    </sdCards>
  </BorderLessHeading>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { RecentSellerStyle } from "./Style";
import { BorderLessHeading, TableDefaultStyle } from "../../../styled";
import tableData from "@/demoData/table-data.json";

const { resentSeller } = tableData;
const columns = [
  { title: "", dataIndex: "name", key: "name" },
  {
    title: "",
    dataIndex: "company",
    key: "company",
  },
  { title: "", dataIndex: "device", key: "device" },
  { title: "", dataIndex: "price", key: "price" },
  {
    title: "",
    dataIndex: "status",
    key: "status",
  },
];
export default defineComponent({
  components: { RecentSellerStyle, BorderLessHeading, TableDefaultStyle },
  setup() {
    const sellerStatus = ref("today");
    const handleTabChange = (value, event) => {
      event.preventDefault();

      sellerStatus.value = value;
    };

    const dataSource = computed(() => {
      return sellerStatus.value === "today"
        ? resentSeller[sellerStatus.value].map((value) => {
            const { title, id, price, company, device, userImg, status } =
              value;
            return {
              key: id,
              name: (
                <div class="ninjadash-info-element align-center-v">
                  <img
                    style={{ width: "40px" }}
                    src={require(`@/static/img/sellers/${userImg}`)}
                    alt=""
                  />
                  <span class="ninjadash-info-element__text">{title}</span>
                </div>
              ),
              company,
              device,
              price: `$${price}`,
              status,
            };
          })
        : resentSeller !== null
        ? resentSeller[sellerStatus.value]
            .filter((item) => item.status === sellerStatus.value)
            .map((value) => {
              const { title, id, price, company, device, userImg, status } =
                value;
              return {
                key: id,
                name: (
                  <div class="ninjadash-info-element align-center-v">
                    <img
                      style={{ width: "40px" }}
                      src={require(`../../../../static/img/sellers/${userImg}`)}
                      alt=""
                    />
                    <span class="ninjadash-info-element__text">{title}</span>
                  </div>
                ),
                company,
                device,
                price: `$${price}`,
                status,
              };
            })
        : "hjfjf";
    });

    return { columns, handleTabChange, dataSource, sellerStatus };
  },
});
</script>
