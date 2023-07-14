import Styled from 'vue3-styled-components';
import { Tabs } from 'ant-design-vue';

const { TabPane }: any = Tabs;

const AllTabs: any = Tabs;
const props = ['color'];

const TabColor = (colors: any) => `
  margin-bottom: 30px !important;
  .ant-tabs-bar {
    margin: 0;
  }
  .ant-tabs-nav-list{
    margin: 0;
  }
  .ant-tabs-nav{
    color : ${({ color }: any) =>
      color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000'};
  }
  .ant-tabs-nav .ant-tabs-tab:hover, .ant-tabs-nav .ant-tabs-tab:focus {
    //background : ${colors !== 'default' && colors};
    color : ${({ color }: any) =>
      color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000'};
  }
  .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active {
    border: none;
    border-radius: 3px;
    background : ${colors !== 'default' && colors};
		.ant-tabs-tab-btn{
			color: ${
        colors !== 'default' && colors !== '#ffffff' && colors !== '#fff' && colors !== 'white' ? '#ffffff' : '#8231D3'
      };
			svg{
				fill: ${
          colors !== 'default' && colors !== '#ffffff' && colors !== '#fff' && colors !== 'white'
            ? '#ffffff'
            : '#8231D3'
        };
			}
		}
  }
  .ant-tabs-tab.ant-tabs-tab-active{
    color : ${
      colors !== 'default' && colors !== '#ffffff' && colors !== '#fff' && colors !== 'white' ? '#ffffff' : '#8231D3'
    };
  }
  .ant-tabs-ink-bar {
    background: transparent
  }
`;

const TabChildColor = (color: any) => `
  h1, h2, h3, h4, h5, h6, p, span, i {
    padding: 15px;
    background : ${color !== 'default' && color};
    color : ${
      color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000'
    };
    margin: 0;
  }

`;

const TabBasic = Styled(AllTabs, props)`
  margin-bottom: 30px !important;
  ${({ color }: any) => color && TabColor(color)}
	.ant-tabs-tabpane{
		h2{
			color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000'
		}
		p{
			color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000'
		}
	}
	&.tab-colored{
		.ant-tabs-nav-list{
			.ant-tabs-tab.ant-tabs-tab-active{
				color: #fff !important;
			}
		}
		h2{
			color: ${({ theme }) => theme['dark-text']};
		}
	}
`;

const Child = Styled(TabPane, props)`
    ${({ color }: any) => color && TabChildColor(color)}
`;

export { TabBasic, Child };
