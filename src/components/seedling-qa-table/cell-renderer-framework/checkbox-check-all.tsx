import React from 'react';
import { Checkbox } from '@material-ui/core';
import { ICellRendererParams } from '@ag-grid-community/all-modules';

export const CheckboxCheckAll: React.FC<ICellRendererParams> = (props) => {
  const [checked, setChecked] = React.useState(props.value || false);

  React.useEffect(() => {
    props.setValue(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    for (const key in props.data) {
      if (key !== 'metricName' && key !== 'checkAll') {
        props.node.setDataValue(key, event.target.checked);
      }
    }
  };

  return <Checkbox color="primary" checked={checked} onChange={handleChange} />;
};
