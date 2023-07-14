<script lang="tsx">
import { PageHeaderStyle } from './style';
import { defineComponent } from 'vue';

export const PageHeader = defineComponent({
  components: {
    PageHeaderStyle,
  },
  props: {
    title: [String, Object],
    subTitle: [String, Object],
    bgColor: String,
    class: String,
    routes: {
      type: Array,
      default: () => [
        {
          path: 'index',
          breadcrumbName: 'Dashboard',
        },
        {
          path: 'course',
          breadcrumbName: 'Courses',
        },
      ],
    },
    buttons: Array,
    ghost: Boolean,
    breadcrumb: Object,
  },

  render() {
    return (
      <div>
        <div
          style={
            {
              // backgroundColor: this.bgColor || "#F4F5F7",
            }
          }
        >
          <PageHeaderStyle
            class={this.class}
            title={this.title || this.$slots.title?.()}
            subTitle={this.subTitle || (this.$slots.subTitle ? this.$slots.subTitle() : null)}
            // breadcrumb={this.routes.length && { routes: this.routes }}
            ghost={this.ghost}
            extra={this.$slots.buttons && this.$slots.buttons()}
          >
            {this.routes.length ? (
              <a-breadcrumb>
                {this.routes.map((item: any, key) => {
                  return (
                    <a-breadcrumb-item key={key}>
                      {key == 0 && <unicon name="estate"></unicon>}
                      {key !== this.routes.length - 1 ? <a to="#">{item.breadcrumbName}</a> : item.breadcrumbName}
                    </a-breadcrumb-item>
                  );
                })}
              </a-breadcrumb>
            ) : null}
          </PageHeaderStyle>
        </div>
      </div>
    );
  },
});

export default PageHeader;
</script>
