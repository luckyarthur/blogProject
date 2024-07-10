import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.css';

interface CardProp {
  className: string;
  delegated?: {
    [x: string]: any;
  };
}

function Card({ children, className, ...delegated }: React.PropsWithChildren<CardProp>) {
  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </div>
  );
}

export default Card;
