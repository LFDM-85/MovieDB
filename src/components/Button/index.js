import React from 'react';

// Styles
import { Wrapper, Content } from './Button.styles';

const Button = ({ text, callback }) => (
  <Wrapper>
    <Content type='button' onClick={callback}>
      {text}
    </Content>
  </Wrapper>
);

export default Button;
