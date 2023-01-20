import type { IButtonProps } from './compound';
import styled from 'styled-components';

const Root = styled.div`
  width: 225px;
  height: 48px;
  background-color: white;
  border-radius: 6px;
  border: 2px solid #00c17c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Secondary({ children }: IButtonProps) {
  return <Root>{children}</Root>;
}

export default Secondary;
