import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders test input with "First number" label', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('First number');
    expect(linkElement).toBeInTheDocument();
  });

  it('renders error on empty input fields', () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByTestId('process-button'));
    const error = getByText('Both fields required');
    expect(error).toBeInTheDocument();
  });

  it('alerts number of divisible on process click', async () => {
    global.alert = jest.fn();
    const { getByTestId } = render(<App />);
    const first = getByTestId('first-text-input');
    const second = getByTestId('second-text-input');
    fireEvent.change(first, { target: { value: '1' } });
    fireEvent.change(second, { target: { value: '9' } });
    fireEvent.click(getByTestId('process-button'));
    expect(global.alert).toBeCalledWith(3);
  });

  it('alerts error if invalid range', async () => {
    global.alert = jest.fn();
    const { getByTestId } = render(<App />);
    const first = getByTestId('first-text-input');
    const second = getByTestId('second-text-input');
    fireEvent.change(first, { target: { value: '9' } });
    fireEvent.change(second, { target: { value: '1' } });
    fireEvent.click(getByTestId('process-button'));
    expect(global.alert).toBeCalledWith('Invalid range');
  });

  it('alerts error when first number equal to second', async () => {
    global.alert = jest.fn();
    const { getByTestId } = render(<App />);
    const first = getByTestId('first-text-input');
    const second = getByTestId('second-text-input');
    fireEvent.change(first, { target: { value: '9' } });
    fireEvent.change(second, { target: { value: '9' } });
    fireEvent.click(getByTestId('process-button'));
    expect(global.alert).toBeCalledWith('First number equal to second');
  });

  it('alerts number of divisible on process click with long number', async () => {
    global.alert = jest.fn();
    const { getByTestId } = render(<App />);
    const first = getByTestId('first-text-input');
    const second = getByTestId('second-text-input');
    fireEvent.change(first, { target: { value: '123456789123456789501' } });
    fireEvent.change(second, { target: { value: '123456789123456789509' } });
    fireEvent.click(getByTestId('process-button'));
    expect(global.alert).toBeCalledWith(3);
  });
});
