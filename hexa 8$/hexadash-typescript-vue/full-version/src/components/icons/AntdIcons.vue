<script lang="tsx">
import { Row, Col } from 'ant-design-vue';
import { AnIcon } from './IconStyled';
import * as Icons from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AntdIcon',
  components: {
    AnIcon,
  },
  setup() {
    return {
      Icons,
    };
  },
  render() {
    return (
      <Row gutter={15}>
        {Object.values(Icons)
          .filter(
            (item) =>
              item.name !== 'default' &&
              item.name !== 'setTwoToneColor' &&
              item.name !== 'getTwoToneColor' &&
              item.name !== 'canlendar' &&
              item.name !== 'interation' &&
              item.name !== 'colum-height' &&
              item.name !== 'createFromIconfontCN',
          )
          .map((icon, key) => {
            let antdIcons: any = Icons;
            const customTag = antdIcons[icon.name];
            return (
              <Col xl={6} md={12} xs={24} key={key + 1}>
                <AnIcon class="icon-single">
                  <customTag />
                  <span> {icon.name}</span>
                </AnIcon>
              </Col>
            );
          })}
      </Row>
    );
  },
});
</script>
