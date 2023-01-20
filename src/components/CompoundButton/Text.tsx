import styled from 'styled-components';
import { ITextProps, TButton } from './compound';

const Root = styled.span<{ type: TButton }>`
  color: ${(props) => (props.type === 'primary' ? 'white' : '#00c17c')};
`;

function Text({ children, type }: ITextProps) {
  return <Root type={type}>{children}</Root>;
}

export default Text;
