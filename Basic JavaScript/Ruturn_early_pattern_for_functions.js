function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  }

  return Math.round(math.pow(math.sqrt(a) + math.sqrt(b), 2));
}

abTest(2, 2);
