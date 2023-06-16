const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  const failureItems = [];
  const a = "texto";
  const b = "texto";
  for (let i = 0; i < result.failure.length; i++) {
    failureItems.push(`${a + arr.failure[i] + b}`);
  }
  return failureItems;
}

console.log(makeList(result));

// almost getting there!