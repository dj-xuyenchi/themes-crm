import Styled from 'vue3-styled-components';

const MainWraper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  h1{
    font-size: 22px;
    font-weight: 600;
    padding-top: 5px;
    margin: 0;
  }
  p{
    margin: 0;
    color: #868EAE;
  }
`;

const SocialIcon = Styled('div', ['bgColor'])`
  width: 50px;
  height: 50px;
  background: ${({ bgColor }) => bgColor};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  svg{
    height: 20px;
  }
`;

export { MainWraper, SocialIcon };
