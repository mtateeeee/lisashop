import React from 'react';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import { ShoppingOutlined } from '@ant-design/icons';

const Style = styled.div`
  .ant-btn-primary {
    background-color: black;
    border-radius: 0px;
    &:hover {
        background-color: orange !important;
        //border-color: var(--primary-hover-color) !important;
            }
        }
`;


// const Buttons = () => (
//     <StyleButtons>
//         <Space direction="vertical">
//       <Space wrap>
        
//         <Button type="primary" icon={<ShoppingOutlined />}>
//           Search
//         </Button>
        
        
//       </Space>
//     </Space>
//     </StyleButtons>
//   );

const ButtonIcon = styled.span`
  margin-right: 5px;
  
`;
const ButtonText = styled.span`
  font-weight: bold;
`;
const Buttons = ({ icon, text }) => {
    return (
      
        <div>
        <Style>
        <Button type="primary">
        {icon && <ButtonIcon>{icon}</ButtonIcon>}
        {text && <ButtonText>{text}</ButtonText>}
        </Button>
        </Style>
      </div>
      
    );
};
  
  export default Buttons;