import type { IButtonProps } from './compound';
import styled from 'styled-components';

const Root = styled.div`
  width: 225px;
  height: 48px;
  background-color: #00c17c;
  border: 2px solid #00c17c;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

function Primary({ children }: IButtonProps) {
  return <Root>{children}</Root>;
}

export default Primary;
