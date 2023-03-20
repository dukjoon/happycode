import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100% auto;
  font-size: 1.1rem;
  border-bottom: 1px solid red;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;
export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="입력해주세요" />
    </Box>
  );
}
