import Styled from 'styled-components';
import { Tag } from 'antd';

const TagStyle = Styled(Tag)`
    &.ninjadash-tag-new{
        .ant-tag{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
    }
`;

export { TagStyle };
