import type { ReactNode } from 'react';

interface IButtonProperties {
  width: string;
  height: string;
  color: string;
  bgColor: string;
  border: string;
  borderRadius: string;
}

interface IButtonProps extends Partial<IButtonProperties> {
  children: ReactNode;
}
