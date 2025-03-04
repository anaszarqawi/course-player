import React from 'react';

type Color = 'green' | 'red';

type ChipProps = {
  label: string;
  color: Color;
};

const colorMap = {
  green: 'bg-green-100 text-green-900',
  red: 'bg-red-100 text-red-900',
};

const Chip = ({ label, color }: ChipProps) => {
  return <div className={`p-1 px-1.5 text-xs text-nowrap uppercase ${colorMap[color]}`}>{label}</div>;
};

export default Chip;
