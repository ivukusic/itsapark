import classes from 'classnames';
import { bool, func, string } from 'prop-types';
import React from 'react';
import './Button.style.scss';

export const Button = ({ className, disabled, label, loading, onClick, testID, type }) => (
  <button
    className={classes('button', { [className]: !!className })}
    data-testid={testID}
    type="button"
    onClick={!loading && !disabled ? onClick : () => {}}>
    {loading ? '...' : label}
  </button>
);

Button.propTypes = {
  className: string,
  disabled: bool,
  label: string.isRequired,
  loading: bool,
  onClick: func.isRequired,
  testID: string,
  type: string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  testID: 'button',
  type: '',
};

export default Button;
