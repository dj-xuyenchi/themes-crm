import Styled from 'vue3-styled-components';

const borderd = (type: any) => {
  return `
        background: #ffffff;
        color: #5A5F7D;
        border: 1px solid ${type};
    `;
};
const content = () => {
  return `
        justify-content: space-around;
    `;
};
const bg = () => {
  return `
        color: #5A5F7D;
      `;
};
const grad = (type: any, direction: any) => {
  return `
         background-image: linear-gradient(${direction}, ${type[0]}, ${type[1]});
         height: 100px;
        `;
};
const props = ['isbordered', 'type', 'iscontent', 'isbg', 'isgrad', 'direction'];
const ColorPalette = Styled('div', props)`
    width: 100%;
    height: 44px;
    background: ${({ type }: any) => type}
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 15px;
    justify-content: center;
    ${({ isbordered, type }: any) => isbordered && borderd(type)}
    ${({ iscontent }: any) => iscontent && content()}
    ${({ isbg }: any) => isbg && bg()}
    ${({ isgrad, type, direction }: any) => isgrad && grad(type, direction)}
`;

export { ColorPalette };
