export function isWithinMultiplierRange(a: number, b: number) {
  if (a === 0) {
    return false;
  }

  const multiplier = b / a;

  return multiplier >= 1.25 && multiplier <= 10;
}
