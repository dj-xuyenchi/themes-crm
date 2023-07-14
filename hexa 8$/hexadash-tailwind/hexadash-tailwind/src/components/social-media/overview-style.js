import Styled from 'styled-components';

const MainWraper = Styled.div`
  .social-icon{
    span{
      font-size: 20px;
    }
  }
`;

const SocialIcon = Styled.div`
  background: ${({ bgColor }) => bgColor};
`;

export { MainWraper, SocialIcon };
