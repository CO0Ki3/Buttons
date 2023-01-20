import type { TButtonProps } from './button';
import styled from 'styled-components';

const Root = styled.div`
  width: 225px;
  height: 48px;
  color: #00c17c;
  background-color: white;
  border-radius: 6px;
  border: 2px solid #00c17c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SecondaryButton({ children }: TButtonProps) {
  return <Root>{children}</Root>;
}

export default SecondaryButton;
