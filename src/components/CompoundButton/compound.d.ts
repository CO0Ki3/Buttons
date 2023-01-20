import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
}

type TButton = 'primary' | 'secondary';

interface ITextProps {
  children: ReactNode;
  type: TButton;
}
