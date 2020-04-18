import React from 'react';
import {
  Box,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  makeStyles,
  useTheme,
  FormHelperText,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  formControl: {
    width: '100%'
  }
});

interface FormInputValues {
  number: number;
  word: string;
};
interface FormInputErrors {
  number?: string;
  word?: string;
};

interface FormInputBoolConfig {
  number: boolean;
  word: boolean;
};

interface SnackbarData {
  open?: boolean;
  severity?: 'info' | 'warning' | 'error' | 'success';
  message?: string;
}

interface InputValidation {
  inputName: string;
  validate: (value) => boolean;
  error: (value) => string;
};

function renderInputError(errorMessage: string | undefined) : JSX.Element | undefined {
  return Boolean(errorMessage) && (<FormHelperText>{errorMessage}</FormHelperText>);
};

export const FormPrototyping: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  /**
   * Snackbar state
   */
  const [snackbarData, setSnackbarData] = React.useState<SnackbarData>({});

  /**
   * Form State
   */
  const [requireds] = React.useState<FormInputBoolConfig>({
    number: true,
    word: true,
  });
  const [errors, setErrors] = React.useState<FormInputErrors>({});
  const [data, setData] = React.useState<FormInputValues>({
    number: undefined,
    word: undefined,
  });
  const validations: InputValidation[] = [
    {
      inputName: 'number',
      validate: (value) => value <= 20,
      error: () => 'number must be less or equal than 20',
    },
  ];

  /**
   * Form Helpers
   */
  const isFormValid = (data: FormInputValues, validations: InputValidation[]): boolean => {
    let allValid = true;

    for (const validation of validations) {
      if (!validation.validate(data[validation.inputName])) {
        const err = validation.error(validation.inputName);
        console.log(validation.inputName, err);
        setErrors({ ...errors, [validation.inputName]: err });
        allValid = false;
      }
    }

    return allValid;
  };


  /**
   * Handlers
   */

  const onChange = (key: string) => (event: React.ChangeEvent<{ value: unknown }>) => {
    const newData = {
      ...data,
      [key]: event.target.value
    }
    setData(newData);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});

    if (isFormValid(data, validations)) {
      setSnackbarData({ open: true, severity: 'success' });
    } else {
      setSnackbarData({ open: true, severity: 'error', message: 'An error occured, unable to submit.'  });
    }
  }

  /**
   * Render
   */
  return (
    <Box display="flex" justifyContent="center" marginTop={theme.spacing(2)}>
      { snackbarData.open && (
        <Snackbar open={snackbarData.open} autoHideDuration={3000} onClose={() => setSnackbarData({ open: false })}>
          <Alert severity={snackbarData.severity}>{snackbarData.message || 'Form submitted successfully!'}</Alert>
        </Snackbar>
      )}

      <Box width="300px" component="form" display="flex" flexDirection="column" alignItems="center" onSubmit={onSubmit}>
        <Box marginBottom={theme.spacing(0.25)} width="100%">
          <FormControl className={classes.formControl} required={requireds.number} error={Boolean(errors.number)}>
            <InputLabel id="label-number">Number:</InputLabel>
            <Select
              id="input-number"
              labelId="label-number"
              value={data.number || ''}
              onChange={onChange('number')}
            >
              <MenuItem value={undefined}>&nbsp;</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
            { renderInputError(errors.number) }
          </FormControl>
        </Box>

        <Box marginBottom={theme.spacing(0.25)} width="100%">
          <FormControl className={classes.formControl} required={requireds.word} error={Boolean(errors.word)}>
            <InputLabel id="label-word">Word:</InputLabel>
            <Select
              id="input-word"
              labelId="label-word"
              value={data.word || ''}
              onChange={onChange('word')}
            >
              <MenuItem value="icecream">Icecream</MenuItem>
              <MenuItem value="cake">Cake</MenuItem>
              <MenuItem value="smoothie">Smoothie</MenuItem>
            </Select>
            { renderInputError(errors.word) }
          </FormControl>
        </Box>

        <Box alignSelf="flex-end">
          <Button color="primary" type="submit" variant="contained">Submit</Button>
        </Box>
      </Box>
    </Box>
  )
};