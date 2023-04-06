const numberFormat = (number: number) => {
  if (!number) return 0;
  return new Intl.NumberFormat('en-EN').format(number);
};

export default numberFormat;
