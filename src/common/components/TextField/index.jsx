import classes from 'classnames';
import { bool, func, string } from 'prop-types';
import React from 'react';
import './TextField.style.scss';

export const TextField = ({ className, disabled, error, field, label, onChange, required, testID, type, value }) => (
  <div
    className={classes('text-field', { [className]: !!className, 'text-field--error': !!error })}
    data-testid={testID}>
    <div className="text-field_input-container">
      <label htmlFor={field}>{`${label}${required ? '*' : ''}`}</label>
      <input
        data-testid={`${testID}-input`}
        className={`${disabled ? 'disabled' : ''}`}
        onChange={!disabled ? onChange : () => {}}
        type={type}
        value={value}
      />
    </div>
    {error && <div className="text-field__error-message">{error}</div>}
  </div>
);

TextField.propTypes = {
  className: string,
  disabled: bool,
  error: string,
  field: string.isRequired,
  label: string,
  onChange: func.isRequired,
  required: bool,
  testID: string,
  type: string,
  value: string.isRequired,
};

TextField.defaultProps = {
  disabled: false,
  error: '',
  required: false,
  testID: 'text-field',
  type: 'text',
};

export default TextField;
