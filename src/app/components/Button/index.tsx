import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

export default function CircleButton({
  className,
  onClick,
  Icon,
}: {
  className?: string;
  onClick: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <Circle onClick={onClick} className={className}>
      <Icon />
    </Circle>
  );
}
