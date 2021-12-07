import React from 'react';

type SayHelloProps = {
  name: string;
};

const SayHello = ({ name }: SayHelloProps): JSX.Element => (
  <div>Hey {name}, say hello to TypeScript.</div>
);

export default SayHello;
