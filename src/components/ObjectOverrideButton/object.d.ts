import type { ReactNode } from 'react';

interface IDefaultOverrides {
  css?: string | CSSPropertiesType;
}

interface IDefaultProps {
  cssStyle?: string;
}

interface IRootProps extends IDefaultProps {}

interface ITextProps extends IDefaultProps {}

interface IButtonProps {
  children: ReactNode;
  overrides?: {
    Root?: IDefaultOverrides;
    Text?: IDefaultOverrides;
  };
}
