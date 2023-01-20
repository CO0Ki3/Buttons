import styled from 'styled-components';
import { IButtonProps, IRootProps, ITextProps } from './object';

const Root = styled.div<IRootProps>`
  width: 225px;
  height: 48px;

  background-color: #00c17c;
  border: 2px solid #00c17c;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  ${(props) => props.cssStyle ?? ''};
`;

const Text = styled.p<ITextProps>`
  color: white;

  ${(props) => props.cssStyle ?? ''};
`;

function ObjectOverrideButton({ children, overrides }: IButtonProps) {
  return (
    <Root
      {...(typeof overrides?.Root?.css === 'string'
        ? {
            cssStyle: overrides.Root.css,
            ...(overrides.Root ?? {}),
          }
        : overrides?.Root === undefined
        ? {}
        : { style: overrides.Root.css, ...overrides.Root })}
    >
      <Text
        {...(typeof overrides?.Text?.css === 'string'
          ? {
              cssStyle: overrides.Text.css,
              ...(overrides.Text ?? {}),
            }
          : overrides?.Text === undefined
          ? {}
          : { style: overrides.Text.css, ...overrides.Text })}
      >
        {children}
      </Text>
    </Root>
  );
}

export default ObjectOverrideButton;
