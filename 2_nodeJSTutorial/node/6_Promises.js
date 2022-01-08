function MyPromise() {
  return new Promise((resolve, reject) => {
    // This resolve & reject here act as return statements for two different cases
    // It returns 0 to the next .then() as a parameter
    // resolve(0);

    // it returns 1 to the next .then() as parameter , which will be used by it
    reject(1);
  });
}

// When does a promise gets rejected ?
// Ans : It gets rejected when something went wrong while executing the functions / statements inside promise

MyPromise()
  .then(
    // using value returned by resolve OR reject
    (res) => {
      console.log("pr resolved " + res);
    },
    (res) => {
      console.log("pr rejected " + res);
    }
  )
  .then(
    () => {
      console.log("i am shivam");
    },
    () => {
      console.log("i am not shivam");
    }
  )
  .finally(() => {
    console.log("this is final");
  })
  .then(() => {
    console.log("yes we can have chaining even after final");
  });

/**
 * Notes :--->
 * 0. Why callbacks so necessary ?
 * Ans : In order to make calls to databases , Api's we use callbacks , to do so , and also in order to add that data
 * to our website , or use that data in our website , we have to use callbacks BECAUSE --> as we know that callacks
 * gets accumulated in callback queue OR task queue , so as it is a queue , everyone gets executed one by one and in order
 * if we did not used callback then , due to async nature some functions or lines would get executed earlier than others
 * which would lead to show error of No data Available . Even if data was fetched .
 *
 * 1. What is a callback hell ? How promises come to rescue ?
 * Ans : When you nest multiple callbacks with one callback depending on OR taking as params the returned
 * value of previous callback . And it keeps going on until you reach the satisfactory end .
 * So it makes the code unReadable & unCorrectable if some modifications need to be done in future
 * You just will have to write the whole system again or change each and everyone personally
 *
 * Promises In JS :----------
 * In order to save ourselves from such an unReadable & maintainable code of callback hell , we use promises
 * that has .then() methods which take callbacks inside them , and have strict order so we saved ourselves even
 * from async affects of programming . As we can chain multiple .then() methods one after other , and also .catch()
 * methods after any number of .then() methods . Hence it is more readable , maintainable , can be easily modified
 * as it can be read easily .
 */
