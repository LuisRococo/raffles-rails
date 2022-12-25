export function formatNumber(number: number, length: number = 5) {
  const actualNumberLength = number.toString().length;
  const zerosToAdd = length - actualNumberLength;
  let formattedNumber = number.toString();

  if (zerosToAdd <= 0) return formattedNumber;

  for (let i = 0; i < zerosToAdd; i++) {
    formattedNumber = 0 + formattedNumber;
  }

  return formattedNumber;
}
