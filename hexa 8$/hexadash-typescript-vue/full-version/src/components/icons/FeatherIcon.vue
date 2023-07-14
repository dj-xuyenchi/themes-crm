<script lang="tsx">
import * as Icons from 'feather-icons';
import { Row, Col } from 'ant-design-vue';
import { Icon, IconWrapper } from './IconStyled';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeatherIcon',
  components: {
    Icon,
    IconWrapper,
  },
  setup() {
    return {
      Icons,
    };
  },
  render() {
    return (
      <Row gutter={15}>
        {Object.keys(Icons.icons).map((icon) => {
          return (
            <Col xl={6} md={12} xs={24} key={icon}>
              <Icon class="icon-single">
                <sdFeatherIcons type={icon} size="14" />
                <span> {icon}</span>
              </Icon>
            </Col>
          );
        })}
      </Row>
    );
  },
});
</script>
