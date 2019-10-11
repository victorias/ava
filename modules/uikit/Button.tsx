import * as React from 'react';

interface Props {
  onClick: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
