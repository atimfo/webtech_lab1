import React from 'react';

interface HelloProps {
  name: string;
}

const Greet: React.FC<HelloProps> = ({ name }) => {
  return <h1>Привет, {name}!</h1>;
};

export default Greet;
