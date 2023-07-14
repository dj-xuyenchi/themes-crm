import Styled from 'vue3-styled-components';

const ListStyle = Styled.div`
  .icon {
    color: ${({ theme }) => theme['success-color']}
  }
`;

export { ListStyle };
