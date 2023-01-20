import styled from 'styled-components';
import { IButtonProperties, IButtonProps } from './props';

const Root = styled.div<Partial<IButtonProperties>>`
  width: ${(props) => props.width ?? '225px'};
  height: ${(props) => props.width ?? '48px'};
  color: ${(props) => props.color ?? 'white'};
  background-color: ${(props) => props.bgColor ?? '#00c17c'};
  border: ${(props) => props.border ?? '2px solid #00c17c'};
  border-radius: ${(props) => props.borderRadius ?? '6px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

function PropsOverrideButton({
  width,
  height,
  color,
  bgColor,
  border,
  borderRadius,
  children,
}: IButtonProps) {
  return (
    <Root
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      border={border}
      borderRadius={borderRadius}
    >
      {children}
    </Root>
  );
}

export default PropsOverrideButton;
