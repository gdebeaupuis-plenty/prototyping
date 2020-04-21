import React, { useEffect } from 'react';
import { Checkbox } from '@material-ui/core';

export const CheckboxMetric: React.FC = (props) => {
  const [checked, setChecked] = React.useState(() => {
    console.log('I hope this run only once.');
    return props.value;
  });

  console.log('render', checked, props.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    props.setValue(event.target.checked);
  };

  return <Checkbox checked={checked} onChange={handleChange} />;
};

export const Test = () => {
  const [checked, setChecked] = React.useState(false);

  console.log('value?', checked);

  return <CheckboxMetric value={checked} setValue={setChecked} />;
};
