import * as React from 'react';
import { Fonts, FuturaWeights, Colors } from './constants';
interface Props {
  onClick: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: Props) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            display: flex;
            text-align: center;
            justify-content: space-around;
            align-items: center;
            padding: 1.3rem 2rem;
            font-size: 2.4rem;
            font-family: ${Fonts.FUTURA_PT};
            font-weight: ${FuturaWeights.BOOK};
            border: 2px ${Colors.WHITE};
            color: ${Colors.WHITE};
            border-radius: 4px;
            background-color: transparent;
            border-style: solid;
          }
        `}
      </style>
    </>
  );
};

export default Button;
