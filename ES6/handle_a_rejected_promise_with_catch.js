const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
})
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });
