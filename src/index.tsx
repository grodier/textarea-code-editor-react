import React from 'react';

type SayHelloProps = {
  name: string;
};

export const SayHello = ({ name }: SayHelloProps): JSX.Element => (
  <div>Hey {name}, say hello to TypeScript.</div>
);
