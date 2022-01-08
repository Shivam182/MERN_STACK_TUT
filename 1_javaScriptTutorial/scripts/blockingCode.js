console.log("shivam");

async function myPromise() {
  return new Promise(
    (resolve) => {
      resolve("resolved");
    },
    (reject) => {
      reject("rejected");
    }
  );
}

async function khsd() {
  const res = await myPromise();
  console.log(res)
  console.log('dsdf')
}

khsd()
console.log("at last");

