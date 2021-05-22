function isPrime(num) {

  let result;

  if (num < 2) {
    return false;
  }
  
  for (let i = 2, j = Math.sqrt(num); i <= j; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;

}
