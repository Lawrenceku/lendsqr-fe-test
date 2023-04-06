import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => (
  <div className='space-y-3 card'>{children}</div>
);

export default Card;
