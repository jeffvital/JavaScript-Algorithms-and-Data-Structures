const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  for (let prop in arr) {
    console.log(`It works" ${arr[prop]}`);
  }
}

makeList(result);

// O for...in não me parece ser a solução adequada.