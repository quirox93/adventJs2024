function prepareGifts(gifts) {
  return Array.from(new Set(gifts)).sort((a, b) => a - b);
}

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]
