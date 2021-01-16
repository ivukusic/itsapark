import BigDecimal from 'js-big-decimal';

export const calculateDivisible = ({ first, second, divider: divide }) => {
  let number = 0;
  const divider = new BigDecimal(divide);
  let start = new BigDecimal(first);
  let end = new BigDecimal(second);
  if (start.compareTo(end) === 0) {
    return { error: 'First number equal to second' };
  } else if (start.compareTo(end) > 0) {
    return { error: 'Invalid range' };
  } else {
    const add = new BigDecimal(1);
    end = end.add(add);
    while (start.compareTo(end) !== 0) {
      if (BigDecimal.modulus(start.value, divider.value) === '0') {
        number++;
      }
      start = start.add(add);
    }
  }
  return { number };
};
