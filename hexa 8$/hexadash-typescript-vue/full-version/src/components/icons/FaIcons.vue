<script lang="tsx">
import { Row, Col } from 'ant-design-vue';
import { Icon, IconWrapper } from './IconStyled';
import icons from '../../config/icon/icon.json';
import * as FontAwesomeIcon from '@fortawesome/free-solid-svg-icons';
import { defineComponent } from 'vue';

const fontAwesomeIcons: any = FontAwesomeIcon;
const { faIcons } = icons;
export default defineComponent({
  name: 'FontAwesome',
  components: {
    Icon,
    IconWrapper,
  },
  setup() {
    return { faIcons };
  },
  render() {
    return (
      <Row gutter={15}>
        {Object.keys(FontAwesomeIcon)
          .filter((item) => item && item !== 'fas' && item !== 'prefix')
          .map((icon, key) => {
            return (
              <Col xl={6} md={12} xs={24} key={key + 1}>
                <Icon class="icon-single">
                  <font-awesome-icon
                    icon={fontAwesomeIcons[icon]}
                    size="1x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />
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
